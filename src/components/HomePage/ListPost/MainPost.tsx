import * as React from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import List from '@mui/material/List'
import { getPost } from '../../../store/features/postSplice'
import { useMyContext } from '../../../GlobalVaribale'
import PostItemButton from './Post/PostItemBoutton'
import useAxiosInstance from '../../../AxiosInstance'
import Box from '@mui/material/Box'

interface MainPostProps {
    selectedCategories: number[]
    PositiveNegativeSelectedValue: string | null
}

function MainPost(props: MainPostProps) {
    const { selectedCategories, PositiveNegativeSelectedValue } = props
    const { globalUser } = useMyContext()
    const dispatch = useAppDispatch()
    const posts = useAppSelector((state) => state.post)
    const axiosInstance = useAxiosInstance()

    useEffect(() => {
        const getPosts = async () => {
            let url = '/post/getPostByFilters'
            if (PositiveNegativeSelectedValue !== null) {
                url += `/` + PositiveNegativeSelectedValue.toString()
            }
            try {
                const req = await axiosInstance.get(url, {
                    params: {
                        subCategories: selectedCategories,
                        userId: globalUser.id,
                    },
                })
                if (req.status === 200) {
                    dispatch(getPost(req.data))
                }
            } catch (err) {
                console.log(err)
            }
        }
        getPosts()
    }, [selectedCategories, PositiveNegativeSelectedValue])
    return (
        <Box
            sx={{
                paddingTop: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <List>
                {posts &&
                    posts.map((item) => <PostItemButton postData={item} />)}
            </List>
        </Box>
    )
}

export default MainPost
