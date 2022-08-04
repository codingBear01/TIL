import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksLayout from './../pages/BooksLayout';
import BookList from './../pages/BookList';
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';
import About from './../pages/About';
import Contact from './../pages/Contact';
import OtherLayout from './../pages/OtherLayout';
import NewBooks from './../pages/NewBooks';
import Book from '../pages/Book';

function SharedLayouts() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBooks />} />
        </Route>
        <Route element={<OtherLayout />}>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default SharedLayouts;
