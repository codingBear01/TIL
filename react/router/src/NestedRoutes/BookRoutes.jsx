import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksLayout from '../pages/BooksLayout';
import BookList from '../pages/BookList';
import Book from '../pages/Book';
import NewBooks from '../pages/NewBooks';
import NotFound from '../pages/NotFound';

function BookRoutes() {
  return (
    <Routes>
      <Route element={<BooksLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBooks />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default BookRoutes;
