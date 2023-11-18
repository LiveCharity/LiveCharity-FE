import NavbarPage from '../Navbar';
import { Outlet } from 'react-router-dom';

export default function LayoutHome() {
  return (
    <>
      <NavbarPage />
      <Outlet />
    </>
  );
}
