import ResponsePost from './Response/ResponsePost'
import List from '@mui/material/List'
import * as React from 'react'
import { Response } from '../../../../../types/responseToResponse'

interface ResponseListOnPostProps {
    responses: Response[]
    postId: string
}
const ResponseListOnPost = (props: ResponseListOnPostProps) => {
    const { responses, postId } = props

    return (
        <List sx={{ height: '70%' }}>
            {responses &&
                responses.map((item) => (
                    <ResponsePost
                        response={item}
                        sizeForMarginLeft={0}
                        responses={responses}
                        postId={postId}
                    />
                ))}
        </List>
    )
}
export default ResponseListOnPost
