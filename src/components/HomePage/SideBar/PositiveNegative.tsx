import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
interface PositiveNegativeProps {
    PositiveNegativeSelectedArray: boolean[];
    changePositiveNegativeSelected: (index: number) => void;
}
const PositiveNegative = (props: PositiveNegativeProps) => {
    const {PositiveNegativeSelectedArray, changePositiveNegativeSelected} = props;
    return(
        <>
            <FormControl >
                <FormLabel >הגדר חיובי שלילי או ניטרלי</FormLabel>
                <FormGroup  >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={PositiveNegativeSelectedArray[0]}
                                onChange={ () => changePositiveNegativeSelected(0)}
                            />
                        }
                        label="חיובי"
                        labelPlacement="start"

                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={PositiveNegativeSelectedArray[1]}
                                onChange={ () => changePositiveNegativeSelected(1)}
                            />
                        }
                        label="שלילי"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={PositiveNegativeSelectedArray[2]}
                            onChange={ () => changePositiveNegativeSelected(2)}
                        />
                    }
                        label="ניטרלי"
                        labelPlacement="start"

                    />
                </FormGroup>
            </FormControl>
        </>
    );
}
export default PositiveNegative;