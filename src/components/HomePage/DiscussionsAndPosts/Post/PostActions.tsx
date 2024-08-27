import CardActions from '@mui/material/CardActions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import React from "react";
import IconButton from '@mui/material/IconButton';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import ResponseDialog from "./ResponseDialog";
import {post} from "../../../../types/post";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

interface PostActionsProps{
    postId:number;
    postData: post
}
function PostActions(props: PostActionsProps){
    const {postId, postData} = props;
    const [open, setOpen] = React.useState(false);
    const [like, setLike]= React.useState(false);
    const [disLike, setDisLike] = React.useState(false);

    const openResponseForPost = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const clickLike = () => {
        if(disLike && !like){
            setDisLike(false);
            setLike(true);
        }else if(!disLike && like){
            setLike(false);
        }else{
            setLike(true);
        }
    }
    const clickDisLike = () => {
        if(like && !disLike){
            setLike(false);
            setDisLike(true);
        }else if(!like && disLike){
            setDisLike(false)
        }else{
            setDisLike(true);
        }
    }

    return(
        <>
            <CardActions>
                <IconButton aria-label="response" onClick={openResponseForPost}>
                    <ShortcutIcon />
                </IconButton>
                <IconButton aria-label="response" onClick={clickLike}>
                    {
                        like ? <ThumbUpAltIcon/> :
                            <ThumbUpOffAltIcon/>
                    }
                </IconButton>
                <IconButton aria-label="response" onClick={clickDisLike}>
                    {
                        disLike ? <ThumbDownAltIcon/> :
                            <ThumbDownOffAltIcon/>
                    }
                </IconButton>
                <ResponseDialog open={open} handleClose={handleClose} postId={postId} postData={postData} />
            </CardActions>
        </>
    );
}
export default PostActions