import FooterCustom from '../FooterCustom';
import NavbarCustom from '../NavbarCustom';
import { Outlet } from 'react-router-dom';

export default function LayoutHome() {
  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
      <NavbarCustom />
      <div style={{flexGrow:1}}>
      <Outlet />
      </div>
      <FooterCustom />
    </div>
  );
}
