import { FC } from 'react';
import HomeDemoProduct from './demo';

const HomeSectionDemo: FC = () => {
  return (
    <section className="home-demo" id="demo">
      <div className="container">
        <h2 className="home-sub-title text-center">
          <span className="center">Try Our API</span>
        </h2>
        <p className="home-description text-center">
          Picaso is an API-as-a-service that help developers and companies
        </p>
        <HomeDemoProduct />
      </div>
    </section>
  );
};

export default HomeSectionDemo;
