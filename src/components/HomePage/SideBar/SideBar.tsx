import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import * as React from 'react'
import PositiveNegative from './PositiveNegative'
import SelectCategory from './SelectCategory'
import NewPostButton from './NewPostButton'
import Box from '@mui/material/Box'
import { Category } from '../../../types/category'
import {Backdrop, CircularProgress} from "@mui/material";

interface SideBarProps {
    objectCategory: Category[]
    selectSubCategory: (id: number) => void
    selectedCategories: number[]
    PositiveNegativeSelectedValue: string | null
    setPositiveNegativeSelected: (index: string | null) => void
    openLoader:boolean;
}
const drawerWidth = 240;

const SideBar = (props: SideBarProps) => {
    const {
        objectCategory,
        selectedCategories,
        PositiveNegativeSelectedValue,
        setPositiveNegativeSelected,
        selectSubCategory,
        openLoader,
    } = props

    return (
        <Box
            key="all"
            sx={{
                width: drawerWidth,
                height: '100vh',
                position: 'absolute',
                overflowX: 'hidden',
                right: 0,
            }}
        >
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        padding: 2, // הוספת מרווח פנימי
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <Toolbar />
                <Divider />
                {
                    openLoader ?
                        <Box sx={{
                            height:100,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                                <CircularProgress color="inherit" />
                        </Box> :
                        <Box sx={{ width: '100%', textAlign: 'right' , overflowY: 'auto' }}>
                            <SelectCategory objectCategory={objectCategory}
                                            selectedCategories={selectedCategories}
                                            selectSubCategory={selectSubCategory}
                            />
                        </Box>
                 }

                <Divider />
                <Box sx={{ width: '100%', textAlign: 'right' }}>

                    <PositiveNegative
                        PositiveNegativeSelectedValue={
                            PositiveNegativeSelectedValue
                        }
                        setPositiveNegativeSelected={setPositiveNegativeSelected}
                    />
                </Box>

                <Divider />
                <Box sx={{ width: '100%', textAlign: 'center', display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', }}>
                    <NewPostButton objectCategory={objectCategory} />
                </Box>
            </Drawer>
        </Box>
    )
}
export default SideBar
