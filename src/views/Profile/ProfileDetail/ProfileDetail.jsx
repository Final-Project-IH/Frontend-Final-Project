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

        // const uniqueAuctions = [];
        // auctionArr.forEach(auction => {
        //   if (!uniqueAuctions.includes(auction)) {
        //     uniqueAuctions.push(auction);
        //   }
        // });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getMyFavs()
      .then((favs) => {
        setLoading(false);
        const auctionArr = favs.map((fav) => fav.auction);
        let auctionsSlice = auctionArr.slice(0, 4);
        setMyFavs(auctionsSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   getMyWinnedAuct()
  //     .then((auctions) => {
  //       setLoading(false); 

  //       if(auctions.bids.length > 0){
  //         const mappedAuction = auctions.map((auction)=>{
  //           auction?.bids?.offer.sort((a,b)=> b - a)
  //         })
  //         setMyWinnedAuct(mappedAuction);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log("mapped", myWinnedAuct )

  return (
    <div>
      {currentUser ? (
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
            <div className="d-flex justify-content-between m-4">
              <h1 className="mt-3">My Auctions</h1>
              <Link
                to={"******************"}
                style={{ textDecoration: "none" }}
              >
                <p>See All</p>
              </Link>
            </div>
            <ProductList auctions={ownAuctions} />
            <div className="d-flex justify-content-between m-4">
              <h1>My Bids</h1>
              <Link
                to={"*******************"}
                style={{ textDecoration: "none" }}
              >
                <p>See All</p>
              </Link>
            </div>
            <ProductList auctions={myBidsAuctions} />
            <div className="d-flex justify-content-between m-4">
              <h1>My Favs</h1>
              <Link
                to={"******************"}
                style={{ textDecoration: "none" }}
              >
                <p>See All</p>
              </Link>
            </div>
            <ProductList auctions={myFavs} />
          </div>
        </div>
      ) : (
        <p>Loading Profile...</p>
      )}
    </div>
  );
};

export default ProfileDetail;
