import * as React from "react";
import List from "@mui/material/List";
import FormControl from "@mui/material/FormControl";
import DadCategory from "./DadCategory";
import SubCategories from "./SubCategories";
import {CategoryState} from "../homePage";

interface SelectCategoryProps {
    objectCategory: CategoryState;
    toggleCategory: (category: string, subcategory: string) => void;
}
const SelectCategory = (props: SelectCategoryProps) => {
    const {objectCategory, toggleCategory} = props;

    const [open, setOpen] = React.useState([false, false, false]);

    const handleClick = (index: number) => {
        const newOpen = [...open];
        newOpen[index] = !newOpen[index];
        setOpen(newOpen);
    };

    return(
            <List>
                {
                    objectCategory &&
                    Object.keys(objectCategory).map((category, index) =>
                        <FormControl>
                            <DadCategory handleClick={handleClick}
                                         upOrDown={open[index]}
                                         title={category}
                                         index={index}
                            />
                            <SubCategories open={open[index]}
                                           categories={objectCategory[category]}
                                           onSelectSubCategory={toggleCategory}
                                           dadCategory={category}
                            />
                        </FormControl>
                    )
                }
            </List>
    )
}
export default SelectCategory;