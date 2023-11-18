import { useState } from 'react';
import './CampaignDetailPage.css';
import CampaignDetailCard from '../components/campaign/CampaignDetailCard';

export default function CampaignDetailPage() {
  const initialCardCount = 6; // Number of cards to display initially
  const [visibleCardCount, setVisibleCardCount] = useState(initialCardCount);
  const totalCardCount = 20; // Total number of cards

  const handleSeeMore = () => {
    // Increase the visible card count by a certain number when "See More" is clicked
    const incrementBy = 6; // You can adjust this value based on your preference
    setVisibleCardCount((prevCount) => prevCount + incrementBy);
  };
  return (
    <>
      <div className="campaign-container">
        <div className="container mt-5">
          <div className="container row">
            <div className="col-md-12 my-2">
              <h5>#ayo bantu wakwaw</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="image-campaign mx-auto">
                <img src="https://asset.ayobantu.com/campaign/HAzeABCB2G_1692847830.jpg" alt="" />
              </div>
              <div className="description-campaign mt-5 p-3">
                <h5 style={{ textAlign: 'center' }}>Description</h5>
                <hr />
                <p style={{ textAlign: 'justify' }}>
                  #bantumakan adalah kegiatan kemanusiaan untuk membagikan makanan berupa nasi bungkus kepada saudara
                  kita yang kelaparan akibat pandemi COVID-19 Walaupun kita sudah memasuki era new normal, bukan berarti
                  pandemi telah usai, banyak saudara-saudara kita yang saat ini masih kesulitan untuk memenuhi kebutuhan
                  sehari-hari. Jangan sampai kita berhenti bergerak dalam membantu saudara-saudara kita di masa pandemi
                  ini. Tidak ada kata terlambat untuk saling membantu satu sama lain. Sekecil apapun bantuanmu, akan
                  berdampak besar bagi mereka. #AyoBantu dukung dan berdonasi supaya tercapai 1000 nasi bungkus untuk
                  dibagikan kepada mereka yang membutuhkan uluran tangan kita! 1000 nasi bungkus ini akan disalurkan ke
                  berbagai daerah dengan angka terdampak covid-19 yang masih tinggi.
                </p>
              </div>
              <div className="donator-campaign mt-5 p-3">
                <h5 style={{ textAlign: 'center' }}>Thanks for Charity</h5>
                <hr />
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                  {[...Array(visibleCardCount)].map((_, index) => (
                    <CampaignDetailCard key={index} />
                  ))}
                  {visibleCardCount < totalCardCount && (
                    <div className="text-center mt-3">
                      <button className="btn btn-outline-primary" onClick={handleSeeMore}>
                        See More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 detail-right p-3">
              <b>Funds collected</b>
              <h3 className="text-primary">Rp 41.638.203</h3>
              <h5 style={{ fontSize: 13 }}>Fundraising target Rp.100.000.000</h5>
              <div className="d-flex flex-column mb-3 gap-3">
                <h5 style={{ fontSize: 15, textAlign: 'center' }}>Be a good person, do what you want!</h5>
                <button type="button" className="btn btn-outline-danger mx-1">
                  Start Live
                </button>
                <button type="button" className="btn btn-outline-warning mx-1">
                  Join Room
                </button>
                <button type="button" className="btn btn-outline-success mx-1">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
