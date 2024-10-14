import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
interface AddPostTitleDialogProps {
    handleClose: () => void
}
const AddPostTitleDialog = (props: AddPostTitleDialogProps) => {
    const { handleClose } = props
    return (
        <>
            <DialogTitle id="alert-dialog-title">
                <Box sx={{ flex: 1 }}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <Typography
                        variant="h3"
                        color="textSecondary"
                        sx={{ textAlign: 'right' }}
                    >
                        יצירת פוסט
                    </Typography>
                </Box>
            </DialogTitle>
        </>
    )
}
export default AddPostTitleDialog
