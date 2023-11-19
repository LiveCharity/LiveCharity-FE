// import './LoginPage.css';
import './Login.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginAPI } from '../api/userAPI';

export default function LoginPage() {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const handlerUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleToRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginAPI(userInput);
    // navigate('/');
  };

  return (
    <>
      <section className="login">
        <div className="left-section">
          <img src="/lc.png" alt="Logo" />
        </div>
        <div className="right-section">
          <div className="wrapper">
            <h1>Welcome to Live Charity</h1>
            <h1>Make a World Better, Start with us</h1>
            <h2>Login</h2>
            <Form style={{ width: '70%' }} className="mx-auto" onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="text" placeholder="Enter Email" onChange={handlerUserInput} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={handlerUserInput}
                />
                <Form.Text className="text-muted">Don't have an account? Register first</Form.Text>
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button variant="outline-primary" type="submit">
                  Login
                </Button>
                <Button onClick={handleToRegister} variant="outline-primary" type="submit">
                  Register
                </Button>
              </div>
            </Form>
            <p>
              Don't have an account? <span onClick={handleToRegister}>Register here</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
