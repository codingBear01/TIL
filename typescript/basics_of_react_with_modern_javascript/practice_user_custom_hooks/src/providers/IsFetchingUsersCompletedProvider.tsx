/* Libraries */
import { useState, createContext } from 'react';
/* Interfaces */
import { IsFetchingUsersCompletedProps, providerProps } from './../interfaces/';

const IsFetchingUsersCompletedCtxDefaultValue = {
    isFetchingUsersCompleted: false,
    setIsFetchingUsersCompleted: () => {},
};

export const IsFetchingUsersCompletedContext =
    createContext<IsFetchingUsersCompletedProps>(
        IsFetchingUsersCompletedCtxDefaultValue
    );

export const IsFetchingUsersCompletedProvider: React.FC<providerProps> = ({
    children,
}) => {
    const [isFetchingUsersCompleted, setIsFetchingUsersCompleted] =
        useState(false);

    return (
        <IsFetchingUsersCompletedContext.Provider
            value={{ isFetchingUsersCompleted, setIsFetchingUsersCompleted }}
        >
            {children}
        </IsFetchingUsersCompletedContext.Provider>
    );
};
