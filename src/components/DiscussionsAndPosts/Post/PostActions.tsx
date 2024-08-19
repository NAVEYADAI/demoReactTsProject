import CardActions from '@mui/material/CardActions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';// empty
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import React from "react";
import IconButton from '@mui/material/IconButton';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import ResponseDialog from "../ResponseDialog";


function PostActions(){
    const [like, setLike] = React.useState(false);

    const clickLike = () => {
        setLike(!like)
    }

    const openResponseForPost = () => {
        setOpen(true);
    }
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <>
            <CardActions>
                <IconButton aria-label="response" onClick={openResponseForPost}>
                    <ShortcutIcon />
                </IconButton>
                <IconButton aria-label="like" onClick={clickLike}>
                    {
                        like ? <ThumbUpAltIcon/> :
                            <ThumbUpOffAltIcon/>
                    }
                </IconButton>
                <ResponseDialog open={open} handleClose={handleClose}/>
            </CardActions>
        </>
    );
}
export default PostActions