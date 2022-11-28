/* Libraries */
import { useContext } from 'react';
/* Components */
import UserListItem from './UserListItem';
/* Context */
import {
    IsFetchingUsersCompletedContext,
    IsLoadingContext,
    UsersContext,
} from './../providers/';

function UserList() {
    /* Context */
    const { setIsLoading } = useContext(IsLoadingContext);
    const { users, setUsers } = useContext(UsersContext);
    const { isFetchingUsersCompleted, setIsFetchingUsersCompleted } =
        useContext(IsFetchingUsersCompletedContext);

    /* Handlers */
    const onClickReset = () => {
        setUsers([]);
        setIsLoading(false);
        setIsFetchingUsersCompleted(false);
    };

    return (
        <>
            {users && (
                <ul className="flex justify-center items-center flex-col">
                    {users.map((user) => (
                        <UserListItem key={user.id} user={user} />
                    ))}
                    {isFetchingUsersCompleted && (
                        <button
                            className="px-5 py-3 rounded-md bg-slate-500"
                            type="button"
                            onClick={onClickReset}
                        >
                            Reset
                        </button>
                    )}
                </ul>
            )}
        </>
    );
}

export default UserList;
