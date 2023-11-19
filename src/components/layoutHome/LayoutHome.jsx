import FooterCus from '../FooterCus';
import NavbarPage from '../Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function LayoutHome() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ToastContainer />
      <NavbarPage />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <FooterCus />
    </div>
  );
}
