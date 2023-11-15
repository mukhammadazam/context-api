import React, { useContext } from "react";
import "./MeetFamily.scss";
import { MyContext } from "./ContextApi";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
const MeetFamily = () => {
  const { data } = useContext(MyContext);

  return (
    <div className='meetFamily '>
      <div className='container '>
        <span className='meetFamily__leni hero__leni text-center'>
          Meet the family
        </span>
        <h4 className='meetFamily__title p-2'>
          What we have in store for you.
        </h4>
        <p className='meetFamily__text pb-4'>
          Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
          Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
          ut faucibus orci tincidunt.
        </p>
        <div className='row g-5'>
          {data.slice(0, 6).map((el, index) => (
            <div key={index} className='col-lg-4 '>
              <div className='card w-100'>
                <img
                  className='d-block w-100 rounded meetFamily__row--img '
                  src={el.imageUrl}
                  height={473}
                  // width={379}
                  alt=''
                />
                <div className=' d-flex align-items-center justify-content-center'>
                  <div className='positon-absolute card__enner'>
                    <strong className='d-block meetFamily__row--title '>
                      {el.title.slice(0, 10)}
                    </strong>
                    <p className='card__text '>{el.summary.slice(0, 50)}</p>
                    <Link
                      to={`/${el.title}`}
                      className='card__btn text-decoration-none border-0 bg-transparent  d-block'>
                      Show more <HiArrowNarrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to='/All' className='text-decoration-none  d-block meetFamily__linkAll text-center'>
          Show all categories <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default MeetFamily;
