import List from "@mui/material/List";
import SubCategory from "./SubCategory";
import Collapse from "@mui/material/Collapse";
import * as React from "react";

interface SubCategoriesInterface {
    open: boolean;
    categories: { [key: string]: boolean };
    onSelectSubCategory: (dadCategory: string, subCategory: string) => void;
    dadCategory: string;
}
const SubCategories = (props: SubCategoriesInterface) => {
    const {open, categories, onSelectSubCategory, dadCategory} = props;
    return(
        <>
            <Collapse in={open}
                      timeout="auto"
                      unmountOnExit
            >
                <List disablePadding>
                    {Object.keys(categories).map((category) => (
                        <SubCategory
                            onSelectSubCategory={onSelectSubCategory}
                            categoryName={category}
                            dadCategory={dadCategory}
                            checked={categories[category]}
                        />
                    ))}
                </List>
            </Collapse>
        </>
    );
}
export default SubCategories;