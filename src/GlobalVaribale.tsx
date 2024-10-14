import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react'
import { getEmptyUser, user } from './types/user'

// Define the shape of the context data
interface MyContextType {
    titleValue: string
    setTitleValue: (newValue: string) => void
    jwtToken: string
    setJwtToken: (token: string) => void
    globalUser: user
    setGlobalUser: (newGlobalUser: user) => void
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined>(undefined)

// Create a provider component
export const MyProvider = ({ children }: { children: ReactNode }) => {
    const [titleValue, setTitleValue] = useState<string>('עמוד ראשי')

    // Function to get JWT token from localStorage, with check for window object
    const getJwtTokenFromStorage = () => {
        if (typeof window !== 'undefined') {
            // Check if localStorage is available
            const storedJwtToken = localStorage.getItem('jwtToken')
            return storedJwtToken ? storedJwtToken : 'tmp' // Removed JSON.parse
        }
        return 'tmp' // Default if localStorage is not available (server-side rendering)
    }

    const [jwtToken, setJwtToken] = useState<string>(getJwtTokenFromStorage())

    // Function to get user from localStorage, with check for window object
    const getUserFromStorage = (): user => {
        if (typeof window !== 'undefined') {
            // Check if localStorage is available
            const storedUser = localStorage.getItem('globalUser')
            return storedUser ? JSON.parse(storedUser) : getEmptyUser() // JSON.parse here is correct for objects
        }
        return getEmptyUser()
    }

    const [globalUser, setGlobalUser] = useState<user>(getUserFromStorage())

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('globalUser', JSON.stringify(globalUser))
        }
    }, [globalUser])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('jwtToken', jwtToken)
        }
    }, [jwtToken])

    return (
        <MyContext.Provider
            value={{
                titleValue,
                setTitleValue,
                globalUser,
                setGlobalUser,
                jwtToken,
                setJwtToken,
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

// Custom hook for using the context
export const useMyContext = () => {
    const context = useContext(MyContext)
    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyProvider')
    }
    return context
}
