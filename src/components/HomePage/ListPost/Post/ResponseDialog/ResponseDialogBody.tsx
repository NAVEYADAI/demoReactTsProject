import * as React from 'react'
import { Response } from '../../../../../types/responseToResponse'
import { useEffect } from 'react'
import DialogContent from '@mui/material/DialogContent'
import ResponseListOnPost from './ResponseListOnPost'
import { post } from '../../../../../types/post'
import PostInResponse from '../PostInResponse'
import Box from '@mui/material/Box'

interface ResponseDialogBodyProps {
    responses: Response[]
    postData: post
}
const ResponseDialogBody = (props: ResponseDialogBodyProps) => {
    const { responses, postData } = props
    useEffect(() => {}, [])
    return (
        <DialogContent dividers={true}>
            <PostInResponse postData={postData} />
            <Box flexGrow={1} display="flex">
                <ResponseListOnPost
                    responses={responses}
                    postId={postData.id}
                />
            </Box>
        </DialogContent>
    )
}

export default ResponseDialogBody
