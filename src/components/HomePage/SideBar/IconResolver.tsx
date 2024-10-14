import React from 'react'
import * as Icons from '@mui/icons-material'

interface IconResolverProps {
    iconName: string
}
const IconResolver = (props: IconResolverProps) => {
    const { iconName } = props

    // @ts-ignore
    const IconComponent = Icons[iconName]

    if (!IconComponent) {
        return null
    }

    return <IconComponent />
}

export default IconResolver
