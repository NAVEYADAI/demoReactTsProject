import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import PositiveNegative from "./PositiveNegative";
import SelectCategory from "./SelectCategory";
import {CategoryState} from "../homePage";

interface SideBarProps {
    objectCategory: CategoryState;
    toggleCategory: (category: string, subcategory: string) => void;
    PositiveNegativeSelectedArray: boolean[];
    changePositiveNegativeSelected: (index: number) => void;
}
const SideBar = (props : SideBarProps) => {
   const  { objectCategory, toggleCategory, PositiveNegativeSelectedArray, changePositiveNegativeSelected } = props;

    return(
        <>
            <Drawer
                variant="permanent"
                anchor="right"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },}}
            >
                <Toolbar />

                    <SelectCategory
                        objectCategory={objectCategory}
                        toggleCategory={toggleCategory}
                    />


                <Divider />
                <PositiveNegative
                    PositiveNegativeSelectedArray={PositiveNegativeSelectedArray}
                    changePositiveNegativeSelected={changePositiveNegativeSelected}
                />
            </Drawer>
        </>
    );
}
export default SideBar;