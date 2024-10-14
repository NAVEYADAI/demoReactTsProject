import * as React from 'react'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral'
import WarningIcon from '@mui/icons-material/Warning'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { Tooltip } from '@mui/material'

interface GradsComponentProps {
    grads: number
}

const GradsComponent = (props: GradsComponentProps) => {
    const { grads } = props

    const colorGrads = [
        <TaskAltIcon color="success" />,
        <SentimentNeutralIcon color="disabled" />,
        //<FilterTiltShiftIcon color="disabled" />,
        <WarningIcon color="error" />,
    ]
    const [indexGrads, setIndexGrads] = React.useState(1)

    useEffect(() => {
        if (grads >= 0.4 && grads < 0.6) {
            setIndexGrads(1)
        } else if (grads < 0.4) {
            setIndexGrads(2)
        } else {
            setIndexGrads(0)
        }
    }, [grads])

    return (
        <Tooltip
            title={
                <React.Fragment>
                    <Typography color="inherit" sx={{ textAlign: 'right' }}>
                        מדד הולמות
                    </Typography>
                    <em>{'המערכת בודקת ומציגה את רמת הולמות התוכן המוצג'}</em>
                </React.Fragment>
            }
            placement="top"
            arrow
        >
            {colorGrads[indexGrads]}
        </Tooltip>
    )
}

export default GradsComponent
