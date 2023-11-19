import FooterCus from '../FooterCus';
import NavbarPage from '../Navbar';
import { Outlet } from 'react-router-dom';

export default function LayoutHome() {
  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
      <NavbarPage />
      <div style={{flexGrow:1}}>
      <Outlet />
      </div>
      <FooterCus />
    </div>
  );
}
