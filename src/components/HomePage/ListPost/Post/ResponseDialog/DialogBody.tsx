import * as React from 'react'
import Box from '@mui/material/Box'
import ResponseDialogTitle from './ResponseDialogTitle'
import ResponseDialogBody from './ResponseDialogBody'
import ResponseDialogActions from './ResponseDialogActions'
import { post } from '../../../../../types/post'
import { useMyContext } from '../../../../../GlobalVaribale'
import { useAppDispatch, useAppSelector } from '../../../../../store/store'
import { useEffect } from 'react'
import {
    addResponseToPost,
    clickOpenResponseToPost,
} from '../../../../../store/features/postSplice'
import useAxiosInstance from '../../../../../AxiosInstance'
import { Response } from '../../../../../types/responseToResponse'

export interface DialogBodyProps {
    handleClose: (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => void
    postId: string
    postData: post
}

const DialogBody = (props: DialogBodyProps) => {
    const { globalUser } = useMyContext()
    const dispatch = useAppDispatch()
    const { handleClose, postId, postData } = props
    const axiosInstance = useAxiosInstance()
    const postResponses = useAppSelector(
        (state) =>
            state.post.find((post) => post.id === postId)?.responses || []
    )

    const clickCloseButton = (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
        handleClose(e)
    }

    useEffect(() => {
        const req = async () => {
            try {
                const res = await axiosInstance.get(
                    '/response/responseByPostId',
                    {
                        params: {
                            postId,
                            userId: globalUser.id,
                        },
                    }
                )
                dispatch(
                    clickOpenResponseToPost({ postId, listResponse: res.data })
                )
            } catch (error) {
                console.log(error)
            }
        }
        req()
    }, [ ])

    const [newResponse, setNewResponse] = React.useState('')

    const createNewResponse = async (description: string) => {
        try {
            const req = await axiosInstance.post(
                '/response/createResponseToPost',
                {
                    userId: globalUser.id,
                    postId: postId,
                    description: description,
                }
            )

            if (req.status === 201) {
                const responseToAdd: Response = {
                    id: req.data.id.toString(),
                    createdAt: req.data.createdAt,
                    description: req.data.description,
                    grade: req.data.grade,
                    responseCount: 0,
                    myLike: null,
                    likeCount: 0,
                    disLikeCount: 0,
                    responseTo: [],
                    userName: globalUser.userName,
                }
                console.log('Adding response:', responseToAdd) // הוספת לוג
                dispatch(
                    addResponseToPost({ postId, newResponse: responseToAdd })
                )
                setNewResponse('')
            }
        } catch (error) {
            console.log('Error creating response:', error) // הוספת לוג
        }
    }

    return (
        <Box display="flex" flexDirection="column" height="100%">
            <ResponseDialogTitle clickCloseButton={clickCloseButton} />
            <Box flexGrow={1} overflow="auto">
                <ResponseDialogBody
                    responses={postResponses}
                    postData={postData}
                />
            </Box>
            <ResponseDialogActions
                newResponse={newResponse}
                setNewResponse={setNewResponse}
                createNewResponse={createNewResponse}
            />
        </Box>
    )
}

export default DialogBody
