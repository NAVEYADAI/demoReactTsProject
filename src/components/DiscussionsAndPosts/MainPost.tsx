import * as React from 'react';
import {post} from "../../types/post";
import Post from "./Post/Post";
import {useEffect} from "react";
import {AllCategory} from "../../types/category";

interface MainPostProps {
    categories:AllCategory;
}
function MainPost() {
    const [postList, setPostList] = React.useState<post[]>([]);
    // const {categories} = props;
    useEffect(() => {
        postList.push(
            {image:" ", text:"text", title:"title"},
        )
        postList.push(
            {image:" ", text:"text2", title:"title2"}
        )
    }, []);
    return(
        <>
            {
                postList && postList.map((item) => (
                    <Post image={item.image} title={item.title} text={item.text}/>
                ))
            }
        </>
    );
}
export default MainPost;