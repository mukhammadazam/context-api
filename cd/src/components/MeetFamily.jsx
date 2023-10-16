import React, { useContext } from "react";
import "./MeetFamily.scss";
import { MyContext } from "./ContextApi";
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
                <img className="d-block w-100"
                  src={el.video.thumbnails[3].url}
                  height={473}
                  // width={379}
                  alt=''
                />
                <strong className='d-block'>{el.video.title.slice(0,12)}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetFamily;
