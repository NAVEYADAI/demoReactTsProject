import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import { red } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import ShortcutIcon from '@mui/icons-material/Shortcut'
import Card from '@mui/material/Card'
import * as React from 'react'
import { Response } from '../../../../../../types/responseToResponse'
import { useMyContext } from '../../../../../../GlobalVaribale'
import AddResponseToResponseArea from './AddResponseToResponseArea'
import GradsComponent from './GradsComponent'
import LikeAndDisLike from '../../LikeAndDisLike'
import Chip from '@mui/material/Chip'
import CommentIcon from '@mui/icons-material/Comment'
import { useAppDispatch } from '../../../../../../store/store'
import {
    addResponseToResponse,
    clickOpenResponseToResponse,
    setNumOfLikeOnLikeInResponse,
} from '../../../../../../store/features/postSplice'
import useAxiosInstance from '../../../../../../AxiosInstance'

interface ResponseCardProps {
    response: Response
    responses: Response[]
    sizeForMarginLeft: number
    open: boolean
    setOpen: (open: boolean) => void
    postId: string
}

const ResponseCard = (props: ResponseCardProps) => {
    const { response, open, setOpen, postId } = props
    const [canResponse, setCanResponse] = React.useState(false)
    const [newResponse, setNewResponse] = React.useState('')
    const { globalUser } = useMyContext()
    const dispatch = useAppDispatch()
    const axiosInstance = useAxiosInstance()

    const clickSendResponseToResponse = async () => {
        try {
            console.log('userId', globalUser)
            const res = await axiosInstance.post(
                '/response/createResponseToResponse',
                {
                    responseId: response.id,
                    userId: globalUser.id,
                    description: newResponse,
                }
            )
            const responseToAdd: Response = {
                id: res.data.id.toString(),
                createdAt: res.data.createdAt,
                description: res.data.description,
                grade: res.data.grade,
                responseCount: 0,
                myLike: null,
                likeCount: 0,
                disLikeCount: 0,
                responseTo: [],
                userName: globalUser.userName,
            }

            // הוספת הדפסה לבדוק את התגובה שנוספה
            console.log('Response to add:', responseToAdd)
            dispatch(
                addResponseToResponse({
                    postId,
                    responseId: response.id,
                    newResponse: responseToAdd,
                })
            )
            setCanResponse(false)
            setNewResponse('')
        } catch (error) {
            console.error('Error creating response to response:', error)
        }
    }

    const clickOpenNewResponse = () => {
        setCanResponse(!canResponse)
    }

    const clickOpenResponses = async () => {
        try {
            const res = await axiosInstance.get(
                '/response/responseByResponseId',
                {
                    params: {
                        responseId: response.id,
                        userId: globalUser.id,
                    },
                }
            )
            if (res.status === 200) {
                dispatch(
                    clickOpenResponseToResponse({
                        postId,
                        dadResponseId: response.id,
                        chileResponses: res.data,
                    })
                )
                setOpen(!open)
            }
        } catch (error) {
            console.error('Error fetching responses:', error)
        }
    }

    const setCountLikesInState = (
        numOfLike: number,
        numOfDisLike: number,
        isLike: boolean | null
    ) => {
        dispatch(
            setNumOfLikeOnLikeInResponse({
                numOfLike,
                numOfDisLike,
                postId,
                responseId: response.id,
                isLike,
            })
        )
    }

    return (
        <Card sx={{ width: 400 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="user-avatar">
                        {response?.userName?.[0] || 'U'}
                    </Avatar>
                }
                title={response.userName || 'Unknown User'}
                subheader={response.createdAt?.toString()}
            />
            <Typography variant="body2" color="text.secondary">
                {response.description}
            </Typography>
            <CardActions disableSpacing>
                <Chip
                    variant="outlined"
                    icon={<ShortcutIcon />}
                    label={response.responseCount}
                    onClick={clickOpenResponses}
                />
                <IconButton aria-label="comment" onClick={clickOpenNewResponse}>
                    <CommentIcon />
                </IconButton>
                <LikeAndDisLike
                    myLike={response.myLike}
                    numOfDisLikes={response.disLikeCount}
                    numOfLikes={response.likeCount}
                    idOfEntity={response.id}
                    setCountLikesInState={setCountLikesInState}
                />
                <GradsComponent grads={response.grade} />
            </CardActions>
            <AddResponseToResponseArea
                canResponse={canResponse}
                newResponse={newResponse}
                setNewResponse={setNewResponse}
                clickSendResponseToResponse={clickSendResponseToResponse}
            />
        </Card>
    )
}

export default ResponseCard
