import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import Box from "@mui/material/Box";


interface PositiveNegativeProps {
    PositiveNegativeSelectedValue: string | null
    setPositiveNegativeSelected: (index: string | null) => void
}
const drawerWidth = 240;

const PositiveNegative = (props: PositiveNegativeProps) => {
    const { PositiveNegativeSelectedValue, setPositiveNegativeSelected } = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = (event.target as HTMLInputElement).value
        setPositiveNegativeSelected(selectedValue)
    }

    const handleClick = (selectedValue: string) => {
        if (PositiveNegativeSelectedValue === selectedValue) {
            setPositiveNegativeSelected(null)
        }
    }

    return (
        <Box sx={{width:'10vw'}}>
            <FormControl>
                <FormLabel sx={{ textAlign: 'right'}}>הולמות התוכן</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={PositiveNegativeSelectedValue || ''}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="positive"
                        labelPlacement="start"
                        control={<Radio />}
                        label="הולם"
                        onClick={() => handleClick('positive')}
                    />
                    <FormControlLabel
                        value="neutral"
                        labelPlacement="start"
                        control={<Radio />}
                        label="ניטרלי"
                        onClick={() => handleClick('neutral')}
                    />
                    <FormControlLabel
                        value="negative"
                        control={<Radio />}
                        label="בילתי הולם"
                        labelPlacement="start"
                        onClick={() => handleClick('negative')}
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default PositiveNegative
