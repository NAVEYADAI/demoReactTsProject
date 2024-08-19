import React from "react";
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from "@mui/material";
import axios from 'axios'
import {useNavigate} from "react-router";
import {useMyContext} from "../../GlobalVaribale";




function LogInPage(){
    const navigate = useNavigate();
    const [userNameValue, setUserNameValue] = React.useState("");
    const [passwordValue, setPasswordValue] = React.useState("");
    const logIn = async () => {
        if (userNameValue && passwordValue) {
            const resp = await axios.post("/api/users/login", {
                username: userNameValue,
                password: passwordValue
            });

            if (resp.status === 200) {
                navigate("/MainHome");
            }
        }
    }
    return(
        <>
            <Paper elevation={3}
                   sx = {{marginTop: '15px', width:'60%'}}
            >
                <Stack spacing={5} alignItems="center">
                    <br/><br/>
                    <Chip label="התחברות" variant="outlined" icon={<LoginIcon/>} sx = {{ width:'60%', height:'50px'}}/>

                    <TextField label="שם משתמש"
                               variant="outlined"
                               sx={{marginTop: '15px', width: '70%'}}
                               value={userNameValue}
                                onChange={(event) => setUserNameValue(event.target.value)}
                    />
                    <TextField label="סיסמא"
                               variant="outlined"
                               sx={{marginTop: '15px', width: '70%'}}
                               value={passwordValue}
                               onChange={(event) => setPasswordValue(event.target.value)}
                    />

                    <Button variant="outlined"
                            size="large"
                            sx={{width:'200px', height:'55px'}}
                            onClick={logIn}
                        >שליחה
                    </Button>
                    <Link href="/SignUp">לא רשום לחץ כאן</Link>
                    <br/><br/>

                </Stack>
            </Paper>
        </>
    );
}

export default LogInPage;