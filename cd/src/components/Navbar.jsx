import { BsFillCartCheckFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../public/Logo.svg";
import React from "react";
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar bg-light'>
      <div className='container'>
        <div className='nav d-flex w-100 align-items-center justify-content-between'>
          <img src={Logo} alt='Logo' />
          <div className='nav__list d-flex d-none align-item-center justify-content-center'>
            <NavLink className='text-decoration-none nav__list--item d-block'>Shop</NavLink>
            <NavLink className='text-decoration-none nav__list--item d-block'>About Us</NavLink>
            <NavLink className='text-decoration-none nav__list--item d-block'>Our team</NavLink>
            <NavLink className='text-decoration-none nav__list--item d-block'>
              Buyer's guides
            </NavLink>
            <NavLink className='text-decoration-none nav__list--item d-block'>
              Categories
            </NavLink>
          </div>
          <div className='nav__link d-flex align-items-center '>
            <Link className='d-block nav__link--item text-decoration-none'>Buy template</Link>
            <Link className='d-block nav__link--item d-flex align-items-center text-decoration-none'>
             
              <BsFillCartCheckFill className='d-block pe-1 fs-4'  />
              Cart
              <span className="nav__link--zero">0</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
