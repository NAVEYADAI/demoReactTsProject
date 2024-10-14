import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import * as React from 'react'
export interface ResponseTitleProps {
    clickCloseButton: (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => void
}
const ResponseDialogTitle = (props: ResponseTitleProps) => {
    const { clickCloseButton } = props
    return (
        <>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={(e) => clickCloseButton(e)}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        variant="h6"
                        component="div"
                    >
                        תגובות
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default ResponseDialogTitle
