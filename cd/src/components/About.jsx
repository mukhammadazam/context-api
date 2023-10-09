import AboutImg from "../../public/AboutImg.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./About.scss";
const About = () => {
  return (
    <div className='About'>
      <div className='About__fon '></div>
      <div className='container'>
        <div className='about d-lg-flex align-items-lg-center justify-content-lg-between '>
          <div className='about__left d-flex justify-content-center d-lg-block'>
            <img className="w-100" src={AboutImg} alt='AboutImg'   />
          </div>
          <div className='about__right d-flex justify-content-center d-lg-block pt-5 pt-lg-0'>
            <div>
              <span className='about__right--leni '>Who are we?</span>
              <h2 className='about__right--title'>A bit about us.</h2>
              <p className='about__right--text'>
                We are an outdoor gear company focused on Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nullam scelerisque aliquam
                odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.
                Morbi neque ex, condimentum dapibus congue et.
              </p>
              <Link className='about__right--link d-block text-decoration-none text-dark'>
                Read more <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
