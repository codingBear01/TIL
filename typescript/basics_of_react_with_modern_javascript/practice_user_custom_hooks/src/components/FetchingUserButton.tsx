/* Libraries */
import { useContext } from 'react';
/* Context */
import {
    IsFetchingUsersCompletedContext,
    IsLoadingContext,
    UsersContext,
} from '../providers';
/* CONSTANTS */
const USERS = [
    {
        id: 1,
        firstname: 'つとむ',
        lastname: 'ぬしだ',
        age: 24,
    },
    {
        id: 2,
        firstname: 'みらい',
        lastname: 'さきおか',
        age: 28,
    },
    {
        id: 3,
        firstname: 'いちろ',
        lastname: 'ごと',
        age: 23,
    },
];

function FetchingUserButton() {
    /* Context */
    const { setIsLoading } = useContext(IsLoadingContext);
    const { setUsers } = useContext(UsersContext);
    const { setIsFetchingUsersCompleted } = useContext(
        IsFetchingUsersCompletedContext
    );

    /* Handlers */
    const fetchUsers = () => {
        setTimeout(() => {
            setUsers(USERS);
            setIsLoading(false);
            setIsFetchingUsersCompleted(true);
        }, 500);
    };

    const onClickFetchUsers = () => {
        setIsLoading(true);
        setIsFetchingUsersCompleted(false);
        fetchUsers();
    };

    return (
        <button
            className="px-5 py-3 rounded-md bg-slate-500"
            type="button"
            onClick={onClickFetchUsers}
        >
            Fetch Users
        </button>
    );
}

export default FetchingUserButton;
