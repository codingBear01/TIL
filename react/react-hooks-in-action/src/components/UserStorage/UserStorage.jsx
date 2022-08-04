import React, { useEffect, useState } from 'react';

const UserStorage = () => {
  const [user, setUser] = useState('Sanjiv');

  // Run this effect only when the component first mounts.
  useEffect(() => {
    const storedUser = window.localStorage.getItem('user');

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Run this effect whenever the user changes.
  useEffect(() => {
    window.localStorage.setItem('user', user);
  }, [user]);

  return (
    <>
      <select value={user} onChange={(e) => setUser(e.target.value)}>
        <option>Jason</option>
        <option>Akiko</option>
        <option>Clarisse</option>
        <option>Sanjiv</option>
      </select>
    </>
  );
};

export default UserStorage;
