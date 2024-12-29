import React, { createContext, useState  } from 'react';


export const CaptainContext = createContext();
 const CaptainContextProvider = ({ children }) => {
    const [captainData, setCaptainData] = useState({});

    return (
        <CaptainContext.Provider value={{
            captainData,
            setCaptainData
        }}>
            {children}
        </CaptainContext.Provider>
    );
};

export default CaptainContextProvider;