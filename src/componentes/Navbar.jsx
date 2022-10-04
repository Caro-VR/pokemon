import "../assets/css/navbar.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : 'undefined');

  return (
    <div className="navbar1">
      <div className="pokebola">
        <img className="imagen" src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png" alt="" />
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
