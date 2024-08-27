import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from "react";
export interface PostBodyProps {
    image?:string;
    title?:string;
    text?:string;
}

function PostBody(props: PostBodyProps) {
    const {image, text, title} = props;
    return(
        <>
            {
                image && <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title="green iguana"
                />

            }
            {
                (text || title) && <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            }

        </>
    );
}
export default PostBody;