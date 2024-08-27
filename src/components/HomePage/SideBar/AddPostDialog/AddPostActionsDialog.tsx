import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import * as React from "react";

interface AddPostActionDialogProps {
    handleClose: ()=> void;
}

const AddPostActionsDialog = (props: AddPostActionDialogProps) => {
    const {handleClose} = props

    return(
        <>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    שלח
                </Button>
            </DialogActions>
        </>
    );
}
export default AddPostActionsDialog;