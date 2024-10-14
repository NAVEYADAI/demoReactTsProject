import Post from './Post'
import * as React from 'react'
import { post } from '../../../../types/post'
import Box from '@mui/material/Box'
interface PostItemButtonProps {
    postData: post
}
const PostItemButton = (props: PostItemButtonProps) => {
    const { postData } = props

    return (
        <Box sx={{ paddingTop: 2 }}>
            <Post postData={postData} />
        </Box>
    )
}

export default PostItemButton
