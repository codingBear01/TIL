import React from 'react';
import BookRoutes from './BookRoutes';
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function NestedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/*" element={<BookRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default NestedRoutes;
