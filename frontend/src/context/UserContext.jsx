import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    return (
        <UserContext.Provider value={{
            userData,
            setUserData
        }}>
        {children}
        </UserContext.Provider>
    )
    };

export default UserContextProvider;