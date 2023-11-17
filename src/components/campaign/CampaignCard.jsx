import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CampaignCard({campaign}) {

    const navigate = useNavigate()
    const handleDetailCampaign = (e) => {
        e.preventDefault()
        navigate(`/detail`)
    }

    const formatCurrency = (amount) => {
        const formatter = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        });
      
        return formatter.format(amount);
      };

    useEffect(() => {
       console.log(campaign) 
    },[])

  return (
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={campaign?.thumbnail} />
      <Card.Body>
        <Card.Title>{campaign?.title}</Card.Title>
        <Card.Text style={{fontSize:10}}>
          Creator LiveCharity
        </Card.Text>
        <Card.Text style={{fontSize:10}}>
          Terkumpul {formatCurrency(campaign?.currentFunds)} dari {formatCurrency(campaign?.targetFunds)}
        </Card.Text>
        <Button onClick={handleDetailCampaign} variant="primary" className='w-100'>See Campaign</Button>
      </Card.Body>
    </Card>
  );
}

export default CampaignCard;