import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import Typography from "@mui/material/Typography";

const AddPostTitleDialog = () => {
    return(
        <>
            <DialogTitle id="alert-dialog-title">
                <Typography variant="body2" color="textSecondary">
                    יצירת פוסט
                </Typography>
            </DialogTitle>
        </>
    );
}
export default AddPostTitleDialog;