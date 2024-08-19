import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React from "react";

export interface ResponseActionsProps {
    newResponse: string;
    setNewResponse: (newResponse: string) => void;
}
function ResponseActions(props: ResponseActionsProps) {
    const {newResponse, setNewResponse} = props;

    return(
        <>
            <TextField label="Filled"
                       variant="filled"
                       value={newResponse}
                       onChange={(event) => setNewResponse(newResponse)}/>
            <Button variant="contained" endIcon={<SendIcon />} >
                Send
            </Button>
        </>
    );
}
export default ResponseActions;