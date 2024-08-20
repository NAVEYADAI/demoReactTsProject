import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import PostActions from "./PostActions";
import Card from "@mui/material/Card";
import * as React from "react";
import {post} from "../../../types/post";

const Post = (props: post) =>{
    const {image, title, text} = props;
    return(
        <>
            <Card>
                <PostTitle  />
                <PostBody image={image} title={title} text={text}/>
                <PostActions/>
            </Card>
        </>
    );
}
export default Post;