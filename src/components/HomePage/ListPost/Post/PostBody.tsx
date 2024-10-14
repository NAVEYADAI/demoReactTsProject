import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Stack from '@mui/material/Stack'
export interface PostBodyProps {
    image?: string
    title?: string
    text?: string
}

function PostBody(props: PostBodyProps) {
    const { image, text, title } = props
    return (
        <Stack>
            {title && (
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {title}
                    </Typography>
                </CardContent>
            )}
            {image && (
                <CardMedia
                    sx={{ height: 300, width: 400 }}
                    image={image}
                />
            )}
            {text && (
                <CardContent>
                    <Typography variant="h5" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            )}
        </Stack>
    )
}
export default PostBody
