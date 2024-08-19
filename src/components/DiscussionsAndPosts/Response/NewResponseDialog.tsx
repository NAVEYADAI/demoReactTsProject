import {Dialog} from "@mui/material";

export interface NewResponseDialogProps {
    open: boolean;
    close: () => void;
}
function NewResponseDialog(props: NewResponseDialogProps){
    const {open, close} = props;
    return(
        <>


            <Dialog
            open={open}
            onClose={close}>
                hvcwhsvdicv
            </Dialog>
        </>
    );
}
export default NewResponseDialog;