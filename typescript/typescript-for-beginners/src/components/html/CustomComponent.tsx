import React from 'react';
import { Greet } from './../Greet';

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  const { name, msgCnt, isLogin } = props;
  return <div>{name}</div>;
};
