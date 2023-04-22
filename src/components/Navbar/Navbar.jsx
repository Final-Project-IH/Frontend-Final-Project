import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/Auth.context";
import { logout } from "../../stores/AccessTokenStore";
import NotificationContext from "../../contexts/Notification.context";
import Notification from "../misc/Notification/Notification";
import "./Navbar.css";
import logo from "../../assets/images/goldfishlogo.png";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { notifications } = useContext(NotificationContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
  };
  const goToCreate = () => {
    navigate("/new-product");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className="over-nav d-flex justify-content-center">
        <h3 className="new-arrivals">NEW ARRIVALS</h3>
        <p className="stuff ml-3 mt-1 mr-3">View Home and more stuff</p>
        <h3 className="new-arrivals">NEW ARRIVALS</h3>
      </div>
      <nav className="navbar navbar-light shadow-sm">
        <Link to="/">
          <img
            className="ml-5"
            src={logo}
            style={{ width: "150px" }}
            alt="Bootstrap"
          />
        </Link>

        <div className="d-flex justify-content-end">
          {!currentUser && (
            <>
              <button className="nav-btn" onClick={goToRegister}>
                Register
              </button>
              <button className="nav-btn" onClick={goToLogin}>
                Login
              </button>
            </>
          )}
          {currentUser && (
            <>
              <span className="navbar-brand mr-5">
                <Notification />
              </span>
              <Link to="/users/me" className="link ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  fill="currentColor"
                  className="bi bi-person-square mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                </svg>
              </Link>
              <button className="nav-create mt-2" onClick={goToCreate}>
                Create a new Auction
              </button>
              <button className="nav-btn mt-2" onClick={logoutUser}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
