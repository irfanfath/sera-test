import { FC } from 'react';
import dataProducts from './content-product.json';
import HomeProductItem from './product-item';

const HomeSectionProduct: FC = () => {
  return (
    <div className="home-product">
      <div className="container">
        <div className="row row--center">
          <div className="col-6 md-col-8 sm-col-12 text-center">
            <h2 className="home-sub-title">
              <span className="center">What Our Product</span>
            </h2>
            <p className="home-description">
              Picaso is AI services designed for developers and data scientists.
              Take advantage of the decades of breakthrough research,
              responsible AI practices, and flexibility
            </p>
          </div>
        </div>

        <div className="home-product__list">
          <div className="row">
            {dataProducts &&
              dataProducts.map((product) => (
                <HomeProductItem key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionProduct;
