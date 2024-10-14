import CardActions from '@mui/material/CardActions'
import React from 'react'
import ShortcutIcon from '@mui/icons-material/Shortcut'
import ResponseDialog from './ResponseDialog'
import { post } from '../../../../types/post'
import GradsComponent from './ResponseDialog/Response/GradsComponent'
import Chip from '@mui/material/Chip'
import LikeAndDisLike from './LikeAndDisLike'
import { setNumOfLikeOnLikeInPost } from '../../../../store/features/postSplice'
import { useAppDispatch } from '../../../../store/store'

interface PostActionsProps {
    postId: string
    postData: post
}
function PostActions(props: PostActionsProps) {
    const { postId, postData } = props
    const [open, setOpen] = React.useState(false)
    const dispatch = useAppDispatch()
    const setCountLikesInState = (
        numOfLike: number,
        numOfDisLike: number,
        isLike: boolean | null
    ) => {
        dispatch(
            setNumOfLikeOnLikeInPost({
                numOfLike: numOfLike,
                numOfDisLike: numOfDisLike,
                postId,
                isLike,
            })
        )
    }
    const handleClose = (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
        e.stopPropagation()
        console.log('try close from chipButton')
        setOpen(false)
    }
    const openDialog = (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
        e.stopPropagation()
        console.log('from chipButton')
        if (!open) {
            console.log('from chipButton')
            setOpen(true)
        }
    }

    return (
        <CardActions sx={{ marginTop: 1 }}>
            <Chip
                variant="outlined"
                onClick={(e) => openDialog(e)}
                icon={<ShortcutIcon />}
                label={postData.responseCount}
            />
            <GradsComponent grads={postData.grade} />
            <LikeAndDisLike
                myLike={postData.myLike}
                numOfDisLikes={postData.disLikeCount}
                numOfLikes={postData.likeCount}
                idOfEntity={postData.id}
                setCountLikesInState={setCountLikesInState}
            />
            <ResponseDialog
                open={open}
                handleClose={handleClose}
                postId={postId}
                postData={postData}
            />
        </CardActions>
    )
}
export default PostActions
