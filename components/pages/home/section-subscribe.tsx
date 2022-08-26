import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const HomeSectionSubscribe: FC = () => {
  return (
    <div className='home-subscribe'>
      <div className='container'>
        <div className='row row--middle'>
          <div className='col-1 sm-col-12'></div>
          <div className='col-4 md-col-6 sm-col-12'>
            <Image
              src='/ilust-vr.png'
              alt='E-kyc Technology Picaso'
              width={531}
              height={455}
            />
          </div>
          <div className='col-1 sm-col-12'></div>
          <div className='col-5 md-col-6 sm-col-12'>
            <h3>Elevate your business with us !</h3>
            <Link href='/contact-us'>
              <a className='button button--white'>Let&apos;s Talk</a>
            </Link>
          </div>
          <div className='col-1 sm-col-12'></div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSubscribe;
