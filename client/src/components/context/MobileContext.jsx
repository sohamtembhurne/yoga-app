import React, { createContext, useContext, useState } from 'react';

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
    const [mobile, setMobile] = useState('');

    const setMobileNumber = (newMobile) => {
        setMobile(newMobile);
    };

    return (
        <MobileContext.Provider value={{ mobile, setMobileNumber }}>
            {children}
        </MobileContext.Provider>
    );
};

export const useMobile = () => {
    const context = useContext(MobileContext);
    if (!context) {
        throw new Error('useMobile must be used within a MobileProvider');
    }
    return context;
};
