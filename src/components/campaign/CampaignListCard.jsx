import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./CampaignListCard.css"

function CampaignListCard({campaign}) {


const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    });
    return formatter.format(amount);
    };

    const calculateProgress = () => {
        return Math.min((campaign.currentFunds / campaign.targetFunds) * 100, 100);
      };

  return (
    <Card className="Card" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={campaign?.thumbnail} style={{ height: '15em' }} />
      <Card.Body>
        <Card.Title>{campaign?.title}</Card.Title>
        <Card.Text style={{fontSize:"10px"}}>
        Funds collected were {formatCurrency(campaign?.currentFunds)} from total funds {formatCurrency(campaign?.targetFunds)}
        </Card.Text>
        <ProgressBar animated striped variant="danger" now={calculateProgress()} />
        <Card.Text style={{fontSize:10}}>
          Creator LiveCharity
        </Card.Text>
        <Button variant="success" className='w-100'>Donate</Button>
      </Card.Body>
    </Card>
  );
}

export default CampaignListCard;