import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../components/campaign/CarouselImage';
import './CampaignPage.css';
import CampaignCard from '../components/campaign/CampaignCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { campaignFetch } from '../store/actions/actionsCampaign';
import { useNavigate } from 'react-router-dom';

export default function CampaignPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const campaignData = useSelector((state) => {
    return state.campaignReducer.campaign;
  });
  // const displayedData = dataCampaign.slice(0, 3);
  // const displayedData2 = dataCampaign.slice(3, 6);

  useEffect(() => {
    dispatch(campaignFetch()).then(() => {
      console.log('FETCH BERHASIL DARI CAMPAIGN PAGE');
    });
  }, []);

  const handleToList = (e) => {
    e.preventDefault();
    navigate('/listcampaign');
  };

  return (
    <div className="campaign-container">
      <div className="container">
        <div className="continer mt-5">
          <Carousel data-bs-theme="light">
            <Carousel.Item>
              <CarouselImage
                imageSrc={
                  'https://70867a2ef4c36f4d1885-185a360f54556c7e8b9c7a9b6e422c6e.ssl.cf6.rackcdn.com/file/2023-01-16/e5Er8Mco871r.jpg'
                }
              />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImage
                imageSrc={
                  'https://70867a2ef4c36f4d1885-185a360f54556c7e8b9c7a9b6e422c6e.ssl.cf6.rackcdn.com/file/2023-11-08/A4NDkT9yEgYa.jpg'
                }
              />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImage
                imageSrc={
                  'https://70867a2ef4c36f4d1885-185a360f54556c7e8b9c7a9b6e422c6e.ssl.cf6.rackcdn.com/file/2023-02-14/kZtCJjkEyOrI.jpg'
                }
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {campaignData
          ? campaignData.map((campaign) => {
              return campaign.Livestreams.length !== 0 ? (
                <div className="continer" key={campaign.id}>
                  <div className="card-campaign  mt-5">
                    <div className="d-flex justify-content-between">
                      <h4>{campaign.name}</h4>
                      <button type="button" className="btn btn-outline-primary" onClick={handleToList}>
                        See More
                      </button>
                    </div>
                    <div className="flex-row d-flex justify-content-center gap-5 mt-3">
                      {campaign.Livestreams.slice(0, 3).map((campaign) => {
                        return <CampaignCard key={campaign.id} campaign={campaign} />;
                      })}
                    </div>
                  </div>
                </div>
              ) : null;
            })
          : null}
      </div>
    </div>
  );
}
