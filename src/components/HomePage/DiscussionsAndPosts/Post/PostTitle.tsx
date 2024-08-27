import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import * as React from "react";

interface PostTitleProps {
    date: Date;
    userName: string;
}
function PostTitle(props: PostTitleProps){
    const {userName, date} = props;
    return(
        <>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {userName[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={userName}
                subheader={date.toString()}
            />
        </>
    );
}

export default PostTitle;