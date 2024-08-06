import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface MyContextType {
    titleValue: string;
    setTitleValue: (newValue: string) => void;
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
export const MyProvider = ({ children }: { children: ReactNode }) => {
    const [titleValue, setTitleValue] = useState<string>('hello');

    return (
        <MyContext.Provider value={{ titleValue, setTitleValue }}>
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
