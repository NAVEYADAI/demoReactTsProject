import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import * as React from "react";

interface DadCategoryInterface {
    handleClick: (index:number)=>void;
    upOrDown: boolean;
    title: string;
    index:number;
}

const DadCategory = (props: DadCategoryInterface) => {
    const {handleClick, upOrDown, title, index} = props
    return(
        <>
            <ListItemButton
                onClick={() => handleClick(index)}
            >
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
                {upOrDown ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
        </>
    );
}
export default DadCategory;