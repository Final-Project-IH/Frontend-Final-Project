import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/Auth.context";
import { logout } from "../../stores/AccessTokenStore";
import NotificationContext from "../../contexts/Notification.context";
import Notification from "../misc/Notification/Notification";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { notifications } = useContext(NotificationContext)

  console.log(notifications)

  const logoutUser = () => {
    logout();
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="navbar-brand" to="/">
              Home
            </NavLink>
            {!currentUser && (
              <li className="nav-item">
                <NavLink className="nav-item" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            {currentUser && (
              <>
                <li className="nav-item">
                  <Notification />
                </li>
                <li className="nav-item">
                  <button onClick={logoutUser}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
