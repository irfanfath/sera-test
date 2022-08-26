import { FC } from 'react';
import Link from 'next/link';
import IconTimer from 'public/svg/icon-timer.svg';

const HomeSectionHero: FC = () => {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="row">
          <div className="col-7 md-col-7 sm-col-10">
            <h1 className="home-title">
              Cognitive intelligence, of automating visual
            </h1>
            <p className="home-description">
              Picaso is an builds end-to-end AI solutions, machine learning, and
              human-in-the-loop systems that supercharge the way
            </p>
            <Link href="/contact-us">
              <a className="button">
                <IconTimer className="no-change" /> &nbsp; Schedule Demo
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionHero;
