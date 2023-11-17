import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../views/HomePage';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';
import LivestreamPage from '../views/LivestreamPage';

import TopUpModal from '../components/modal/TopUpModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TopUpModal />,
  },

  {
    path: '/livestream',
    element: <LivestreamPage />,
  },

  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

export default router;
