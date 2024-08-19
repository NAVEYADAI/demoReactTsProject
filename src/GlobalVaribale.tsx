import React, { createContext, useContext, useState, ReactNode } from 'react';
import {getEmptyUser, user} from "./types/user";

// Define the shape of the context data
interface MyContextType {
    titleValue: string;
    setTitleValue: (newValue: string) => void;
    globalUser: user;
    setGlobalUser: (newGlobalUser: user) => void;
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
export const MyProvider = ({ children }: { children: ReactNode }) => {
    const [titleValue, setTitleValue] = useState<string>('עמוד ראשי');
    const [globalUser, setGlobalUser] = useState<user>(getEmptyUser())
    return (
        <MyContext.Provider value={{ titleValue, setTitleValue,globalUser ,setGlobalUser }}>
            {children}
        </MyContext.Provider>
    );
};

// Custom hook for using the context
export const useMyContext = () => {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
