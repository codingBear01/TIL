/* Libraries */
import { Dispatch, SetStateAction } from 'react';
/* Interfaces */
import { Users } from '.';

export interface usersContextProps {
    users: Users[];
    setUsers: Dispatch<SetStateAction<Users[]>>;
}
