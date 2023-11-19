import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Learnmore from './pages/Learnmore';
import Shirts from './pages/Shirts';
import ShirtsDetail from './pages/ShirtsDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            {
                path: '/shirts',
                element: <Shirts />,
            },
            {
                path: '/shirts/:shirtsId',
                element: <ShirtsDetail />,
            },
        ],
    },
    {
        path: '/learnmore',
        element: <Learnmore />,
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
export default App;
