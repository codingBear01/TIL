import { useEffect, useState } from 'react';
import Spinner from '../UI/Spinner';

export default function UserPicker() {
  const [users, setUsers] = useState(null);

  // Fetch the data from inside an effect function.
  useEffect(() => {
    // Make the request to the database by using the browser’s fetch API.
    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // Include an empty dependency array to load the data once, when the component is first mounted.

  // Return alternative UI while the users load.
  if (users === null) {
    return <Spinner />;
  }

  return (
    <select>
      {users.map((u) => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}
