import React from "react";
import Logo from "../../public/Logo.svg";
import { NavLink, Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav'>
          <img src={Logo} alt='Logo' />
          <div className='nav__list'>
            <NavLink className='text-decoration-none d-block'>Shop</NavLink>
            <NavLink className='text-decoration-none d-block'>About Us</NavLink>
            <NavLink className='text-decoration-none d-block'>Our team</NavLink>
            <NavLink className='text-decoration-none d-block'>
              Buyer's guides
            </NavLink>
            <NavLink className='text-decoration-none d-block'>
              Categories
            </NavLink>
          </div>
          <div className='nav__link'>
            <Link className='d-block text-decoration-none'>Buy template</Link>
            <Link className='d-block text-decoration-none'>
             
              <BsFillCartCheckFill />
              cart
              <span className="nav__link--zero">0</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
