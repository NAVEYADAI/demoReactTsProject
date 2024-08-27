import ResponsePost from "../Response/ResponsePost";
import List from "@mui/material/List";
import * as React from "react";
import {Response} from "../../../../../types/responseToResponse";
import {Dispatch, SetStateAction} from "react";

interface ResponseListOnPostProps {
    responses: Response[];
    setResponses: Dispatch<SetStateAction<Response[]>>;
}
const ResponseListOnPost = (props: ResponseListOnPostProps) => {
    const {responses, setResponses} = props;

    return(
        <>
            <List sx={{ height: '70%' }}>
                {
                    responses && responses.map((item) => (
                        <ResponsePost
                            response={item}
                            sizeForMarginLeft={0}
                            responses={responses}
                            setResponses={setResponses}
                        />
                    ))
                }
            </List>
        </>
    );
}
export default ResponseListOnPost;