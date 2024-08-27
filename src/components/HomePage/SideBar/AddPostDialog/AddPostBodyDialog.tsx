import DialogContent from "@mui/material/DialogContent";
import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {AddPostDialogState} from "./AddPostDialog";
import CardMedia from "@mui/material/CardMedia";


interface AddPostBodyDialogProps {
    newPost: AddPostDialogState;
    setNewPost: (newPost: AddPostDialogState) => void;
}
const AddPostBodyDialog = (props: AddPostBodyDialogProps) => {
    const {newPost, setNewPost} = props;

    const selectImageAndChangeToBase64 = (e: any) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setNewPost({...newPost, image: reader.result as string });
            console.log(reader.result as string)
        };
        reader.onerror = error => {
            console.log("input error")
            console.log(error);
        };
    }
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
                       onChange={selectImageAndChangeToBase64}
                /><br/><br/>
                    {
                        newPost.image &&  <CardMedia
                            sx={{ height: 140 }}
                            image={newPost.image}
                            title="green iguana"
                        />
                    }
                <br/>
                </Box>
            </DialogContent>
        </>
    );
}
export default AddPostBodyDialog;