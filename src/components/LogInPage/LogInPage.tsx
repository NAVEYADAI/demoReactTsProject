import React from 'react'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import LoginIcon from '@mui/icons-material/Login'
import { Link } from '@mui/material'
import { useNavigate } from 'react-router'
import Alert from '@mui/material/Alert'
import { useMyContext } from '../../GlobalVaribale'
import useAxiosInstance from '../../AxiosInstance'

function LogInPage() {
    const navigate = useNavigate()
    const { setGlobalUser, setJwtToken, jwtToken, globalUser } = useMyContext()
    const [userNameValue, setUserNameValue] = React.useState('')
    const [passwordValue, setPasswordValue] = React.useState('')
    const [alertError, setAlertError] = React.useState(false)
    const axiosInstance = useAxiosInstance()

    const logIn = React.useCallback(async () => {
        try {
            if (userNameValue && passwordValue) {
                console.log(userNameValue)
                console.log(passwordValue)
                const resp = await axiosInstance.post('/user/signin', {
                    userName: userNameValue,
                    password: passwordValue,
                })
                console.log(resp.data)
                if (resp.data) {
                    console.log(resp.data)
                    await setGlobalUser(resp.data.user)
                    await setJwtToken(resp.data.accessToken)
                    console.log(jwtToken)
                    console.log(globalUser)
                    navigate('/MainHome')
                }
            }
        } catch (error) {
            setAlertError(true)
            setTimeout(() => {
                setAlertError(false)
            }, 5000)
            console.error('Login failed:', error)
        }
    }, [userNameValue, passwordValue, navigate])

    return (
        <Paper elevation={3} sx={{ marginTop: '15px', width: '60%' }}>
            <Stack spacing={5} alignItems="center">
                <Chip
                    label="התחברות"
                    variant="outlined"
                    icon={<LoginIcon />}
                    sx={{ width: '60%', height: '50px', paddingTop:3 }}
                />

                <TextField
                    label="שם משתמש"
                    variant="outlined"
                    sx={{ marginTop: '15px', width: '70%' }}
                    value={userNameValue}
                    onChange={(event) => setUserNameValue(event.target.value)}
                />
                <TextField
                    label="סיסמא"
                    variant="outlined"
                    sx={{ marginTop: '15px', width: '70%' }}
                    value={passwordValue}
                    onChange={(event) => setPasswordValue(event.target.value)}
                />
                <Button
                    variant="outlined"
                    size="large"
                    sx={{ width: '200px', height: '55px' }}
                    onClick={logIn}
                >
                    שליחה
                </Button>
                {alertError && (
                    <Alert severity="error">
                        שם משתמש או סיסמא אינם נכונים
                    </Alert>
                )}
                <Link href="/SignUp">לא רשום לחץ כאן</Link>
                <br />
                <br />
            </Stack>
        </Paper>
    )
}

export default LogInPage
