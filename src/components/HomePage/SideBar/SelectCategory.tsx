import * as React from 'react'
import List from '@mui/material/List'
import FormControl from '@mui/material/FormControl'
import DadCategory from './DadCategory'
import Divider from '@mui/material/Divider'
import { Category } from '../../../types/category'
import Box from "@mui/material/Box";

interface SelectCategoryProps {
    objectCategory: Category[]
    selectedCategories: number[]
    selectSubCategory: (id: number) => void
}

const SelectCategory = (props: SelectCategoryProps) => {
    const { objectCategory, selectedCategories, selectSubCategory } = props
    return (
        <Box sx={{width:'100%'}}>
            <List sx={{width:'100%', overflowY: 'auto' }}>
                {objectCategory &&
                    objectCategory.map((category) => (
                            <Box>
                                <Divider />
                                <DadCategory
                                    dadCategory={category}
                                    selectedCategories={selectedCategories}
                                    selectSubCategory={selectSubCategory}
                                />
                            </Box>
                    ))}
            </List>
        </Box>
    )
}
export default SelectCategory
