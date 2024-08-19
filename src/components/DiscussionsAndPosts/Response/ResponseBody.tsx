import Card from "@mui/material/Card";
import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShortcutIcon from "@mui/icons-material/Shortcut";
import IconButton from "@mui/material/IconButton";
import NewResponseDialog from "./NewResponseDialog";


export interface ResponseBodyProps{
    userNameOfResponse:string;
    time:Date;
    text: string;
}
function ResponseBody(props:ResponseBodyProps ) {
    const {userNameOfResponse, time, text} = props;
    const [open, setOpen] = React.useState(false);
    const closeDialog = () => {
        setOpen(false);
    }
    const clickOpenNewResponse = () => {
        setOpen(true);
    }
    return(
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {userNameOfResponse[0]}
                        </Avatar>
                    }
                    title={userNameOfResponse}
                    subheader={time?.toString()}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="response" onClick={clickOpenNewResponse}>
                        <ShortcutIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <NewResponseDialog open={open} close={closeDialog}/>

        </>
    );
}
export default ResponseBody;