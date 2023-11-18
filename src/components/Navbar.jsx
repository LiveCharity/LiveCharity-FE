import Logo from '../assets/Logo.png';
import './Navbar.css';

export default function NavbarPage() {
  return (
    <div className="navbar_container">
      <div>
        <img src={Logo} height={60} />
      </div>
      <div className="navbar_menu">
        <ul className="navbar_menu-list">
          <li>Galang dana</li>
          <li>List Galang dana</li>
        </ul>
      </div>
      <div>
        <div className="navbar_topup">
          {/* <button className="button_topup">SIGN</button> */}
          <button className="button_topup">TOP UP</button>
          <div>
            <span style={{ display: 'block', color: '#565151', fontWeight: 700, lineHeight: 0, marginTop: '10px' }}>
              Balance{' '}
            </span>
            <span style={{ fontSize: '10px' }}>RP 100.000.000</span>
          </div>
          <button className="button_topup">LOGOUT</button>
        </div>
      </div>
    </div>
  );
}
