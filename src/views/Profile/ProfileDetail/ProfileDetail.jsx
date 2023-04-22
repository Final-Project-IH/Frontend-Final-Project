import React, { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/Auth.context";
import "./ProfileDetail.css";
import ProductList from "../../../components/Products/ProductList";
import {
  getMyBids,
  getMyFavs,
  getMyOwnAuctions,
  getMyWinnedAuct,
} from "../../../services/User.service";
import { Link, useNavigate } from "react-router-dom";

const ProfileDetail = () => {
  const { currentUser } = useContext(AuthContext);
  const [ownAuctions, setOwnAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myBidsAuctions, setMyBidsAuctions] = useState([]);
  const [myFavs, setMyFavs] = useState([]);
  const [myWinnedAuct, setMyWinnedAuct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMyOwnAuctions()
      .then((auctions) => {
        let auctionsSlice = auctions.slice(0, 4);
        setLoading(false);
        setOwnAuctions(auctionsSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getMyBids()
      .then((bids) => {
        setLoading(false);
        const auctionArr = bids.map((bid) => bid.auction);
        let auctionsSlice = auctionArr.reverse().slice(0, 4);
        setMyBidsAuctions(auctionsSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getMyFavs()
      .then((favs) => {
        setLoading(false);
        const auctionArr = favs.map((fav) => fav.auction);
        let auctionsSlice = auctionArr.slice(0, 5);
        setMyFavs(auctionsSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getMyWinnedAuct()
      .then((auctions) => {
        for (let auction of auctions) {
          auction.bids.sort((a, b) => b.offer - a.offer);
        }
        const filteredAuctions = auctions?.filter(
          (auction) => auction?.bids[0]?.bidder?.id === currentUser?.id
        );

        setMyWinnedAuct(filteredAuctions);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("ganadas", myWinnedAuct)
  console.log("currentuser", currentUser)
  return (
    <div>
      {currentUser && !loading ? (
        <div className="ml-3">
          <div className="d-flex">
            <div className="d-flex flex-column">
              <img className="user-image" src={currentUser.image}></img>
            </div>
            <div className="profile-info d-flex flex-column mx-5 align-items-center">
              <h4>{currentUser.username}</h4>
              {currentUser.bio ? (
                <p>{currentUser.bio}</p>
              ) : (
                <p>Write something about you...</p>
              )}
            </div>
            <div className="d-flex align-items-end">
              <Link to="/users/me/edit-profile">
                <button className="btn-edit bi bi-pencil"></button>
              </Link>
            </div>
          </div>
          <div>
            <hr></hr>
            <div className="d-flex justify-content-between">
              <h4 className="ml-3">My Auctions</h4>
            </div>
            <ProductList auctions={ownAuctions} />
            <hr></hr>
            <div className="d-flex justify-content-between m-4">
              <h3 className="mt-4 ml-4">My Bids</h3>
            </div>
            <ProductList auctions={myBidsAuctions} />
            <hr></hr>
            <div className="d-flex justify-content-between m-4">
              <h3 className="mt-4 ml-4">My Favs</h3>
            </div>
            <ProductList auctions={myFavs} />
            <hr></hr>
            <div className="d-flex justify-content-between m-4">
              <h3 className="mt-4 ml-4">My Winned Auctions</h3>
            </div>
            {myWinnedAuct.length > 0 ? (
              <ProductList auctions={myWinnedAuct} />
            ) : (
              <p className="mb-4">No auctions won yet.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading Profile...</p>
      )}
    </div>
  );
};

export default ProfileDetail;
