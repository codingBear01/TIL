/* Libraries */
import { memo } from 'react';
/* Interfaces */
import { User } from '../interfaces';

const UserListItem = memo(({ user }: User) => {
    console.log('UserListItem rendering!');

    return (
        <li>
            <span>번호: {user.id}</span>
            <span className="px-5">
                이름: {user.firstname} {user.lastname}
            </span>
            <span>나이: {user.age}</span>
        </li>
    );
});

export default UserListItem;
