import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const HomeSectionCta: FC = () => {
  return (
    <div className='container'>
      <div className='home-cta'>
        <div className='row row--middle'>
          <div className='col-6 md-col-4 sm-col-12 text-center'>
            <div className='home-cta__image'>
              <Image
                src='/ilust-vr.png'
                alt='E-kyc Technology Picaso Banner OCR'
                width={531}
                height={455}
              />
            </div>
          </div>
          <div className='col-5 md-col-8 sm-col-12 '>
            <h2>Elevate your business with us !</h2>
            <Link href='/contact-us'>
              <a className='button button--white'>Contact Us</a>
            </Link>
          </div>
          <div className='col-1'></div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCta;
