import { useState, Fragment, useEffect } from 'react';
import Spinner from '../UI/Spinner';

export default function UsersList() {
  const [userIndex, setUserIndex] = useState(0);
  const [users, setUsers] = useState(null);
  const user = users?.[userIndex];
  // . 대신에 ?. 연산자를 사용함으로써, 자바스크립트는 obj.first.second에 접근하기 전에 obj.first가 null 또는 undefined가 아니라는 것을 암묵적으로 확인하는 것을 알고 있다. 만약 obj.first가 null 또는 undefined이라면, 그 표현식은 자동으로 단락되어 undefined가 반환된다.

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('http://localhost:3001/users');
      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  if (users === null) {
    return (
      <p>
        <Spinner /> Loading Users...
      </p>
    );
  }

  return (
    <Fragment>
      <ul className="users items-list-nav">
        {users.map((u, i) => (
          <li key={u.id} className={i === userIndex ? 'selected' : null}>
            <button className="btn" onClick={() => setUserIndex(i)}>
              {u.name}
            </button>
          </li>
        ))}
      </ul>

      {user && (
        <div className="item user">
          <div className="item-header">
            <h2>{user.name}</h2>
          </div>
          <div className="user-details">
            <h3>{user.title}</h3>
            <p>{user.notes}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
}
