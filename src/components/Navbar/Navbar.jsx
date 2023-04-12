import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/Auth.context";
import { logout } from "../../stores/AccessTokenStore";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

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
              <li className="nav-item">
                <button onClick={logoutUser}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
