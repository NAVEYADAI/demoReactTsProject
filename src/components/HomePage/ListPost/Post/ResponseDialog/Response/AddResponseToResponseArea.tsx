import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

interface AddResponseToResponseAreaProps {
    canResponse: boolean
    newResponse: string
    setNewResponse: Dispatch<SetStateAction<string>>
    clickSendResponseToResponse: () => void
}
const AddResponseToResponseArea = (props: AddResponseToResponseAreaProps) => {
    const {
        canResponse,
        newResponse,
        setNewResponse,
        clickSendResponseToResponse,
    } = props

    return (
        <Stack>
            <Divider />
            {canResponse && (
                <CardActions disableSpacing>
                    <TextField
                        sx={{ width: '450px', height: '56px' }}
                        value={newResponse}
                        onChange={(event) => setNewResponse(event.target.value)}
                    />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        sx={{ height: '49px' }}
                        onClick={clickSendResponseToResponse}
                    >
                        Send
                    </Button>
                </CardActions>
            )}
        </Stack>
    )
}
export default AddResponseToResponseArea
