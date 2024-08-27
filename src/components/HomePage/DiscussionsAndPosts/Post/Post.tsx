import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import PostActions from "./PostActions";
import Card from "@mui/material/Card";
import * as React from "react";
import {post} from "../../../../types/post";

interface PostInterface{
    postData: post;
}
const Post = (props: PostInterface) =>{
    const {postData} = props
    return(
        <>
            <Card>
                <PostTitle  date={postData.data} userName={postData.userName}/>
                <PostBody image={postData.image} title={postData.title} text={postData.text}/>
                <PostActions postId={postData.id} postData={postData}/>
            </Card>
            <br/>
        </>
    );
}
export default Post;