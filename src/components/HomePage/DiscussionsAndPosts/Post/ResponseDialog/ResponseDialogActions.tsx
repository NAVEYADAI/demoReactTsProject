import Box from "@mui/material/Box";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DialogActions from "@mui/material/DialogActions";

interface ResponseDialogActionsProps{
    newResponse: string;
    setNewResponse: (tmp: string)=>void;
    createNewResponse: (tmp: string)=>void;

}
const ResponseDialogActions =(props: ResponseDialogActionsProps) => {
    const {newResponse, setNewResponse, createNewResponse} = props;
    return(
        <>
            <DialogActions>
                <Box >
                    <TextField
                        sx={{ width: '450px', height: 'auto'}}
                        value={newResponse}
                        onChange={(event) =>
                            setNewResponse(event.target.value)}
                    />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={() => createNewResponse(newResponse)}
                    >
                        Send
                    </Button>
                </Box>
            </DialogActions>

        </>
    );
}
export default ResponseDialogActions;