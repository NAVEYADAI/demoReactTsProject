import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import Typography from "@mui/material/Typography";

const MainAddPost = () => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState('ready');
    const [file, setFile] = useState<File | undefined>();
    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files : FileList;
        };
        console.log('target', target.files);
        const selectFile = target.files[0];
        setFile(selectFile);
        console.log(file)
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result as string)
        }
        if(selectFile){
            reader.readAsDataURL(selectFile);
        }
    }

    return(
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                    },
                }}
            >
                <Paper elevation={0}>
                    <Typography variant="h1" component="h2">
                        כותרת
                    </Typography>
                    <TextField id="title" label="כותרת תמונה" variant="outlined"/>
                    <Typography variant="h1" component="h2">
                        טקסט
                    </Typography>                    <TextField id="text" label="טקסט חופשי" variant="outlined"/>
                    <Typography variant="h1" component="h2">
                        הוספת תמונה
                    </Typography>
                    <input id="text" type="file" onChange={handleOnChange}/><br/><br/>
                    {imagePreviewUrl && (
                        <img src={imagePreviewUrl} alt="Selected" style={{maxWidth: '450px', height: 'auto'}}/>
                    )}<br/>
                    <Button variant="outlined">הוספת פוסט</Button>
                </Paper>
            </Box>

        </>
    );
}

export default MainAddPost;