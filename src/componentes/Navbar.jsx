import "../assets/css/navbar.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : 'undefined');

  return (
    <div className="navbar">
      <div className="map">
        <i className="fa-map-marker-alt"></i>
      </div>
      <div className="navlink">
        <NavLink end className={setActiveClass} to="/" > Home </NavLink>
      </div>
      <div>
        <NavLink end className={setActiveClass} to="/pokemones"> Pokemones </NavLink>
      </div>
    </div>
  );
}
