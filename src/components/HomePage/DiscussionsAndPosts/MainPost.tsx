import * as React from 'react';
import {useEffect} from "react";
import Post from "./Post/Post";
import {CategoryState} from "../homePage";
import {post} from "../../../types/post";

interface MainPostProps {
    selectedCategories: CategoryState;
    PositiveNegativeSelectedArray: boolean[];
}
function MainPost(props: MainPostProps) {
    const {selectedCategories, PositiveNegativeSelectedArray} = props;
    const [postList] = React.useState<post[]>([
        {image:" ", text:"text", title:"title",data: new Date(), userName: 'nave', id:1},
        {image:" ", text:"text2", title:"title2",data: new Date(), userName: 'yadai', id:2},
        {image:" ", text:"text", title:"title",data: new Date(), userName: 'nave', id:3},
        {image:" ", text:"text2", title:"title2",data: new Date(), userName: 'yadai', id:4},
        {image:" ", text:"text", title:"title",data: new Date(), userName: 'nave', id:5},
        {image:" ", text:"text2", title:"title2",data: new Date(), userName: 'yadai', id:6}
    ]);



    useEffect(() => {
        console.log("api req for back");
    }, [selectedCategories, PositiveNegativeSelectedArray]);
    return(
        <>
            {
                postList && postList.map((item) => (
                    <Post postData={item}/>
                ))
            }
        </>
    );
}
export default MainPost;