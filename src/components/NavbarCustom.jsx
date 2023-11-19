import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.png';

import { balance } from '../api/walletAPI';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavbarCustom() {
  const navigation = useNavigate();
  const [isBalance, setIsBalance] = useState(null);
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
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{boxSizing: 'border-box', height: '70px'}}>
      <Container>
        <Navbar.Brand onClick={() => navigation('/')}>
          <img
            src="https://i.imgur.com/C0VvbBm.png"
            alt="Logo"
            style={{ maxHeight: '4em', cursor: 'pointer' }}
            className="d-inline-block align-top"
          />
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
