import React, { useContext } from 'react'
import { MyContext } from './ContextApi'
import { Link } from 'react-router-dom'
const AllData = () => {
    const {data} =useContext(MyContext)
  return (
    <div className='container'>
      <div className='row'>
        {data.map((el, index) => (
          <div className='col-lg-6 gy-5 col-md-6 col-12 col-sm-12' key={index}>
            <Link to={`/${el.title}`}>
              <img className='w-100' src={el.imageUrl} height={473} alt='' />
            </Link>
            <strong className='d-block text-dark p-2 fs-4 '>{el.title}</strong>
            <p className=' '>{el.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllData