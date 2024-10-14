import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import React from 'react'
import SignUpDialog from './SignUpDialog'
import { useNavigate } from 'react-router'
import { getEmptyUser, user } from '../../types/user'
import { useMyContext } from '../../GlobalVaribale'
import { Link } from '@mui/material'
import Chip from '@mui/material/Chip'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import useAxiosInstance from '../../AxiosInstance'
import Alert from '@mui/material/Alert'

function SignUpPage() {
    const navigate = useNavigate()
    const { setGlobalUser, setJwtToken } = useMyContext()
    const [user, setUser] = React.useState<user>(getEmptyUser())
    const [signUpDialog, setSignUpDialog] = React.useState(false)
    const [userNameAlertError, setUserNameAlertError] = React.useState(false)
    const [passwordAlertError, setPasswordAlertError] = React.useState(false)
    const [phoneAlertError, setPhoneAlertError] = React.useState(false)
    const axiosInstance = useAxiosInstance()

    const clickOpenSignUpDialog = () => {
        if (user.fName && user.lName && user.phone && user.address) {
            setSignUpDialog(true)
        }
    }
    const clickCloseSignUpDialog = () => {
        setSignUpDialog(false)
    }

    const signUp = async () => {
        try {
            if (user.userName && user.password) {
                console.log(user)
                const resp = await axiosInstance.post('/user/signup', user)

                if (resp.status === 201) {
                    setGlobalUser(resp.data.user)
                    setJwtToken(resp.data.accessToken)
                    navigate('/MainHome')
                }
            }
        } catch (error) {
            // @ts-ignore
            if (error.response?.status === 400) {
                // @ts-ignore
                if (error.response?.data?.message[0] ===
                    'phone must match /^(\\+[0-9]{1,3}[- ]?)?[0-9]{9,10}$/ regular expression'
                ) {
                    clickCloseSignUpDialog()
                    setPhoneAlertError(true)
                    setTimeout(() => {
                        setPhoneAlertError(false)
                    }, 5000)
                } else {
                    // @ts-ignore
                    if (error.response?.data?.message[0] === 'set password') {
                        setPasswordAlertError(true)
                        setTimeout(() => {
                            setPasswordAlertError(false)
                        }, 5000)
                    }
                }
            } else {
                // @ts-ignore
                if (error.response?.status === 409) {
                    // @ts-ignore
                    if (error.response?.data.message ===
                        'UserName arleady exist') {
                        setUserNameAlertError(true)
                        setTimeout(() => {
                            setUserNameAlertError(false)
                        }, 5000)
                    }
                }
            }
            // @ts-ignore
            console.log(error.response?.status)
            console.log(error)
        }
    }

    return (
        <Paper elevation={3} sx={{ marginTop: '15px', width: '60%' }}>
            <Stack spacing={5} alignItems="center" marginTop={7}>
                <Chip
                    label="הרשמה"
                    variant="outlined"
                    icon={<PersonAddAltIcon />}
                    sx={{ width: '60%', height: '50px' }}
                />
                <Stack
                    direction="row"
                    spacing={15}
                    sx={{ marginTop: '15px', width: '70%' }}
                >
                    <TextField
                        label="שם פרטי"
                        variant="outlined"
                        sx={{ width: '50%' }}
                        value={user?.fName}
                        onChange={(e) =>
                            setUser({ ...user, fName: e.target.value })
                        }
                    />
                    <TextField
                        label="שם משפחה"
                        variant="outlined"
                        sx={{ width: '50%' }}
                        value={user?.lName}
                        onChange={(e) =>
                            setUser({ ...user, lName: e.target.value })
                        }
                    />
                </Stack>
                <TextField
                    label="כתובת מגורים"
                    variant="outlined"
                    sx={{ marginTop: '15px', width: '70%' }}
                    value={user.address}
                    onChange={(e) =>
                        setUser({ ...user, address: e.target.value })
                    }
                />
                <TextField
                    label="מספר טלפון"
                    variant="outlined"
                    sx={{ marginTop: '15px', width: '70%' }}
                    value={user.phone}
                    onChange={(e) =>
                        setUser({ ...user, phone: e.target.value })
                    }
                />
                {phoneAlertError && (
                    <Alert severity="error">מספר טלפון לא תקין</Alert>
                )}
                <Button
                    variant="outlined"
                    size="large"
                    onClick={clickOpenSignUpDialog}
                >
                    המשך
                </Button>
                <Link href="/LogIn" paddingBlockEnd={5}>
                    לחץ להתחברות
                </Link>

                <SignUpDialog
                    openFirst={signUpDialog}
                    onCloseFirst={clickCloseSignUpDialog}
                    user={user}
                    setUser={setUser}
                    signUp={signUp}
                    userNameAlertError={userNameAlertError}
                    passwordAlertError={passwordAlertError}
                />
            </Stack>
        </Paper>
    )
}

export default SignUpPage
