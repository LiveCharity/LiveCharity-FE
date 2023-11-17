import { useState } from 'react';
import './RegisterPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const handlerUserInput = (e) => {
    console.log(e.target.value);
  };

  const handleToLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <div className="outer-container">
        <div className="container register-container align-items-center">
          <div className="container ">
            <div className="row register-slice">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="text-center img-register">
                  <img
                    src="https://media.discordapp.net/attachments/1146322744103944252/1174652092745527336/LIVE_CHARITY_Logo_-_Original_-_5000x5000_1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="register-form col-12 col-sm-12 col-md-12 col-lg-6 my-auto">
                <div className="text-center">
                  <h5 style={{ color: '#196898' }}>Welcome to Live Charity</h5>
                  <h5 style={{ color: '#79C01D' }}>Make a World Better, Start With Us</h5>
                  <h5 style={{ color: '#196898' }}>Register</h5>
                </div>
                <Form style={{ width: '70%' }} className="mx-auto">
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                    <Form.Text className="text-muted">
                      Already have an account? Back to{' '}
                      <a href="" className="icon-link" onClick={handleToLogin}>
                        Login
                      </a>
                    </Form.Text>
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button variant="outline-primary" type="submit">
                      Create Accout
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
