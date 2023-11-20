import { FiNavigation } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Fons.scss";
const Fons = () => {
  return (
    <div className='fons'>
      <div className='container'>
        <div className='fons__wrapper'>
          <div className='fons__wrapper--enner gap-md-5 gap-2 d-block rounded  bg-dark py-2 px-4 rounded-sm-pill d-lg-flex align-items-center justify-content-center'>
            <Link className='d-flex align-items-center  text-decoration-none  text-light '>
              <BsCart4 className='text-light fs-5 pe-1' />
              First Aid Kit
            </Link>
            <Link className='d-flex align-items-center text-decoration-none  text-light'>
              <FaCamera className='fs-5 pe-1' />
              Banger Bottle
            </Link>
            <Link className='d-block text-decoration-none  text-light'>
              <IoMdPerson className='fs-4 pe-1' />
              Brian Schultz
            </Link>
            <Link className='d-flex align-items-center text-decoration-none  text-light'>
              <FiNavigation className='fs-4 pe-1' />
              Catalina, California
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fons;
