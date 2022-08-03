import React from 'react';
import { Outlet } from 'react-router-dom';

function OtherLayout() {
  return (
    <>
      <h1>OtherLayout</h1>
      <Outlet />
    </>
  );
}

export default OtherLayout;
