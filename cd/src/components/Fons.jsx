import './Fons.scss'
import {Link} from 'react-router-dom'
const Fons = () => {
  return (
    <div className='fons'>
      <div className='container'>
        <div className='fons__wrapper'>
          <div className='fons__wrapper--enner gap-5 bg-dark py-2 px-4 rounded-pill d-flex align-items-center justify-content-center'>
            <Link className='d-block text-decoration-none text-light '>First Aid Kit</Link>
            <Link className='d-block text-decoration-none  text-light'>Banger Bottle</Link>
            <Link className='d-block text-decoration-none  text-light'>Brian Schultz</Link>
            <Link className='d-block text-decoration-none  text-light'>Leah Stoff</Link>
            <Link className='d-block text-decoration-none  text-light'>
              Catalina, California
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fons