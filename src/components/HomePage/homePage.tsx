import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import {useEffect, useState} from "react";
import MainPost from "../DiscussionsAndPosts/MainPost";
import MainAppBar from "./MainAppBar";
import {AllCategory} from "../../types/category";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from 'axios'
import AppBar from "@mui/material/AppBar";

function HomePage() {

    const [categories, setCategories] = useState<AllCategory>();

    useEffect(() => {
        const getAllCategory = async () => {
            const resp = await axios.get("/api/users/login", {});

            if (resp.status === 200) {

            }
        }
    }, []);
    return(
        <>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <MainAppBar/>

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
                    <List>
                        {['טכנולוגיה', 'ספורט', 'אוכל', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">הגדר חיובי שלילי או ניטרלי</FormLabel>
                        <FormGroup aria-label="position" >
                            <FormControlLabel
                                value="start"
                                control={<Checkbox />}
                                label="חיובי"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="start"
                                control={<Checkbox />}
                                label="שלילי"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="start"
                                control={<Checkbox />}
                                label="ניטרלי"
                                labelPlacement="start"
                            />

                        </FormGroup>
                    </FormControl>
                </Drawer>

                <Box sx={{  }}>
                    <MainPost />
                </Box>
            </Box>
        </>
    );
}
export default HomePage;