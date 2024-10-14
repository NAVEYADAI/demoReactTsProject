import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ListItemButton from '@mui/material/ListItemButton'
import * as React from 'react'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import SubCategory from './SubCategory'
import Collapse from '@mui/material/Collapse'
import { Category } from '../../../types/category'
import IconResolver from './IconResolver'

interface DadCategoryInterface {
    dadCategory: Category
    selectedCategories: number[]
    selectSubCategory: (id: number) => void
}

const DadCategory = (props: DadCategoryInterface) => {
    const { dadCategory, selectSubCategory, selectedCategories } = props
    const [open, setOpen] = React.useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <Box>
            <ListItemButton
                onClick={handleClick}
                sx={{ justifyContent: 'space-between' }}
            >
                {open ? <ExpandLess /> : <ExpandMore />}
                <ListItemIcon>
                    <IconResolver iconName={dadCategory.iconName} />
                </ListItemIcon>
                <ListItemText primary={dadCategory.name} />
            </ListItemButton>
            <Collapse in={open} timeout={500} unmountOnExit>
                <List disablePadding>
                    {dadCategory.subCategories.map((subCategory) => (
                        <SubCategory
                            selectSubCategory={selectSubCategory}
                            subCategory={subCategory}
                            selectedCategories={selectedCategories}
                        />
                    ))}
                </List>
            </Collapse>
        </Box>
    )
}
export default DadCategory
