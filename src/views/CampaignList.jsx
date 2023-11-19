import CampaignListCard from "../components/campaign/CampaignListCard";
import "./CampaignList.css"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { campaignFetch } from '../store/actions/actionsCampaign';

export default function CampaignList(){

    const dispatch = useDispatch();

    const dataCampaign = useSelector((state) => {
    console.log(state, 'ini dari LISTTTTTT ANJAY');
    return state.campaignReducer.campaign;
  });

    useEffect(() => {
        dispatch(campaignFetch()).then(() => {
        console.log('FETCH BERHASIL DARI CAMPAIGN PAGE');
        });
    }, []);


    return <>
    <div className="container">
        <div className="row">
            <div className="col-md-2 mt-5">
                <nav className="menubar">
                    <ul>
                        <li>
                            <span style={{fontWeight:"bold"}}>Category</span>
                        </li>
                        <ul className="sub-menu">
                            <li>
                            <input type="radio" name="category"/>
                            <span>Bencana</span>
                            </li>
                            <li>
                            <input type="radio" name="category"/>
                            <span>Sosial</span>
                            </li>
                            <li>
                            <input type="radio" name="category"/>
                            <span>Pendidikan</span>
                            </li>
                            <li>
                            <input type="radio" name="category"/>
                            <span>Kesehatan</span>
                            </li>
                        </ul>
                    </ul>
                </nav>
                <div>
                <button type="submit" className="btn btn-outline-primary btn-block w-100">Apply</button>
                </div>
            </div>
            <div className="col-md-10">
                <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
                {dataCampaign.map((campaign) => {
                    return <CampaignListCard campaign={campaign} key={campaign.id}/>
                })}   
                </div>
            </div>
        </div>
    </div>
    </>
}