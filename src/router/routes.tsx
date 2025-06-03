import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/home';
import { About } from '../pages/About/about';
import { Services } from '../pages/services/services';
import { Contact } from '../pages/Contact/contact';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/Quem-somos', element: <About /> },
      { path: '/servicos', element: <Services /> },
      { path: '/contatos', element: <Contact /> },
    ],
  },
]);
