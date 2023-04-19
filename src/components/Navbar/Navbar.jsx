import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/Auth.context";
import { logout } from "../../stores/AccessTokenStore";
import NotificationContext from "../../contexts/Notification.context";
import Notification from "../misc/Notification/Notification";
import "./Navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { notifications } = useContext(NotificationContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
  };
  const goToProfile = () => {
    navigate("/users/me");
  };

  return (
    // <nav >
    //   <div className="container-fluid">
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul >
    //         <NavLink className="navbar-brand" to="/">
    //           Home
    //         </NavLink>
    //         {!currentUser && (
    //           <li className="nav-item">
    //             <NavLink className="nav-item" to="/login">
    //               Login
    //             </NavLink>
    //           </li>
    //         )}
    //         {currentUser && (
    //           <>
    //             <li className="nav-item">
    //               <Notification />
    //             </li>
    //             <li className="nav-item">
    //               <button onClick={logoutUser}>Logout</button>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="#">Navbar</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item active">
    //       <NavLink className="navbar-brand" to="/">
    //             Home
    //      </NavLink>
    //       </li>
    //       <li className="nav-item">
    //       {!currentUser && (
    //        <li className="nav-item">
    //               <NavLink className="navbar-brand" to="/login">
    //                 Login
    //               </NavLink>
    //              </li>
    //          )}
    //       </li>
    //       {currentUser && (
    //        <>
    //                <li className="navbar-brand">
    //                  <button onClick={logoutUser}>Logout</button>
    //                </li>
    //                <li className="navbar-brand">
    //                  <Notification />
    //                </li>
    //              </>
    //            )}
    //          </ul>

    //     {/* <form className="form-inline my-2 my-lg-0">
    //       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    //       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //     </form> */}
    //   </div>
    // </nav>

    <nav class="navbar navbar-light shadow-sm">
      <a class="navbar-brand" href="/">
        <img src="/" alt="Bootstrap" />
      </a>

      <div class="d-flex justify-content-end">
        {!currentUser && (
          <button className="nav-item">
            <NavLink className="navbar-brand" to="/login">
              Login
            </NavLink>
          </button>
        )}
        {currentUser && (
          <>
            <span className="navbar-brand mr-5">
              <Notification />
            </span>
            <button className="nav-btn" onClick={goToProfile}>
              Profile
            </button>
            <button className="nav-btn" onClick={logoutUser}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
