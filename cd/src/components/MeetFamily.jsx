import React from "react";
import './MeetFamily.scss'
const MeetFamily = () => {
  return (
    <div className='meetFamily '>
      <div className='container '>
        <span className='meetFamily__leni hero__leni text-center'>Meet the family</span>
        <h4 className='meetFamily__title p-2'>What we have in store for you.</h4>
        <p className='meetFamily__text pb-4'>
          Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
          Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
          ut faucibus orci tincidunt.
        </p>
      </div>
    </div>
  );
};

export default MeetFamily;
