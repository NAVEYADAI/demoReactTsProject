import { useMyContext } from '../../GlobalVaribale'
import { Navigate } from 'react-router-dom'
import { ComponentType } from 'react'

interface Props {
    // Define the props type here if needed
}

export function HaveUser<T extends Props>(Comp: ComponentType<T>) {
    return function WrappedComponent(props: T) {
        const { globalUser } = useMyContext()

        if (globalUser.id !== '' && globalUser) {
            return <Comp {...props} />
        }

        return <Navigate to="/LogIn" />
    }
}
