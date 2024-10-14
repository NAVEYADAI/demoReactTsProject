import * as React from 'react'
import Box from '@mui/material/Box'
import MainAppBar from './AppBar/MainAppBar'
import SideBar from './SideBar/SideBar'
import { useEffect, useState } from 'react'
import MainPost from './ListPost/MainPost'
import { HaveUser } from './HaveUser'
import { Category } from '../../types/category'
import useAxiosInstance from '../../AxiosInstance'
import {useNavigate} from "react-router";
import {Backdrop, CircularProgress} from "@mui/material";

function HomePage() {
    const [objectCategory, setObjectCategory] = useState<Category[]>([])
    const [open, setOpen] = useState(true);
    const [positiveNegativeSelected, setPositiveNegativeSelected] =
        React.useState<string | null>(null)
    const [selectedCategories, setSelectedCategories] = useState<number[]>([])
    const axiosInstance = useAxiosInstance()
    const navigate = useNavigate()

    const selectSubCategory = (id: number) => {
        console.log(id)
        setSelectedCategories((prevState) => {
            if (!prevState.includes(id)) {
                console.log(selectedCategories)
                return [...prevState, id]
            } else {
                console.log(selectedCategories)
                return prevState.filter((category) => category !== id)
            }
        })
    }
    useEffect(() => {
        const tryToken = async () =>{
            try{
                const res = await axiosInstance.post('/user/tokenIsGood')
                console.log('token is good')
            }catch (error){
                console.log("need to move for logIn page")
                navigate('/LogIn')
            }
        }
        tryToken()

    }, []);
    useEffect(() => {

        const logIn = async (): Promise<void> => {
            try {
                const resp = await axiosInstance.get<Category[]>('/category')
                if (resp.data) {
                    setObjectCategory(resp.data)
                    setOpen(false)
                }
            } catch (error) {
                console.error('Login failed:', error)
            }
        }
        logIn()
    }, [selectedCategories])
    return (
        <Box
            key="all"
            sx={{
                width: '99vw',
                height: '100vh',
                position: 'absolute',
            }}
        >
            <MainAppBar />
            <SideBar
                openLoader={open}
                objectCategory={objectCategory}
                selectedCategories={selectedCategories}
                selectSubCategory={selectSubCategory}
                PositiveNegativeSelectedValue={positiveNegativeSelected}
                setPositiveNegativeSelected={setPositiveNegativeSelected}
            />

            {
                open ? <Backdrop
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop> :
                    <MainPost
                    selectedCategories={selectedCategories}
                    PositiveNegativeSelectedValue={positiveNegativeSelected}
                />
            }

        </Box>
    )
}
export default HaveUser(HomePage)
