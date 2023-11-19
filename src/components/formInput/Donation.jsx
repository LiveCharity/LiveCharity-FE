import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { amounts } from '../../../data';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Donation.css';
function Donation() {
  const { pathname } = useLocation();
  const [amount, setAmount] = useState(0);

  const getToken = async () => {
    try {
      const { data: token } = await axios.get('http://localhost:80/payment/get-token-midtrans', {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      console.log(token);
      return token;
    } catch (err) {
      console.log(err);
    }
  };

  const payment = async () => {
    const token = await getToken();
    window.snap.pay(token.midtrans_token, {
      onSuccess: function (result) {
        /* You may add your own implementation here */
        alert('payment success!');
        console.log(result);
      },
      onPending: function (result) {
        /* You may add your own implementation here */
        alert('wating your payment!');
        console.log(result);
      },
      onError: function (result) {
        /* You may add your own implementation here */
        alert('payment failed!');
        console.log(result);
      },
      onClose: function () {
        /* You may add your own implementation here */
        alert('you closed the popup without finishing the payment');
      },
    });
  };

  const handleDonate = (amount) => {
    setAmount(Number(amount.split('Rp.').join('').split('.').join('')));
  };

  const otherNominal = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    payment();
    console.log(amount);
  };

  return (
    <Form style={{ width: '40%' }} className="mx-auto mt-5 form-donate" onSubmit={handleSubmit}>
      <div style={{ textAlign: 'center' }}>
        <h6 style={{ fontWeight: 'bold' }}>{pathname === '/payment/topup' ? 'Choose to topup' : 'Choose to Donate'}</h6>
      </div>
      <div className="form-group">
        <ul className="d-flex justify-content-center flex-wrap gap-3">
          {amounts.map((item, index) => {
            return (
              <li key={index}>
                <div
                  onClick={() => {
                    handleDonate(item.amount);
                  }}
                  className="d-flex justify-content-center align-items-center gap-3"
                >
                  <i className={item.icon} style={{ fontSize: '2rem' }}></i>
                  <span>{item.amount}</span>
                  <i className="bi bi-caret-right-fill" style={{ fontSize: '1rem' }}></i>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <Form.Group className="mb-3">
        <Form.Label style={{ fontWeight: 'bold' }}>Other Nominal</Form.Label>
        <div className="d-flex gap-2">
          <span className="my-auto" style={{ fontWeight: 'bold' }}>
            Rp
          </span>
          <Form.Control
            type="text"
            placeholder="Enter number"
            pattern="[0-9]*"
            value={amount}
            onChange={otherNominal}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value) || 0)
                .toString()
                .slice(0, 10);
            }}
            style={{ background: '#eee' }}
          />
        </div>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="success" type="submit">
          {pathname === '/payment/topup' ? 'Topup' : 'Donate'}
        </Button>
      </div>
    </Form>
  );
}

export default Donation;
