import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import { post } from '../../../../types/post'
import DialogBody from './ResponseDialog/DialogBody'

export interface ResponseDialogProps {
    open: boolean
    handleClose: (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => void
    postId: string
    postData: post
}

function ResponseDialog(props: ResponseDialogProps) {
    const { open, handleClose, postId, postData } = props

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogBody
                handleClose={handleClose}
                postId={postId}
                postData={postData}
            />
        </Dialog>
    )
}
export default ResponseDialog

// const tmpResponses :Response[] = [
//     {id:'1',responses:[
//                 {id:"5",userName:"newReq",description:"response to response",time:new Date(),postId:'3', responses:[
//                     {id:"9",userName:"newReq",description:"response to response to response",time:new Date(),postId:'3', responses:[],grads:0.35},
//                     {id:"10",userName:"newReq",description:"response to response to response",time:new Date(),postId:'3', responses:[],grads:0.45},
//                     {id:"11",userName:"newReq",description:"response to response to response",time:new Date(),postId:'3', responses:[],grads:0.75},
//
//                 ],grads:0.75},
//             {id:"6",userName:"newReq",description:"response to response",time:new Date(),postId:'3', responses:[],grads:0.85},
//             {id:"7",userName:"newReq",description:"response to response",time:new Date(),postId:'3', responses:[],grads:0.75},
//             {id:"8",userName:"newReq",description:"response to response",time:new Date(),postId:'3', responses:[
//                     {id:"12",userName:"newReq",description:"response to response to response",time:new Date(),postId:'3', responses:[],grads:0.65},
//                     {id:"13",userName:"newReq",description:"response to response to response",time:new Date(),postId:'3', responses:[],grads:0.95},
//                     {id:"14",userName:"newReq",description:"response to response to response",time:new Date(),postId:'3', responses:[],grads:0.75},
//                 ],grads:0.75},
//         ],userName:"nave", description:"tmp", time:new Date(), postId:'6', grads:0.75},
//     {id:'2',responses:[],userName:"tmp",  description:"tmp", time:new Date(), postId:'6',grads:0.75 },
//     {id:'3',responses:[],userName:"nave", description:"tmp", time:new Date(), postId:'6',grads:0.75 },
//     {id:'4',responses:[],userName:"nave", description:"tmp", time:new Date(), postId:'6',grads:0.5 },
// ];
