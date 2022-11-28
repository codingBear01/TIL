/* Libraries */
import { createContext, useState } from 'react';
/* Interfaces */
import { IsLoadingContextProps, providerProps } from './../interfaces/';

const IsloadingCtxDefaultValue = {
    isLoading: false,
    setIsLoading: () => {},
};

export const IsLoadingContext = createContext<IsLoadingContextProps>(
    IsloadingCtxDefaultValue
);

export const IsLoadingProvider: React.FC<providerProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </IsLoadingContext.Provider>
    );
};
