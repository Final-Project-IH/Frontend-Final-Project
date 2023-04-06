import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <NavLink className="navbar-brand" to='/'>
                Home
         </NavLink>
        <li className="nav-item">
        <NavLink className="nav-item" to='/login'>
                Login
         </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar

