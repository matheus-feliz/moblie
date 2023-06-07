/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';
const UsersContext = createContext({});

export const UserProvider = props => {
    const [user, setUser] = useState({});
    return (
        <UsersContext.Provider value={{user,setUser}}>
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
