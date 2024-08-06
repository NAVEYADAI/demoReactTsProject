import {useMyContext} from "../GlobalVaribale";
import Box from '@mui/material/Box';


function AllView(){
    const {titleValue, setTitleValue}= useMyContext();
    const click =(previousValue:string):void =>{
        if(previousValue === "wold")
            setTitleValue('hello');
        else
            setTitleValue('wold');

    };
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            width="100vw"
            sx={{ border: '2px solid grey' }}
        >
            <h1>hello world</h1>

            <h3>{titleValue}</h3>
            <button onClick={() => {
                click(titleValue)
            }}>Change Value
            </button>
        </Box>
    );
}

export default AllView;
