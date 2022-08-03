import { Link, Route, Routes } from 'react-router-dom';
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

function App() {
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
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/books" element={<BooksLayout />}>
    //     <Route index element={<BookList />} />
    //     <Route path=":id" element={<Book />} />
    //     <Route path="new" element={<NewBooks />} />
    //   </Route>
    //   <Route element={<OtherLayout />}>
    //     <Route path="/contact" element={<Contact />}></Route>
    //     <Route path="/about" element={<About />}></Route>
    //   </Route>
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
}

export default App;
