import * as React from 'react';
import {Response} from "../../../../../types/responseToResponse";
import ResponseCard from "./ResponseCard";
import {Dispatch, SetStateAction} from "react";


export interface ResponseBodyProps{
    response: Response;
    sizeForMarginLeft: number;
    responses: Response[]
    setResponses: Dispatch<SetStateAction<Response[]>>;


}
function ResponsePost(props:ResponseBodyProps ) {
    const {response, sizeForMarginLeft, responses, setResponses} = props;


    return(
        <>
            <ResponseCard response={response}
                          sizeForMarginLeft={sizeForMarginLeft}
                          responses={responses}
                          setResponses={setResponses}/>
            {
                response.responses.length !== 0 && response.responses.map((item) => (
                    <ResponsePost response={item}
                                  sizeForMarginLeft={ sizeForMarginLeft + 1 }
                                  responses={responses}
                                  setResponses={setResponses}/>
                    )
                )
            }
        </>
    );
}
export default ResponsePost;