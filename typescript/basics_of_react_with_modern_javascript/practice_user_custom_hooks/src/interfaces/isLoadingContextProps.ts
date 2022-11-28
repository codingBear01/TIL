import { Dispatch, SetStateAction } from 'react';

export interface IsLoadingContextProps {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}
