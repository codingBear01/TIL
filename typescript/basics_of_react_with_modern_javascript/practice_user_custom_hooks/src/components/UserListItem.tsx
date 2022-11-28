/* Interfaces */
import { User } from '../interfaces';

function UserListItem({ user }: User) {
    return (
        <li>
            <span>번호: {user.id}</span>
            <span className="px-5">
                이름: {user.firstname} {user.lastname}
            </span>
            <span>나이: {user.age}</span>
        </li>
    );
}

export default UserListItem;
