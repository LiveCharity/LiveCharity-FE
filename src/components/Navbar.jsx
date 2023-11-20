import { Link } from 'react-router-dom';

import { useActionUser } from '../../hooks/useActionUser';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarCustom() {
  const [state, handleRedirect] = useActionUser();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
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
            <NavDropdown title="Balance" className={!localStorage.access_token ? 'd-none' : ''}>
              <NavDropdown.Item>Balance {state}</NavDropdown.Item>
              <NavDropdown.Item>
                <button className="btn btn-outline-primary" onClick={() => handleRedirect('/payment/topup')}>
                  TOP UP
                </button>
              </NavDropdown.Item>
            </NavDropdown>
            <button type="button" className="btn btn-outline-primary" onClick={() => handleRedirect()}>
              {localStorage.access_token ? 'Logout' : 'Login'}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
