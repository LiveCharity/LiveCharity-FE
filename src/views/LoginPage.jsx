import "./LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate()
  const handleToRegister = (e) => {
    e.preventDefault()
    navigate('/register')
  }

  return (
    <>
    <div className="outer-container">
      <div className="container login-container align-items-center">
        <div className="container ">
          <div className="row login-slice">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="text-center img-login">
                <img
                  src="https://media.discordapp.net/attachments/1146322744103944252/1174652092745527336/LIVE_CHARITY_Logo_-_Original_-_5000x5000_1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="login-form col-12 col-sm-12 col-md-12 col-lg-6 my-auto">
              <div className="text-center">
              <h5 style={{color:"#196898"}}>Welcome to Live Charity</h5>
                <h5 style={{color:"#79C01D"}}>Make a World Better, Start With Us</h5>
                <h5 style={{color:"#196898"}}>Login</h5>
              </div>
              <Form style={{ width: "70%" }} className="mx-auto">
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                  <Form.Text className="text-muted">
                    Don't have an account? Register first
                  </Form.Text>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
