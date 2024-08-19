import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import SignUpDialog from "./SignUpDialog";
import Divider from '@mui/material/Divider';
import {useNavigate} from "react-router";
import axios from 'axios';
import {getEmptyUser, user} from "../../types/user";
import {useMyContext} from "../../GlobalVaribale";



function SignUpPage(){
    const navigate = useNavigate();
    const {setGlobalUser} = useMyContext();
    const [user, setUser] = React.useState<user>(getEmptyUser());

    const [signUpDialog, setSignUpDialog]= React.useState(false);
    const clickOpenSignUpDialog = ()=>{
        if(user.firstName && user.lastName && user.email && user.phone && user.address){
            setSignUpDialog(true);
        }
    }
    const clickCloseSignUpDialog = ()=>{
        setSignUpDialog(false);
    }
    const backForLogInPage = () => {
        navigate("/LogIn")
    }
    const signUp = async () => {
        if (user.userName && user.password) {
            const resp = await axios.post("/api/users/signUp", user);


            if (resp.status === 201) {
                setGlobalUser(resp.data);
                navigate("/MainHome");
            }
        }
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
                        <TextField label="שם פרטי" variant="outlined"
                                   value={user?.firstName}
                                   onChange={(e)=>
                                       setUser({ ...user, firstName: e.target.value})
                        }
                        />
                        <TextField label="שם משפחה" variant="outlined"
                            value={user?.lastName}
                            onChange={(e)=>
                            setUser({...user, lastName: e.target.value})}/>
                    </Stack>
                    <TextField label="כתובת מייל" variant="outlined"
                               sx={{marginTop: '15px', width: '70%'}}
                               value={user.email}
                               onChange={(e)=>
                                   setUser({...user, email:e.target.value})}
                    />
                    <TextField label="כתובת מגורים" variant="outlined"
                               sx={{marginTop: '15px', width: '70%'}}
                               value={user.address}
                               onChange={(e)=>
                                    setUser({...user, address:e.target.value})}
                    />
                    <TextField label="מספר טלפון" variant="outlined"
                               sx={{marginTop: '15px', width: '70%'}}
                               value={user.phone}
                               onChange={(e)=>
                                   setUser({...user,phone:e.target.value})}
                    />
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
                        user={user}
                        setUser={setUser}
                        signUp={signUp}
                    />

                </Stack>
            </Paper>

        </>
    );
}
export default SignUpPage;