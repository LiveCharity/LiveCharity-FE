import { RouterProvider } from 'react-router-dom';
// import { Provider as ReduxProvider } from 'react-redux';
import router from './router';
// import store from './store';

function App() {
  return (
    <RouterProvider router={router} />
    // <ReduxProvider store={store}>
    // </ReduxProvider>
  )
}

export default App
