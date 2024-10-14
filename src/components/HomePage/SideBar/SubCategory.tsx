import ListItemButton from '@mui/material/ListItemButton'
import * as React from 'react'
import ListItemText from '@mui/material/ListItemText'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import { SubCategoryType } from '../../../types/category'

interface SubCategoryProps {
    selectSubCategory: (id: number) => void
    subCategory: SubCategoryType
    selectedCategories: number[]
}

const SubCategory = (props: SubCategoryProps) => {
    const { selectedCategories, subCategory, selectSubCategory } = props
    return (
        <ListItemButton
            onClick={() => {
                selectSubCategory(subCategory.id)
            }}
        >
            <ListItemText primary={subCategory.name} />
            {selectedCategories.includes(subCategory.id) ? (
                <StarIcon />
            ) : (
                <StarBorderIcon />
            )}
        </ListItemButton>
    )
}
export default SubCategory
