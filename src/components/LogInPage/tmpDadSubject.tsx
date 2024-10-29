import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import { useEffect, useState } from 'react'

export interface DadSubject {
    id: string
    name: string
}
function TmpDadSubject(props: DadSubject) {
    const { id, name } = props
    const [cildSubjects, setCildSubjects] = useState<any[]>([])

    useEffect(() => {
        const getListOfCildSubjects = async () => {
            console.log('get', name, 'subjects')
            try {
                const response = await fetch('url')
                const json = await response.json()
                setCildSubjects(json)
            } catch (error) {
                console.log(error)
            }
        }
        getListOfCildSubjects()
    }, [])

    const [checked, setChecked] = useState<number[]>([])
    const handleToggle = (value: number) => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]
        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        console.log(id, name)
        console.log(newChecked)
        setChecked(newChecked)
    }
    return (
        <>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`
                    return (
                        <ListItem
                            key={value}
                            disablePadding
                            onClick={() => handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={labelId}
                                primary={`Line item ${value + 1}`}
                            />
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
}

export default TmpDadSubject
