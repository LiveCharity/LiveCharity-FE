import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CampaignCard() {

    const navigate = useNavigate()
    const handleDetailCampaign = (e) => {
        e.preventDefault()
        navigate(`/detail`)
    }

  return (
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src="https://70867a2ef4c36f4d1885-185a360f54556c7e8b9c7a9b6e422c6e.ssl.cf6.rackcdn.com/picture/campaign/2023-11-13/P8Qz5AHb2URH.jpg" />
      <Card.Body>
        <Card.Title>Kebagian bersama untuk Gaza</Card.Title>
        <Card.Text style={{fontSize:10}}>
          Creator LiveCharity
        </Card.Text>
        <Card.Text style={{fontSize:10}}>
          Terkumpul Rp.100.000.000 dari Rp.200.000.000
        </Card.Text>
        <Button onClick={handleDetailCampaign} variant="primary" className='w-100'>See Campaign</Button>
      </Card.Body>
    </Card>
  );
}

export default CampaignCard;