import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";

function MainAddPost() {
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
                    <h3>title</h3>
                    <TextField id="title" label="כותרת תמונה" variant="outlined"/>
                    <h3>text</h3>
                    <TextField id="text" label="טקסט חופשי" variant="outlined"/>
                    <h3>add image</h3>
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