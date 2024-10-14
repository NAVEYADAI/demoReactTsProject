import * as React from 'react'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import DialogContent from '@mui/material/DialogContent'
import SelectSubCategory from './SelectSubCategory'
import { AddPostDialogState } from './AddPostDialog'
import { Category } from '../../../../types/category'

interface AddPostBodyDialogProps {
    newPost: AddPostDialogState
    setNewPost: (newPost: AddPostDialogState) => void
    subCategories: Category[]
    subCategoryId: number | null
    setSubCategoryId: (value: number | null) => void
}

const AddPostBodyDialog = (props: AddPostBodyDialogProps) => {
    const {
        newPost,
        setNewPost,
        subCategories,
        subCategoryId,
        setSubCategoryId,
    } = props

    const selectImageAndChangeToBase64 = (e: any) => {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])

        reader.onload = () => {
            setNewPost({ ...newPost, image: reader.result as string })
            console.log(reader.result as string)
        }

        reader.onerror = (error) => {
            console.log('input error')
            console.log(error)
        }
    }
    return (
        <DialogContent>
            <Box
                alignItems="center"
                alignContent="center"
                height={700}
                width={500}
                sx={{
                    justifyContent: 'flex-end',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    textAlign: 'right',
                }}
            >
                <Typography>כותרת</Typography>
                <TextField
                    id="title"
                    label="כותרת תמונה"
                    variant="outlined"
                    value={newPost.title}
                    onChange={(e) => {
                        setNewPost({ ...newPost, title: e.target.value })
                    }}
                    fullWidth={true}
                />
                <Typography>טקסט</Typography>
                <TextField
                    id="text"
                    label="טקסט חופשי"
                    variant="outlined"
                    value={newPost.text}
                    onChange={(e) => {
                        setNewPost({ ...newPost, text: e.target.value })
                    }}
                    fullWidth={true}
                />
                <Typography>הוספת תמונה</Typography>
                <input
                    id="text"
                    type="file"
                    onChange={selectImageAndChangeToBase64}
                />
                <br />
                <br />
                {newPost.image && (
                    <CardMedia
                        sx={{ height: 140 }}
                        image={newPost.image}
                    />
                )}
                <br />
                <SelectSubCategory
                    subCategories={subCategories}
                    subCategoryId={subCategoryId}
                    setSubCategoryId={setSubCategoryId}
                />
            </Box>
        </DialogContent>
    )
}
export default AddPostBodyDialog
