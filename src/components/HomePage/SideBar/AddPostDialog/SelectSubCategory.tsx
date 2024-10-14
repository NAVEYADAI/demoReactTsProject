import * as React from 'react'
import SubCategoriesInCreateNewPost from './SubCategoriesInCreateNewPost'
import List from '@mui/material/List'
import { Category } from '../../../../types/category'

interface SelectSubCategoryProps {
    subCategories: Category[]
    subCategoryId: number | null
    setSubCategoryId: (value: number | null) => void
}

const SelectSubCategory = (props: SelectSubCategoryProps) => {
    const { subCategories, subCategoryId, setSubCategoryId } = props

    const categorySelection = (id: number): void => {
        if (subCategoryId) {
            if (id === subCategoryId) {
                setSubCategoryId(null)
            } else {
                setSubCategoryId(id)
            }
        } else {
            setSubCategoryId(id)
        }
    }

    return (
        <List
            sx={{
                overflow: 'auto',
                maxHeight: 200,
            }}
        >
            {subCategories &&
                subCategories.map((category) => (
                    <div>
                        <SubCategoriesInCreateNewPost
                            subCategoryId={subCategoryId}
                            categorySelection={categorySelection}
                            categories={category}
                        />
                    </div>
                ))}
        </List>
    )
}

export default SelectSubCategory
