import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconSquareWhite from 'public/svg/icon-sandbox-white.svg';

const HomeSectionWho: FC = () => {
  return (
    <section className="home-who">
      <div className="container">
        <div className="row row--justify">
          <div className="col-6 sm-col-12 ">
            <div className="home-who__image">
                <iframe src="https://www.youtube.com/embed/SKcmyEPFxFg" style={{ borderRadius: 10 }} width={600} height={350} id="video-promotion" allow="autoplay; encrypted-media" />
            </div>
          </div>
          <div className="col-6 sm-col-12 ">
            <h2 className="home-sub-title">
              <span className="home-title-underline">Who we are</span>
            </h2>
            <p className="home-description">
              We are the best of machine learning and AI-Driven automation to
              automate identity verification in efficient manner
            </p>
            <ul className="home-list">
              <li>Optical Character Recogntion</li>
              <li>Face Recognition</li>
              <li>Object Detection</li>
              <li>e-KYC proses</li>
            </ul>
            <Link href="/contact-us">
              <a className="button">
                <IconSquareWhite /> &nbsp; Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionWho;
