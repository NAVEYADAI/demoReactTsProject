import { Dialog } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import React from 'react'
import { user } from '../../types/user'
import Alert from '@mui/material/Alert'

export interface FirstDialog {
    openFirst: boolean
    onCloseFirst: () => void
    user: user
    setUser: (user: user) => void
    signUp: () => void
    userNameAlertError: boolean
    passwordAlertError: boolean
}
function SignUpDialog(props: FirstDialog) {
    const {
        onCloseFirst,
        openFirst,
        user,
        setUser,
        signUp,
        userNameAlertError,
        passwordAlertError,
    } = props

    const [passwordVerification, setPasswordVerification] = React.useState('')
    const clickSendButton = () => {
        if (user.password === passwordVerification) {
            signUp()
        } else {
        }
    }
    return (
        <Dialog onClose={onCloseFirst} open={openFirst}>
            <Stack
                spacing={2}
                alignItems="center"
                sx={{ width: 550, height: 600 }}
            >
                <DialogTitle>הזן נתוני כניסה</DialogTitle>
                <TextField
                    label="שם משתמש"
                    variant="outlined"
                    sx={{ marginTop: '15px', width: '70%' }}
                    value={user.userName}
                    onChange={(e) => {
                        setUser({ ...user, userName: e.target.value })
                    }}
                />
                <TextField
                    label="סיסמא"
                    variant="outlined"
                    sx={{ marginTop: '15px', width: '70%' }}
                    value={user.password}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value })
                    }}
                />
                <TextField
                    label="אימות סיסמא"
                    variant="outlined"
                    sx={{ marginTop: '15px', width: '70%' }}
                    value={passwordVerification}
                    onChange={(event) => {
                        setPasswordVerification(event.target.value)
                    }}
                />
                {userNameAlertError && (
                    <Alert severity="error">שם המשתמש תפוס</Alert>
                )}
                {passwordAlertError && (
                    <Alert severity="error">סיסמא לא עומדת בדרישות</Alert>
                )}
                <Button
                    variant="outlined"
                    size="large"
                    sx={{ width: '200px', height: '55px' }}
                    onClick={clickSendButton}
                >
                    שלח
                </Button>
            </Stack>
        </Dialog>
    )
}
export default SignUpDialog
