import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Donation.css"

function Donation() {
  

  return (
    <Form style={{ width: "40%" }} className="mx-auto mt-5 form-donate">
      <div style={{textAlign:"center"}}>
        <h6 style={{fontWeight:"bold"}}>Choose to Donate</h6>
      </div>
      <div className="form-group">
        <ul className="d-flex justify-content-center flex-wrap gap-3">
          <li>
            <div className="d-flex justify-content-center align-items-center gap-3">
          <i class="bi bi-cash-stack text-warning" style={{ fontSize: '2rem' }}></i><span>Rp. 20.000</span><i class="bi bi-caret-right-fill" style={{ fontSize: '1rem' }}></i>
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-center align-items-center gap-3">
          <i class="bi bi-cash-stack text-primary" style={{ fontSize: '2rem' }}></i><span>Rp. 40.000</span><i class="bi bi-caret-right-fill" style={{ fontSize: '1rem' }}></i>
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-center align-items-center gap-3">
          <i class="bi bi-cash-stack text-info" style={{ fontSize: '2rem' }}></i><span>Rp. 50.000</span><i class="bi bi-caret-right-fill" style={{ fontSize: '1rem' }}></i>
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-center align-items-center gap-3">
          <i class="bi bi-cash-stack text-danger" style={{ fontSize: '2rem' }}></i><span>Rp. 100.000</span><i class="bi bi-caret-right-fill" style={{ fontSize: '1rem' }}></i>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight:"bold"}}>Other Nominal</Form.Label>
        <div className="d-flex gap-2">
        <span className="my-auto" style={{fontWeight:"bold"}}>Rp</span>
        <Form.Control
          type="text"
          placeholder="Enter number"
          pattern="[0-9]*"
            onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value) || 0).toString().slice(0, 10);
            }}
          style={{background:"#eee"}}
        />
        </div>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="success" type="submit">
          Donate
        </Button>
      </div>
    </Form>
  );
}

export default Donation;
