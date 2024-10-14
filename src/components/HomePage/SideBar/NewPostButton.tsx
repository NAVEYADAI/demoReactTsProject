import * as React from 'react'
import Button from '@mui/material/Button'
import AddPostDialog from './AddPostDialog/AddPostDialog'
import { Category } from '../../../types/category'
import Box from '@mui/material/Box'

interface NewPostButtonProps {
    objectCategory: Category[]
}
const NewPostButton = (props: NewPostButtonProps) => {
    const { objectCategory } = props
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const clickNewPost = () => {
        handleClickOpen()
    }
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bottom: 0,
                position: 'absolute',
            }}
        >
            <Button disableElevation onClick={clickNewPost}>
                {' '}
                הוספת פוסט
            </Button>
            <AddPostDialog
                open={open}
                handleClose={handleClose}
                subCategories={objectCategory}
            />
        </Box>
    )
}

export default NewPostButton
