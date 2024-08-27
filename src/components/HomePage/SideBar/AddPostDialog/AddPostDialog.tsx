import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import AddPostTitleDialog from "./AddPostTitleDialog";
import AddPostBodyDialog from "./AddPostBodyDialog";
import AddPostActionsDialog from "./AddPostActionsDialog";

interface AddPostDialogProps {
    open: boolean;
    handleClose: () => void;
}
export interface AddPostDialogState {
    title:string;
    text:string;
    image:string;
}
const AddPostDialog = (props: AddPostDialogProps) => {
    const {open, handleClose} = props;

    const [newPost, setNewPost] =
        React.useState<AddPostDialogState>({title:"",text:"",image:"",});

    const [error, setError] = React.useState(false);

    const sendPost =  () => {
        if (newPost.title && newPost.text && newPost.image) {
            // call for add post api
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
    }
    return(
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <AddPostTitleDialog />
                <AddPostBodyDialog newPost={newPost} setNewPost={setNewPost} />
                <AddPostActionsDialog handleClose={sendPost}/>
                {
                    error && <Alert severity="error">הכנס את כל השדות</Alert>
                }
            </Dialog>
        </>
    );
}

export default AddPostDialog;