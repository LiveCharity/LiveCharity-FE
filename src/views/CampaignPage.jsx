import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../components/campaign/CarouselImage";
import "./CampaignPage.css";
import CampaignCard from "../components/campaign/CampaignCard";

export default function CampaignPage() {
  return (
    <>
      <div className="container">
        <div className="continer mt-5">
          <Carousel data-bs-theme="light">
            <Carousel.Item>
              <CarouselImage
                imageSrc={
                  "https://70867a2ef4c36f4d1885-185a360f54556c7e8b9c7a9b6e422c6e.ssl.cf6.rackcdn.com/file/2023-01-16/e5Er8Mco871r.jpg"
                }
              />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImage
                imageSrc={
                  "https://70867a2ef4c36f4d1885-185a360f54556c7e8b9c7a9b6e422c6e.ssl.cf6.rackcdn.com/file/2023-11-08/A4NDkT9yEgYa.jpg"
                }
              />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImage
                imageSrc={
                  "https://70867a2ef4c36f4d1885-185a360f54556c7e8b9c7a9b6e422c6e.ssl.cf6.rackcdn.com/file/2023-02-14/kZtCJjkEyOrI.jpg"
                }
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="continer">
          <div className="card-campaign  mt-5">
            <div className="d-flex justify-content-between">
              <h4>Campaign Pilihan</h4>
              <button type="button" class="btn btn-outline-primary">
                See More
              </button>
            </div>
            <div className="flex-row d-flex justify-content-center gap-5 mt-3">
              <CampaignCard />
              <CampaignCard />
              <CampaignCard />
            </div>
          </div>
        </div>
        <div className="continer">
          <div className="card-campaign  mt-5">
            <div className="d-flex justify-content-between">
              <h4>Campaign Pilihan</h4>
              <button type="button" class="btn btn-outline-primary">
                See More
              </button>
            </div>
            <div className="flex-row d-flex justify-content-center gap-5 mt-3">
              <CampaignCard />
              <CampaignCard />
              <CampaignCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
