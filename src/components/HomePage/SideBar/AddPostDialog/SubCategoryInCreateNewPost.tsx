import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import * as React from 'react'
import { SubCategoryType } from '../../../../types/category'

interface SubCategoryInCreateNewPostProps {
    subCategory: SubCategoryType
    categorySelection: (id: number) => void
    subCategoryId: number | null
}

const SubCategoryInCreateNewPost = (props: SubCategoryInCreateNewPostProps) => {
    const { subCategory, subCategoryId, categorySelection } = props

    const clickOnSubCategory = () => {
        categorySelection(subCategory.id)
    }

    return (
        <ListItemButton onClick={clickOnSubCategory}>
            <ListItemText primary={subCategory.name} />
            {subCategoryId === subCategory.id ? (
                <StarIcon />
            ) : (
                <StarBorderIcon />
            )}
        </ListItemButton>
    )
}

export default SubCategoryInCreateNewPost
