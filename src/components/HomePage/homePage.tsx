import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import {useMyContext} from "../../GlobalVaribale";
import {getEmptyUser} from "../../types/user";
import {red} from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";


function HomePage() {
    const {setGlobalUser,globalUser,  titleValue} = useMyContext();

    const clickLogOut = () => {
        setGlobalUser(getEmptyUser());
    }
    return(
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed"
                        sx={{
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                            flexGrow: 1,
                }}>
                    <Toolbar>
                        <Box
                            alignItems="flex-start"
                        >
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <LogoutIcon
                                    onClick={clickLogOut}
                                />
                            </IconButton>
                        </Box>
                        <Box
                            alignItems="center"
                        >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {titleValue}
                            </Typography>
                        </Box>
                        <Box
                            alignItems="flex-end"
                        >
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {globalUser.userName[0]}
                            </Avatar>
                        </Box>
                    </Toolbar>


                </AppBar>
                <Drawer
                    variant="permanent"
                    anchor="right"
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>

                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginRight: 240 }}>

                </Box>
            </Box>
        </>
    );
}
export default HomePage;