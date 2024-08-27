import * as React from 'react';
import ResponseDialogActions from "./ResponseDialog/ResponseDialogActions";
import ResponseDialogTitle from "./ResponseDialog/ResponseDialogTitle";
import ResponseDialogBody from "./ResponseDialog/ResponseDialogBody";
import Dialog from '@mui/material/Dialog';
import {useMyContext} from "../../../../GlobalVaribale";
import {useEffect} from "react";
import {Response} from "../../../../types/responseToResponse";
import {post} from "../../../../types/post";

export interface ResponseDialogProps {
    open: boolean;
    handleClose: () => void;
    postId: number;
    postData: post
}

const tmpResponses :Response[] = [
    {id:'1',responses:[
                {id:"5",userName:"newReq",description:"response to response",time:new Date(),postId:3, responses:[
                    {id:"9",userName:"newReq",description:"response to response to response",time:new Date(),postId:3, responses:[]},
                    {id:"10",userName:"newReq",description:"response to response to response",time:new Date(),postId:3, responses:[]},
                    {id:"11",userName:"newReq",description:"response to response to response",time:new Date(),postId:3, responses:[]},

                ]},
            {id:"6",userName:"newReq",description:"response to response",time:new Date(),postId:3, responses:[]},
            {id:"7",userName:"newReq",description:"response to response",time:new Date(),postId:3, responses:[]},
            {id:"8",userName:"newReq",description:"response to response",time:new Date(),postId:3, responses:[
                    {id:"12",userName:"newReq",description:"response to response to response",time:new Date(),postId:3, responses:[]},
                    {id:"13",userName:"newReq",description:"response to response to response",time:new Date(),postId:3, responses:[]},
                    {id:"14",userName:"newReq",description:"response to response to response",time:new Date(),postId:3, responses:[]},
                ]},
        ],userName:"nave", description:"tmp", time:new Date(), postId:6, },
    {id:'2',responses:[],userName:"tmp",  description:"tmp", time:new Date(), postId:6, },
    {id:'3',responses:[],userName:"nave", description:"tmp", time:new Date(), postId:6, },
    {id:'4',responses:[],userName:"nave", description:"tmp", time:new Date(), postId:6, },
];

function ResponseDialog(props: ResponseDialogProps){
    const {globalUser} = useMyContext();

    const {open, handleClose, postId, postData} = props;
    const clickCloseButton = () => {
        handleClose();
    }

    const [responses, setResponses] = React.useState<Response[]>(tmpResponses);
    const [newResponse, setNewResponse] = React.useState('');


    const createNewResponse = (description: string): void => {
        const tmpResponse: Response = {
            id:'work',
            userName: globalUser.userName,
            postId: postId,
            time: new Date(),
            description: description,
            responses:[],
        };

        setResponses(prevState => [...prevState, tmpResponse])
        setNewResponse("")
    }


    useEffect(() => {
        // get responses from response api
        setResponses(responses)
    }, [responses]);
    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return(
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                scroll={"paper"}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <ResponseDialogTitle
                    clickCloseButton={clickCloseButton}
                />
                <ResponseDialogBody
                    responses   = {responses}
                    setResponses={setResponses}
                    postData={postData}
                />
                <ResponseDialogActions
                    newResponse={newResponse}
                    setNewResponse={setNewResponse}
                    createNewResponse={createNewResponse}
                />
            </Dialog>
        </>
    );
}
export default ResponseDialog;