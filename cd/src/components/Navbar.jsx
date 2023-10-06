import React from "react";
import Logo from "../../public/Logo.svg";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav'>
          <img src={Logo} alt='Logo' />
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
