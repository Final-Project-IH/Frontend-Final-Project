// import React, { useContext } from "react";
// import AuthContext from "../../../contexts/Auth.context";
// import { useEffect } from "react";
// import { getMyFavs } from "../../../services/User.service";
// import ProductList from "../../../components/Products/ProductList";
// import { useState } from "react";
// import ProductCard from "../../../components/Products/ProductCard";

// const MyFavsInitial = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [favs, setFavs] = useState([]);

//   useEffect(() => {
//     getMyFavs().then((favorites) => {
//       setFavs(favorites);
//     });
//   });

//   return (
//     <div>
//         {currentUser ? 
//             <div>
//             {favs.map((fav) => {
//               <div key={fav._id} className="col mb-3">
//               <ProductCard product={fav.auction.product} auction={fav.auction} />
//               </div>;
//             })}
//           </div>
//           :
//           <h1></h1>
//         }
//     </div>

//   );
// };

// export default MyFavsInitial;
