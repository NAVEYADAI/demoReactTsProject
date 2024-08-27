import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import Card from "@mui/material/Card";
import * as React from "react";
import {Response} from "../../../../../types/responseToResponse";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {useMyContext} from "../../../../../GlobalVaribale";
import {Dispatch, SetStateAction} from "react";
import {v4} from 'uuid';
interface ResponseCardProps{
    response: Response;
    sizeForMarginLeft: number;
    responses: Response[];
    setResponses: Dispatch<SetStateAction<Response[]>>;
}
const ResponseCard = (props: ResponseCardProps) => {

    const {response, sizeForMarginLeft, setResponses} = props;

    const [like, setLike]= React.useState(false);
    const [disLike, setDisLike] = React.useState(false);
    const [canResponse, setCanResponse] = React.useState(false);
    const [newResponse, setNewResponse] = React.useState('');

    const {globalUser} = useMyContext();

    const clickSendResponseToResponse = () => {
        const NewResponse:Response = {
            id: v4(),
            userName:globalUser.userName,
            postId:response.postId,
            time: new Date(),
            description:newResponse,
            responses:[],
        };
        setResponses(prevState => {
            const copyOf = [...prevState]
            const findResponse = (responseList: Response[]):Response [] => {
                return responseList.map((tmpResponse) => {
                    if(tmpResponse.id === response.id){
                        return {
                            ...tmpResponse,
                            responses: [...tmpResponse.responses, NewResponse ]
                        };
                    }
                    if (tmpResponse.responses.length > 0){
                        return {
                            ...tmpResponse,
                            responses: findResponse(tmpResponse.responses)
                        };
                    }
                    return tmpResponse
                })
            }
            return findResponse(copyOf)
        })
    }


    const clickOpenNewResponse = () => {
        setCanResponse(!canResponse);
    }

    const clickLike = () => {
        if(disLike && !like){
            setDisLike(false);
            setLike(true);

        }else if(!disLike && like){
            setLike(false);

        }else{
            setLike(true);
        }
    }
    const clickDisLike = () => {
        if(like && !disLike){
            setLike(false);
            setDisLike(true);
        }else if(!like && disLike){
            setDisLike(false)
        }else{
            setDisLike(true);

        }
    }

    return(
        <>
            <Card sx={{
                marginLeft: 5 * sizeForMarginLeft,
                width: 400 - 5 * sizeForMarginLeft,
            }}
            >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {response.userName[0]}
                        </Avatar>
                    }
                    title={response.userName}
                    // subheader={response.time?.toString()}
                />
                    <Typography variant="body2" color="text.secondary">
                        {response.description}
                    </Typography>
                <CardActions disableSpacing>
                    <IconButton aria-label="response" onClick={clickOpenNewResponse}>
                        <ShortcutIcon />
                    </IconButton>
                    <IconButton aria-label="response" onClick={clickLike}>
                        {
                            like ? <ThumbUpAltIcon/> :
                                <ThumbUpOffAltIcon/>
                        }
                    </IconButton>
                    <IconButton aria-label="response" onClick={clickDisLike}>
                        {
                            disLike ? <ThumbDownAltIcon/> :
                                <ThumbDownOffAltIcon/>
                        }
                    </IconButton>

                </CardActions>
                {
                    canResponse &&
                    <CardActions disableSpacing>
                        <TextField
                            sx={{ width: '450px', height: 'auto'}}
                            value={newResponse}
                            onChange={(event) =>
                                setNewResponse(event.target.value)}
                        />
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            onClick={clickSendResponseToResponse}
                        >
                            Send
                        </Button>
                    </CardActions>
                }

            </Card>
        </>
    );
}
export default ResponseCard;