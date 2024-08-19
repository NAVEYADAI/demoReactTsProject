import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import SignUpDialog from "./SignUpDialog";
import Divider from '@mui/material/Divider';
import {useNavigate} from "react-router";

function SignUpPage(){
    const navigate = useNavigate();

    const [signUpDialog, setSignUpDialog]= React.useState(false);
    const clickOpenSignUpDialog = ()=>{
        setSignUpDialog(true);
    }
    const clickCloseSignUpDialog = ()=>{
        setSignUpDialog(false);
    }
    const backForLogInPage = () => {
        navigate("/LogIn")
    }
    return(
        <>
            <h1>SignUpPage</h1>
            <Paper elevation={3}
                   sx = {{marginTop: '15px', width:'60%'}}
            >
                <Stack spacing={5} alignItems="center" >
                    <Stack
                        direction="row"
                        spacing={10}
                    >
                        <TextField label="שם פרטי" variant="outlined" />
                        <TextField label="שם משפחה" variant="outlined" />
                    </Stack>
                    <TextField label="כתובת מייל" variant="outlined" sx={{marginTop: '15px', width: '70%'}}/>
                    <TextField label="כתובת מגורים" variant="outlined" sx={{marginTop: '15px', width: '70%'}}/>
                    <TextField label="מספר טלפון" variant="outlined" sx={{marginTop: '15px', width: '70%'}}/>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={10}
                    >
                        <Button variant="outlined" size="large" onClick={clickOpenSignUpDialog}>
                            המשך
                        </Button>
                        <Button variant="outlined" size="large" onClick={backForLogInPage}>
                            התחברות
                        </Button>

                    </Stack>

                    <SignUpDialog
                        openFirst={signUpDialog}
                        onCloseFirst={clickCloseSignUpDialog}
                    />

                </Stack>
            </Paper>

        </>
    );
}
export default SignUpPage;