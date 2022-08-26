import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SiteFooter: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='section'>
          <button
            onClick={scrollToTop}
            className={isVisible ? "footer__backtop show" : "footer__backtop"}
          >
            <Image
              src='/svg/icon-back-top.svg'
              alt='back to top'
              width={40}
              height={40}
            />
            <span>BACK TO TOP</span>
          </button>
          <div className='footer__logo'>
            <Image
              src='/logo-picaso.png'
              alt='Picaso Team Logo'
              width='174'
              height='41'
            />
            <br />
            <br />
            <div className='text-picaso'>Picaso e-kyc</div>
            <div className='information'>
              Identifies facial movements in real-time from eyes, mouth, head,
              eyebrow with standard ISO 27001:2013 certified organization
            </div>
            <br />
            <Image
              src='/home/iso.png'
              alt='iso'
              width={80}
              height={40}
            />
            <div className='information information-bold'>
              Contact for Business : <a href="https://api.whatsapp.com/send?phone=+6281258887756&text=Hy%20Team%20Picaso,%20I%20want%20to%20ask%20something%20about%20this%20product%20:" >081258887756</a>
              <br />
              Email : cs@picaso.id
            </div>
          </div>
          <div className='footer__content'>
            <div className='text-picaso'>Product</div>
            <Link href='/ekyc' passHref>
              <div className='information feature'>Picaso e-KYC</div>
            </Link>
            <Link href='/#demo' passHref>
              <div className='information feature'>Picaso OCR</div>
            </Link>
            <Link href='https://fr.picaso.id' passHref>
              <div className='information feature'>Picaso FR</div>
            </Link>
            <Link href='https://od.picaso.id' passHref>
              <div className='information feature'>Picaso OD</div>
            </Link>
          </div>
          <div className='footer__content'>
            <div className='text-picaso'>Company</div>
            <Link href='/contact-us' passHref>
              <div className='information feature'>About us</div>
            </Link>
            <Link href='/contact-us' passHref>
              <div className='information feature'>Contact us</div>
            </Link>
            <Link href='https://picaso-ocr.gitbook.io/documentations' passHref>
              <div className='information feature'>Documentation</div>
            </Link>
            <Link href='/#pricing' passHref>
              <div className='information feature'>Pricing</div>
            </Link>
          </div>
          <div className='footer__content'>
            <div className='text-picaso'>Legal Terms</div>
            <Link href='/terms' passHref>
              <div className='information feature'>Terms of use</div>
            </Link>
            <Link href='/privacy-policy' passHref>
              <div className='information feature'>Privacy police</div>
            </Link>
            <Link href='/faq' passHref>
              <div className='information feature'>FAQ</div>
            </Link>
          </div>
        </div>
        <div className='line'></div>
        <div className='section'>
          <div className='footer__logo address'>
            <div className='information'>
              Telkom STO Kebayoran, 2nd Floor Jl. Sisingamangaraja No.4, <br />{" "}
              Kota Jakarta Selatan, DKI Jakarta 12110
            </div>
          </div>
          <div className='footer__content'>
            <div className='img-social-media'>
              <Link
                href='https://www.facebook.com/profile.php?id=100076342820804'
                passHref
              >
                <Image
                  src='/svg/Facebook.svg'
                  alt='Picaso'
                  width='12'
                  height='41'
                />
              </Link>
            </div>
            <div className='img-social-media'>
              <Link href='https://www.instagram.com/picasoekyc' passHref>
                <Image
                  src='/svg/Instagram.svg'
                  alt='Picaso'
                  width='22'
                  height='41'
                />
              </Link>
            </div>
            <div className='img-social-media'>
              <Link href='https://www.linkedin.com/in/picasoekyc' passHref>
                <Image
                  src='/svg/Linkedin.svg'
                  alt='Picaso'
                  width='20'
                  height='41'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
