/* Libraries */
import { useState, createContext } from 'react';
/* Interfaces */
import { Users, providerProps, usersContextProps } from './../interfaces';

const UsersCtxDefaultValue = {
    users: [
        {
            id: 0,
            firstname: '',
            lastname: '',
            age: 0,
        },
    ],
    setUsers: () => {},
};

export const UsersContext =
    createContext<usersContextProps>(UsersCtxDefaultValue);

export const UsersProvider: React.FC<providerProps> = ({ children }) => {
    const [users, setUsers] = useState<Users[]>([]);

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    );
};
