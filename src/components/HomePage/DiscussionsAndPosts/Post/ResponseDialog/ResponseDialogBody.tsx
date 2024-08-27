import * as React from "react";
import {Response} from "../../../../../types/responseToResponse"
import {Dispatch, SetStateAction, useEffect} from "react";
import DialogContent from "@mui/material/DialogContent";
import ResponseListOnPost from "./ResponseListOnPost";
import {post} from "../../../../../types/post";
import Post from "../Post";

interface ResponseDialogBodyProps {
    responses: Response[];
    setResponses: Dispatch<SetStateAction<Response[]>>;
    postData:post
}
const ResponseDialogBody = (props: ResponseDialogBodyProps) => {
    const {responses,setResponses, postData} = props
    useEffect(() => {
        console.log("responseList", responses);
    }, [responses]);
    return(
        <>
            <DialogContent dividers={true}>
                <Post postData={postData}/>
                <ResponseListOnPost responses={responses} setResponses={setResponses}/>
            </DialogContent>
        </>
    );
}

export default ResponseDialogBody;