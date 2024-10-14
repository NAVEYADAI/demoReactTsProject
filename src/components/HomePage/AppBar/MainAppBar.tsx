import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { red } from '@mui/material/colors'
import AppBar from '@mui/material/AppBar'
import { useMyContext } from '../../../GlobalVaribale'
import { getEmptyUser } from '../../../types/user'

const MainAppBar = () => {
    const { setGlobalUser, globalUser, titleValue } = useMyContext()

    const clickLogOut = () => {
        setGlobalUser(getEmptyUser())
    }
    return (
        <AppBar
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexGrow: 1 }}
        >
            <Toolbar>
                <Box alignItems="flex-start" sx={{ mr: 2 }}>
                    <IconButton size="large" color="inherit">
                        <LogoutIcon onClick={clickLogOut} />
                    </IconButton>
                </Box>
                <Box
                    alignItems="center"
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" component="div">
                        {titleValue}
                    </Typography>
                </Box>
                <Box alignItems="flex-end">
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {globalUser.userName[0]}
                    </Avatar>
                </Box>
                <Box alignItems="flex-end">
                    <Typography variant="h6" component="h2">
                        שלום
                    </Typography>
                </Box>
                <Box alignItems="flex-end">
                    <Typography variant="h6" component="h2">
                        {globalUser.fName}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default MainAppBar
