import IconButton from '@mui/material/IconButton'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import React, { useEffect } from 'react'
import { useMyContext } from '../../../../GlobalVaribale'
import useAxiosInstance from '../../../../AxiosInstance'

interface LikeAndDisLikeProps {
    myLike: boolean | null
    numOfLikes: number
    numOfDisLikes: number
    idOfEntity: string
    setCountLikesInState: (
        numOfLike: number,
        numOfDisLike: number,
        isLike: boolean | null
    ) => void
}
const LikeAndDisLike = (props: LikeAndDisLikeProps) => {
    const {
        myLike,
        numOfLikes,
        numOfDisLikes,
        idOfEntity,
        setCountLikesInState,
    } = props
    const { globalUser } = useMyContext()
    const [like, setLike] = React.useState(false)
    const [disLike, setDisLike] = React.useState(false)
    const axiosInstance = useAxiosInstance()
    const clickLike = async (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
        e.stopPropagation()
        const newLike = await clickLikeOrDisLikeReq(true)
        if (disLike && !like) {
            setDisLike(false)
            setLike(true)
            setCountLikesInState(numOfLikes + 1, numOfDisLikes - 1, newLike)
        } else if (!disLike && like) {
            setLike(false)
            setCountLikesInState(numOfLikes - 1, numOfDisLikes, newLike)
        } else {
            setLike(true)
            setCountLikesInState(numOfLikes + 1, numOfDisLikes, newLike)
        }
    }
    const clickDisLike = async (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
        e.stopPropagation()

        const newLike = await clickLikeOrDisLikeReq(false)
        if (like && !disLike) {
            setLike(false)
            setDisLike(true)
            setCountLikesInState(numOfLikes - 1, numOfDisLikes + 1, newLike)
        } else if (!like && disLike) {
            setDisLike(false)
            setCountLikesInState(numOfLikes, numOfDisLikes - 1, newLike)
        } else {
            setDisLike(true)
            setCountLikesInState(numOfLikes, numOfDisLikes + 1, newLike)
        }
    }

    const clickLikeOrDisLikeReq = async (isLike: boolean) => {
        const res = await axiosInstance.patch('/like/likeOrDislike', {
            idOfEntity,
            isLike,
            userId: globalUser.id,
        })
        return res.data
    }

    useEffect(() => {
        setLike(myLike === true)
        setDisLike(myLike === false)
    }, [])

    return (
        <div>
            <IconButton aria-label="response" onClick={(e) => clickLike(e)}>
                {like ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                {numOfLikes}
            </IconButton>
            <IconButton aria-label="response" onClick={(e) => clickDisLike(e)}>
                {disLike ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
                {numOfDisLikes}
            </IconButton>
        </div>
    )
}
export default LikeAndDisLike
