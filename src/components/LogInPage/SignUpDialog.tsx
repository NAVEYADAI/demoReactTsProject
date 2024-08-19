import {Dialog} from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export interface FirstDialog{
    openFirst: boolean;
    onCloseFirst: () => void;
}
function SignUpDialog(props: FirstDialog) {
    const {onCloseFirst, openFirst}= props

    const secondDialogOnClick = ()=>{
        onCloseFirst()
    }
    return (
        <>
            <Dialog onClose={onCloseFirst} open={openFirst} >
                <Stack spacing={2} alignItems="center" >
                    <DialogTitle>הזן נתוני כניסה</DialogTitle>
                    <TextField label="שם משתמש" variant="outlined" sx={{marginTop: '15px', width: '70%'}}/>
                    <TextField label="סיסמא" variant="outlined" sx={{marginTop: '15px', width: '70%'}}/>
                    <TextField label="אימות סיסמא" variant="outlined" sx={{marginTop: '15px', width: '70%'}}/>
                    <Button variant="outlined"
                            size="large"
                            sx={{width:'200px', height:'55px'}}
                            onClick={secondDialogOnClick}

                    >המשך</Button>
                </Stack>
            </Dialog>
        </>
    );
}
export default SignUpDialog;