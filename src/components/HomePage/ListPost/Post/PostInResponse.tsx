import PostTitle from './PostTitle'
import PostBody from './PostBody'
import PostActions from './PostActions'
import Card from '@mui/material/Card'
import * as React from 'react'
import { PostInterface } from './Post'

const PostInResponse = (props: PostInterface) => {
    const { postData } = props
    return (
        <Card>
            <PostTitle date={postData.createdAt} userName={postData.userName} />
            <PostBody
                image={postData.image}
                title={postData.title}
                text={postData.text}
            />
            <PostActions postId={postData.id} postData={postData} />
            <br />
        </Card>
    )
}
export default PostInResponse
