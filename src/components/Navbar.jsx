import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.png';

import { Link, useNavigate } from 'react-router-dom';
import { balance } from '../api/walletAPI';
import { useEffect, useState } from 'react';

import { handleLogout } from '../../helpers/function';

function NavbarCustom() {
  const [isBalance, setIsBalance] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    balance().then((result) => {
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      });
      setIsBalance(formatter.format(result));
    });
  }, []);

  // const handleLogout = () => {
  //   localStorage.clear();
  //   navigate('/login');
  // };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/">
            <img
              src="https://media.discordapp.net/attachments/1146322744103944252/1174652092745527336/LIVE_CHARITY_Logo_-_Original_-_5000x5000_1.png"
              alt="Logo"
              style={{ maxHeight: '4em' }}
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Fundraiser</Nav.Link>
            <Nav.Link href="#home">Donation</Nav.Link>
            <NavDropdown title="Balance" id="basic-nav-dropdown">
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">Balance {isBalance}</NavDropdown.Item>
            </NavDropdown>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
