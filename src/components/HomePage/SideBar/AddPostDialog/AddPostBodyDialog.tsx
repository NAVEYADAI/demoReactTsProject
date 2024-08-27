import DialogContent from "@mui/material/DialogContent";
import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import Box from "@mui/material/Box";
import {AddPostDialogState} from "./AddPostDialog";


interface AddPostBodyDialogProps {
    newPost: AddPostDialogState;
    setNewPost: (newPost: AddPostDialogState) => void;
}
const AddPostBodyDialog = (props: AddPostBodyDialogProps) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState('ready');
    const [file, setFile] = useState<File | undefined>();
    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files : FileList;
        };
        console.log('target', target.files);
        const selectFile = target.files[0];
        setFile(selectFile);
        console.log(file)
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result as string)
        }
        if(selectFile){
            reader.readAsDataURL(selectFile);
        }
    }

    const {newPost, setNewPost} = props;
    return(
        <>
            <DialogContent>
                <Box
                    alignItems="center"
                    alignContent="center"
                >

                <Typography  >
                    כותרת
                </Typography>
                <TextField id="title"
                           label="כותרת תמונה"
                           variant="outlined"
                           value={newPost.title}
                           onChange={(e)=> {
                               setNewPost({...newPost, title: e.target.value})
                           }}
                />
                <Typography  >
                    טקסט
                </Typography>
                <TextField id="text"
                           label="טקסט חופשי"
                           variant="outlined"
                           value={newPost.text}
                           onChange={(e)=> {
                               setNewPost({...newPost, text: e.target.value})
                           }}
                />
                <Typography  >
                    הוספת תמונה
                </Typography>
                <input id="text"
                       type="file"
                       onChange={handleOnChange}
                       value={newPost.image}
                       // todo set image for string
                /><br/><br/>
                {imagePreviewUrl && (
                    <img src={imagePreviewUrl} alt="Selected" style={{maxWidth: '450px', height: 'auto'}}/>
                )}<br/>
                </Box>
            </DialogContent>
        </>
    );
}
export default AddPostBodyDialog;