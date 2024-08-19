import * as React from 'react';
import PostTitle from "./Post/PostTitle";
import PostBody from "./Post/PostBody";
import PostActions from "./Post/PostActions";
import Card from '@mui/material/Card';


function MainPost() {

    return(
        <>
            <Card>

                <PostTitle  />
                <PostBody image="nave" title="work" text="good"/>
                <PostActions/>
            </Card>
        </>
    );
}
export default MainPost;