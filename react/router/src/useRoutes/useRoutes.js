import { useRoutes } from 'react-router-dom';
import Home from './../pages/Home';
import BookList from './../pages/BookList';
import Book from '../pages/Book';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/books',
      children: [
        { index: true, element: <BookList /> },
        { path: ':id', element: <Book /> },
      ],
    },
  ]);
  return element;
}
