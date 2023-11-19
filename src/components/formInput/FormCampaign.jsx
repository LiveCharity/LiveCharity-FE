import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./FormCampaign.css";

function FormCampaign() {
  return (
    <div className="container">
      <Form className="w-50 mx-auto mt-5 form-campaign">
        <h2 style={{ textAlign: "center" }}>Add New Campaign</h2>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Target Funds</Form.Label>
          <Form.Control type="number" placeholder="Target Funds" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Expired Date</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Thumbnail</Form.Label>
          <Form.Control type="file"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <FloatingLabel controlId="floatingSelect" label="Choose Category">
            <Form.Select aria-label="Floating label select example">
              <option value="Disaster">Disaster</option>
              <option value="Social">Social</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Form.Group>
        <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit">
          Start Campaign
        </Button>
      </div>
      </Form>
    </div>
  );
}

export default FormCampaign;
