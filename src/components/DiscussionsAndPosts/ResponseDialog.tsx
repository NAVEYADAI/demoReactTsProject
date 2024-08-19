import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ResponseTitle from "./Response/ResponseTitle";
import ResponseBody, {ResponseBodyProps} from "./Response/ResponseBody";
import ResponseActions from "./Response/ResponseActions";
import Box from "@mui/material/Box";

export interface ResponseDialogProps {
    open: boolean;
    handleClose: () => void;
}
function ResponseDialog(props: ResponseDialogProps){
    const {open, handleClose} = props;
    const clickCloseButton = () => {
        handleClose();
    }
    const tmpResponses :ResponseBodyProps[] = [ {userNameOfResponse:"nave", text:"tmp", time:new Date()},
                                                {userNameOfResponse:"nave", text:"tmp", time:new Date()},
                                                {userNameOfResponse:"nave", text:"tmp", time:new Date()},
                                                {userNameOfResponse:"nave", text:"tmp", time:new Date()},
                                                ]
    const [newResponse, setNewResponse] = React.useState('');

    return(
        <>
            <Dialog
                 fullScreen
                open={open}
                onClose={handleClose}
            >
                <ResponseTitle clickCloseButton={clickCloseButton}/>
                {
                    tmpResponses && tmpResponses.map(item => (
                        <ResponseBody userNameOfResponse={item.userNameOfResponse} time={item.time} text={item.text} />
                    ))
                }
                <Box sx={{ maxWidth: '450px', height: 'auto'}}>
                    <ResponseActions  newResponse={newResponse} setNewResponse={setNewResponse}/>
                </Box>

            </Dialog>
        </>
    );
}
export default ResponseDialog;