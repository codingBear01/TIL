import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User2 = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'Beckham',
      email: 'ManUtd@ManUtd.com',
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <div>User name is {user.name}</div>
      <div>User name is {user.email}</div>
    </div>
  );
};
