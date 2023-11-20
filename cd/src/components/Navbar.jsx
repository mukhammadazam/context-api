import { BsFillCartCheckFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../public/Logo.svg";
import { useState } from "react";
import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  const [togle, setTogle] = useState(false);
  const togleFunction = () => {
    return setTogle(!togle);
  };
  return (
    <div className='navbar bg-light'>
      <div className='container'>
        <div className='nav d-flex w-100 align-items-center justify-content-between'>
          <Link to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
          <div className='nav__list d-lg-flex d-none align-item-center justify-content-center'>
            <NavLink to='/' className='text-decoration-none text-dark nav__list--item d-block'>
              Shop
            </NavLink>
            <NavLink to='/' className='text-decoration-none text-dark nav__list--item d-block'>
              About Us
            </NavLink>
            <NavLink className='text-decoration-none text-dark nav__list--item d-block'>
              Our team
            </NavLink>
            <NavLink className='text-decoration-none text-dark nav__list--item d-block'>
              Buyer's guides
            </NavLink>
            <NavLink className='text-decoration-none text-dark nav__list--item d-block'>
              Categories
            </NavLink>
          </div>
          {togle ? (
            <div className=' position-absolute d-flex justify-content-center nav__bg   top-100'>
              <div className=''>
                <div className='pt-5 '>
                  <NavLink to='/' className='text-decoration-none  pb-4 text-center nav__list--item d-block'>
                    Shop
                  </NavLink>
                  <NavLink className='text-decoration-none pb-4 text-center nav__list--item d-block'>
                    About Us
                  </NavLink>
                  <NavLink className='text-decoration-none pb-4 text-center nav__list--item d-block'>
                    Our team
                  </NavLink>
                  <NavLink className='text-decoration-none pb-4 text-center nav__list--item d-block'>
                    Buyer's guides
                  </NavLink>
                  <NavLink className='text-decoration-none pb-4 text-center nav__list--item d-block'>
                    Categories
                  </NavLink>
                </div>
                <div className='nav__link  d-flex align-items-center '>
                  <Link className='d-block nav__link--item text-decoration-none'>
                    Buy template
                  </Link>
                  <Link className='d-block nav__link--item d-flex align-items-center text-decoration-none'>
                    <BsFillCartCheckFill className='d-block pe-1 fs-4' />
                    Cart
                    <span className='nav__link--zero'>0</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className='d-flex'>
            <button
              onClick={togleFunction}
              className='border-0 d-lg-none me-5 bg-transparent'>
              <span className='d-block   nav__leni bg-dark'></span>
              <span className='d-block  nav__leni bg-dark'></span>
              <span className='d-block  nav__leni bg-dark'></span>
            </button>
            <div className='nav__link d-none d-md-flex align-items-center '>
              <Link className='d-block nav__link--item text-decoration-none'>
                Buy template
              </Link>
              <Link className='d-block nav__link--item d-flex align-items-center text-decoration-none'>
                <BsFillCartCheckFill className='d-block pe-1 fs-4' />
                Cart
                <span className='nav__link--zero'>0</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
