import { Link, Route, Routes, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NotFound from './pages/NotFound';
import NewBooks from './pages/NewBooks';
import BooksLayout from './pages/BooksLayout';
import Contact from './pages/Contact';
import About from './pages/About';
import OtherLayout from './pages/OtherLayout';
import BookSidebar from './pages/BookSidebar';
import BookRoutes from './NestedRoutes/BookRoutes';
import SearchParameters from './SearchParameters/SearchParameters';

function App() {
  return (
    <>
      <SearchParameters />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
