import { FC } from "react";
import Image from "next/image";

const HomeSectionSolution: FC = () => {
  return (
    <section className='home-solution'>
      <div className='container'>
        <div className='home-solution__content text-center'>
          <h2 className='home-sub-title'>
            <span className='center'>What Solutions</span>
          </h2>
          <p className='home-description'>
            Advanced AI With Cloud Platform designed to simplify and accelerate
            making, operating and innovating with AI in any environment.
          </p>
        </div>
        <div className='row row--justify row--middle'>
          <div className='col-6 sm-col-12 text-right md-text-left'>
            <div className='home-solution__image'>
              <Image
                src='/home/solution-ocr.png'
                alt='Picaso OCR Technology'
                width={637}
                height={350}
              />
            </div>
          </div>
          <div className='col-6 sm-col-12'>
            <span className='tag'>Web Service</span>
            <h3 className='home-solution__title'>Web Service Solution</h3>
            <p className='home-description'>
              Solution gives you a new experience that can automate a
              conventional document into a digital document. so that it can make
              your job easier.
            </p>
          </div>
        </div>
        <div className='row row--justify row--reverse row--middle'>
          <div className='col-6 sm-col-12 '>
            <div className='home-solution__image'>
              <Image
                src='/home/solution-picaso.png'
                alt='Picaso Ekyc Technology'
                width={656.3}
                height={422}
              />
            </div>
          </div>
          <div className='col-6 sm-col-12 text-right md-text-left'>
            <span className='tag'>Picaso e-KYC</span>
            <h3 className='home-solution__title'>Picaso e-KYC</h3>
            <p className='home-description'>
              Powered your e-KYC with Picaso e-KYC to speed up your verification
              process using
              <i>
                <strong> Face Liveness Detection, ID Card Extraction</strong>
              </i>
              , and
              <i>
                <strong> Dukcapil Verification</strong>
              </i>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionSolution;
