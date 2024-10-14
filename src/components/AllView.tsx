import Box from '@mui/material/Box'
import Page from './HomePage/Page'

function AllView() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            // width="100vw"
        >
            <Page />
        </Box>
    )
}

export default AllView
