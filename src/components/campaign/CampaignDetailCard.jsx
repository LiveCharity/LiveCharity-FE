import "./CampaignDetailCard.css";

export default function CampaignDetailCard() {
  return (
    <>
      <div className="donator-card d-flex flex-column mt-3">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            alt=""
          />
          &nbsp;
          <span>Hamba Tuhan</span>
        </div>
        <span style={{fontSize:13}}>2 Days ago</span>
        <span>Donation Rp. 500.000</span>
        <span style={{fontSize:13}}>Cepat Sembuh sehat selalu</span>
        <br />
      </div>
    </>
  );
}
