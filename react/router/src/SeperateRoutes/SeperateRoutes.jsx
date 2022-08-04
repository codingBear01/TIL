import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BookSidebar from './../pages/BookSidebar';
import Home from './../pages/Home';
import BookList from './../pages/BookList';

function SeperateRoutes() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <aside>
        <Routes location="/books">
          <Route path="/books" element={<BookSidebar />} />
        </Routes>
      </aside>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </>
  );
}

export default SeperateRoutes;
