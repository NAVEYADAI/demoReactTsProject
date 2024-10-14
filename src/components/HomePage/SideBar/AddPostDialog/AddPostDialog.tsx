import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Alert from '@mui/material/Alert'
import AddPostTitleDialog from './AddPostTitleDialog'
import AddPostBodyDialog from './AddPostBodyDialog'
import AddPostActionsDialog from './AddPostActionsDialog'
import { useMyContext } from '../../../../GlobalVaribale'
import { Category } from '../../../../types/category'
import useAxiosInstance from '../../../../AxiosInstance'

interface AddPostDialogProps {
    open: boolean
    handleClose: () => void
    subCategories: Category[]
}
export interface AddPostDialogState {
    title?: string
    text?: string
    image?: string
}

const AddPostDialog = (props: AddPostDialogProps) => {
    const { open, handleClose, subCategories } = props
    const { globalUser } = useMyContext()
    const [subCategoryId, setSubCategoryId] = React.useState<number | null>(
        null
    )
    const [newPost, setNewPost] = React.useState<AddPostDialogState>({
        title: '',
        text: '',
        image: '',
    })
    const [sendError, setSendError] = React.useState(false)
    const axiosInstance = useAxiosInstance()

    const sendPost = async () => {
        if (globalUser && subCategoryId) {
            try {
                const req = await axiosInstance.post('/post', {
                    title: newPost.title,
                    text: newPost.text,
                    image: newPost.image,
                    userId: globalUser.id,
                    subCategoryId: subCategoryId,
                })
                if (req.status === 201) {
                    handleClose()
                }
            } catch (error) {
                setSendError(true)
                setTimeout(() => {
                    setSendError(false)
                }, 5000)
                console.log(error)
            }
        }
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <AddPostTitleDialog handleClose={handleClose} />
            <AddPostBodyDialog
                newPost={newPost}
                setNewPost={setNewPost}
                subCategories={subCategories}
                subCategoryId={subCategoryId}
                setSubCategoryId={setSubCategoryId}
            />
            <AddPostActionsDialog handleClose={sendPost} />
            {sendError && <Alert severity="error">בעיה בהעלאת הפוסט</Alert>}
        </Dialog>
    )
}

export default AddPostDialog
