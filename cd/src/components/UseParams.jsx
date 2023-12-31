import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MyContext } from "./ContextApi";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./UseParams.scss";
const UseParams = () => {
  const { title } = useParams();
  const { data } = useContext(MyContext);
  return (
    <div className='position-relative'>
      {data
        .filter((el) => el.title === title)
        .map((el, index) => (
          <div key={index} className=''>
            <div className=''>
              <div className='w-100'>
                <img
                  className='w-100 card'
                  src={el.imageUrl}
                  alt='img'
                  height={400}
                />
                <div className='container d-flex justify-content-center'>
                  <div className='bg-light use '>
                    <h3 className='d-block fs-3 use__title text-center'>
                      {el.title}
                    </h3>
                    <p className='text-center  use__text '>{el.summary}</p>
                    <Link
                      to='/'
                      className='d-block text-center text-dark  text-decoration-none fs-4'>
                      Go out <HiArrowNarrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UseParams;
