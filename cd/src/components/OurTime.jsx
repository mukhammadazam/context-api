import "./OurTime.scss";
import icon3 from "../../public/icon.svg";
import icon1 from "../../public/icon1.svg";
import icon2 from "../../public/icon2.svg";
import icon4 from "../../public/icon4.svg";
import icon5 from "../../public/icon5.svg";
import icon6 from "../../public/icon6.svg";
const OurTime = () => {
  return (
    <div className='ourTime'>
      <div className='container'>
        <div className='ourTime__enner'>
          <span className='ourTime__enner--leni d-block'>OUR PROMISE</span>
          <h3 className='ourTime__enner--title'>
            Setting the bar for our products.
          </h3>
          <p className='ourTime__enner--text'>
            Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
            Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
            ultrices, ut faucibus orci tincidunt.
          </p>
        </div>
        <div className='ourTime__pos d-none d-lg-block'></div>
        <div className='ourTime__fourPosi d-none d-lg-block'></div>
        <div className='row  ourTime__row d-flex justify-content-center gy-5  '>
          <div className='col-12 col-sm-6 ourTime__row--col col-lg-4 d-flex pb-5 justify-content-center'>
            <div>
              <img
                className='ourTime__row--icon'
                src={icon1}
                height={64}
                alt='icon1'
              />
              <strong className='ourTime__row--title p-2 text-center d-block'>
                Sustainable sourcing
              </strong>
              <p className='ourTime__row--text text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 ourTime__row--col col-lg-4 d-flex pb-5 justify-content-center'>
            <div>
              <img
                className='ourTime__row--icon'
                src={icon2}
                height={64}
                alt='icon1'
              />
              <strong className='ourTime__row--title p-2 text-center d-block'>
                Lifetime warranty
              </strong>
              <p className='ourTime__row--text text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 ourTime__row--col col-lg-4 d-flex pb-5  justify-content-center'>
            <div>
              <img
                className='ourTime__row--icon'
                src={icon3}
                height={64}
                alt='icon1'
              />
              <strong className='ourTime__row--title p-2 text-center d-block'>
                All-terrain tested
              </strong>
              <p className='ourTime__row--text text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 ourTime__row--col col-lg-4 d-flex pt-5 justify-content-center'>
            <div>
              <img
                className='ourTime__row--icon'
                src={icon4}
                height={64}
                alt='icon1'
              />
              <strong className='ourTime__row--title p-2 text-center d-block'>
                Premium materials
              </strong>
              <p className='ourTime__row--text text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 ourTime__row--col col-lg-4 d-flex pt-5 justify-content-center'>
            <div>
              <img
                className='ourTime__row--icon'
                src={icon5}
                height={64}
                alt='icon1'
              />
              <strong className='ourTime__row--title p-2 text-center d-block'>
                Designed by you
              </strong>
              <p className='ourTime__row--text text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 ourTime__row--col col-lg-4 d-flex pt-5  justify-content-center'>
            <div>
              <img
                className='ourTime__row--icon'
                src={icon6}
                height={64}
                alt='icon1'
              />
              <strong className='ourTime__row--title p-2 text-center d-block'>
                Quality assured
              </strong>
              <p className='ourTime__row--text text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTime;
