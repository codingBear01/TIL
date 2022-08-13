import React from 'react';
import { Login } from './Login';
import { ProfileProps } from './Profile';

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};

export const Private = (props: PrivateProps) => {
  const { isLoggedIn, Component } = props;

  if (isLoggedIn) {
    return <Component name="kang" />;
  } else {
    return <Login />;
  }
};
