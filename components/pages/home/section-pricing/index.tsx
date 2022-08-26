import { FC } from 'react';
import Link from 'next/link';
import pricings from './content-pricing.json';

const HomeSectionPricing: FC = () => {
  return (
    <div className="home-pricing" id="pricing">
      <div className="container">
        <div className="row row--center">
          <div className="col-6 lg-col-8 md-col-10 sm-col-12 text-center">
            <h2 className="home-sub-title">
              <span className="center">Our Pricing</span>
            </h2>
            <p className="home-description">
              Picaso is an API-as-a-service Competitive pricing
            </p>
          </div>
        </div>

        {pricings &&
          pricings.map((pricing) => (
            <div key={pricing.id} className="product-pricing">
              <div className="product-pricing__title">
                <h3>{pricing.title}</h3>
              </div>
              <div className="product-pricing__product-detail">
                <div className="product-pricing__service">
                  {pricing.services.map((service) => (
                    <span
                      key={service.id}
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    ></span>
                  ))}
                </div>
                <div className="product-pricing__mount">
                  {pricing.prices.map((price) => (
                    <span key={price.id}>{price.per_hits}</span>
                  ))}
                </div>
                <div className="product-pricing__note">
                  {pricing.prices.map((price) => (
                    <span key={price.id}>{price.notes}</span>
                  ))}
                </div>
              </div>
              <div className="product-pricing__action">
                <Link href="/contact-us">
                  <a className="button">Try it Now</a>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeSectionPricing;
