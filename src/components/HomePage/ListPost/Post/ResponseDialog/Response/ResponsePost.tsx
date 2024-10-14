import * as React from 'react'
import { Response } from '../../../../../../types/responseToResponse'
import ResponseCard from './ResponseCard'
import { Box } from '@mui/material'
import Collapse from "@mui/material/Collapse";

export interface ResponseBodyProps {
    response: Response
    responses: Response[]
    sizeForMarginLeft: number
    postId: string
}

function ResponsePost(props: ResponseBodyProps) {
    const { response, sizeForMarginLeft, responses, postId } = props
    const [open, setOpen] = React.useState(false)

    return (
        <Box
            sx={{
                width: '20px',
                marginLeft: 40 + 'px',
            }}
        >
            <ResponseCard
                response={response}
                responses={responses}
                sizeForMarginLeft={sizeForMarginLeft}
                open={open}
                setOpen={setOpen}
                postId={postId}
            />
            <Collapse in={open} timeout={{ enter: 700, exit: 500 }} unmountOnExit>
                <Box sx={{ borderLeft: 0.5 }}>
                    {response.responseTo && response.responseTo.map((item) => (

                        <ResponsePost
                            key={item.id}
                            response={item}
                            responses={responses}
                            sizeForMarginLeft={sizeForMarginLeft + 1}
                            postId={postId}
                        />
                    ))}
                </Box>
            </Collapse>
        </Box>
    )
}

export default ResponsePost
