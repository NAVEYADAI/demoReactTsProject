import * as React from "react";
import Button from "@mui/material/Button";
import AddPostDialog from "./AddPostDialog/AddPostDialog";

const NewPostButton = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clickNewPost = () => {
        handleClickOpen()
    }
    return(
        <>
            <Button
                disableElevation
                onClick={clickNewPost}
            > הוספת פוסט</Button>
            <AddPostDialog open={open} handleClose={handleClose} />
        </>
    );
}

export default NewPostButton;