import * as React from 'react';
import {post} from "../../types/post";
import Post from "./Post/Post";
import {useEffect} from "react";

interface MainPostProps {
    selectedCategories: string[]
}
function MainPost(props: MainPostProps) {
    const {selectedCategories} = props;
    const [postList] = React.useState<post[]>([]);
    const [count, setCount] = React.useState(0);
    // const {categories} = props;
    useEffect(() => {
        // postList.push(
        //     {image:" ", text:"text", title:"title"},
        // )
        // postList.push(
        //     {image:" ", text:"text2", title:"title2"}
        // )
        setCount(count + 1 )
        console.log(count)
    }, [count, selectedCategories])
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