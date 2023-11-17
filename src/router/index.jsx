import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';
import LivestreamPage from '../views/LivestreamPage';
import CampaignPage from '../views/CampaignPage';
import CampaignDetailPage from '../views/CampaignDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CampaignPage />,
  },

  {
    path: '/livestream',
    element: <LivestreamPage />,
  },

  {
    path: '/detail',
    element: <CampaignDetailPage />,
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
