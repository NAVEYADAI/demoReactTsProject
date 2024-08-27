
import ListItemButton from "@mui/material/ListItemButton";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

interface SubCategoryProps {
    categoryName: string;
    dadCategory: string;
    onSelectSubCategory: (dadName: string, subName: string) => void;
    checked: boolean;
}
const SubCategory = (props: SubCategoryProps) => {
    const {onSelectSubCategory, checked,categoryName, dadCategory} = props;
    return(
        <>
            <ListItemButton
                sx={{ pl: 4 }}
                onClick={()=>{
                    onSelectSubCategory(dadCategory, categoryName)
                }}
            >
                <ListItemText primary={categoryName} />
                <Checkbox
                    checked={checked}
                />
            </ListItemButton>
        </>
    );
}
export default SubCategory;