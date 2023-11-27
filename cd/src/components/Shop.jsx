import React from "react";
import "./Shop.scss";
const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop__wrapper'>
        <div className='container'>
          <div className='shop__enner'>
            <span className='shop__enner--leni d-block'>Shop</span>
            <h3 className='shop__enner--title text-center'>
              Check out our products.
            </h3>
            <p className='shop__enner--text w-50 text-center mx-auto'>
              Morbi neque ex, condimentum dapibus congue et, vulputate ut
              ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
              nisi ultrices, ut faucibus orci tincidunt.
            </p>
            <button className='shop__enner--btn d-block bg-translate mx-auto border-0'>Visit shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
