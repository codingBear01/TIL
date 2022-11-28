import { Dispatch, SetStateAction } from 'react';

export interface IsFetchingUsersCompletedProps {
    isFetchingUsersCompleted: boolean;
    setIsFetchingUsersCompleted: Dispatch<SetStateAction<boolean>>;
}
