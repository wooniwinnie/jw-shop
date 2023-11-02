import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Learnmore from './pages/Learnmore';
import Shirts from './pages/Shirts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: '/shop', element: <Shop /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
        ],
    },
    {
        path: '/learnmore',
        element: <Learnmore />,
    },
    {
        path: '/shop/shirts',
        element: <Shirts />,
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
export default App;
