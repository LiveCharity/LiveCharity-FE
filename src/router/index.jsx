import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello From Home</h1>
  },
  {
    path: '/about',
    element: <h1>About page</h1>
  }
]);

export default router;