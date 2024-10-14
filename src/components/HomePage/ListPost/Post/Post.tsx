import PostTitle from './PostTitle'
import PostBody from './PostBody'
import PostActions from './PostActions'
import Card from '@mui/material/Card'
import * as React from 'react'
import { post } from '../../../../types/post'
import ListItemButton from '@mui/material/ListItemButton'
import ResponseDialog from './ResponseDialog'
import Box from '@mui/material/Box'

export interface PostInterface {
    postData: post
}
const Post = (props: PostInterface) => {
    const { postData } = props
    const [open, setOpen] = React.useState(false)

    const handleClose = (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
        console.log('try close from itemButton')
        setOpen(false)
    }
    const openDialog = () => {
        console.log('from itemButton')
        if (!open) {
            console.log('from itemButton')
            setOpen(true)
        }
    }

    return (
        <Card sx={{ width: 400 }}>
            <ListItemButton onClick={openDialog}>
                <Box>
                    <PostTitle
                        date={postData.createdAt}
                        userName={postData.userName}
                    />
                    <PostBody
                        image={postData.image}
                        title={postData.title}
                        text={postData.text.substring(0, 15)}
                    />
                    <PostActions postId={postData.id} postData={postData} />
                </Box>
            </ListItemButton>
            <ResponseDialog
                open={open}
                handleClose={handleClose}
                postId={postData.id}
                postData={postData}
            />
        </Card>
    )
}
export default Post
