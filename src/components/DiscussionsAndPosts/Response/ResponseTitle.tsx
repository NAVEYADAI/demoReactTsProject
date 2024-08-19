import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
export interface ResponseTitleProps {
    clickCloseButton: ()=>void;
}
function ResponseTitle(props: ResponseTitleProps){
    const {clickCloseButton} = props
    return(
        <>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={clickCloseButton}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Sound
                    </Typography>
                    <Button autoFocus color="inherit" onClick={clickCloseButton}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default ResponseTitle;