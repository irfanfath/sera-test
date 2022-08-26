import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import IconProfile from "public/svg/icon-profile.svg";
import IconMenu from "public/svg/icon-burger-menu.svg";

interface ISiteHeader {
  isHome: boolean;
  isLogin: boolean;
}

const SiteHeader: FC<ISiteHeader> = ({ isHome = false, isLogin = false }) => {
  const [toggle, setToggle] = useState(false);
  const [pathHastag, setPathHastag] = useState("");
  const { pathname, events } = useRouter();

  useEffect(() => {
    const onHashChangeStart = (url: any) => {
      setPathHastag(url);
    };
    events.on("hashChangeStart", onHashChangeStart);
    return () => {
      events.off("hashChangeStart", onHashChangeStart);
    };
  }, [events]);

  useEffect(() => {
    const header: any = document.getElementById("site-header");
    const sticky: any = header.offsetTop;
    const LinkHash = window.location.hash;
    setPathHastag(LinkHash);

    const scrollCallBack: any = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("header--sticky");
      } else {
        header.classList.remove("header--sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <header
      className={
        isHome
          ? toggle
            ? "header header--home header--toggle"
            : "header header--home"
          : toggle
          ? "header header--toggle"
          : "header"
      }
      id='site-header'
    >
      <nav className='header__nav'>
        <Link href='/'>
          <a className='header__brand'>
            <Image
              src='/logo-picaso.png'
              title='Picaso'
              alt='Picaso team logos'
              width='174'
              height='41'
            />
          </a>
        </Link>

        <div
          className={
            toggle ? "header__menu header__menu--active" : "header__menu"
          }
        >
          <ul className='header__menu-left'>
            <li className='header__menu-has-sub-menu'>
              <Link href='#'>
                <a>Product</a>
              </Link>
              <ul className='header__menu-sub-menu'>
                <li>
                  <Link href='/ekyc'>
                    <a className={pathname === "/ekyc" ? "active" : ""}>
                      Picaso e-KYC
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://fr.picaso.id'
                    rel='noopener noreferrer'
                  >
                    Picaso FaceID
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://od.picaso.id'
                    rel='noopener noreferrer'
                  >
                    Picaso recOD
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/#demo'>
                <a
                  className={
                    pathHastag === "/#demo" || pathHastag === "#demo"
                      ? "active"
                      : ""
                  }
                >
                  Demo
                </a>
              </Link>
            </li>
            <li>
              <Link href='/#pricing'>
                <a
                  className={
                    pathHastag === "/#pricing" || pathHastag === "#pricing"
                      ? "active"
                      : ""
                  }
                >
                  Pricing
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact-us'>
                <a className={pathname === "/contact-us" ? "active" : ""}>
                  Contact Us
                </a>
              </Link>
            </li>
            <li className='header__menu-has-sub-menu'>
              <Link href='#'>
                <a>Documentation</a>
              </Link>
              <ul className='header__menu-sub-menu'>
                <li>
                  <Link href='/kebijakan-keamanan'>
                    <a>Security Policy</a>
                  </Link>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://picaso-ocr.gitbook.io/documentations'
                    rel='noopener noreferrer'
                  >
                    OCR API
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://docs.fr.picaso.id/introduction/about'
                    rel='noopener noreferrer'
                  >
                    FR API
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://picaso-recod.gitbook.io/recod-product-documentation'
                    rel='noopener noreferrer'
                  >
                    OD API
                  </a>
                </li>
              </ul>
            </li>
            {/* <li>
              <a
                className={isHome ? "text-white" : ""}
                target='_blank'
                href='https://picaso-ocr.gitbook.io/documentations'
                rel='noopener noreferrer'
              >
                Documentation
              </a>
            </li> */}
          </ul>

          {isLogin ? (
            <ul className='header__menu-right'>
              <li>
                <Link href='/dashboard'>
                  <a className={isHome ? "button button--white" : "button"}>
                    <IconProfile /> &nbsp; Dashboard
                  </a>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className='header__menu-right'>
              <li>
                <Link href='/login'>
                  <a
                    className={
                      isHome
                        ? pathname === "/login"
                          ? "active text-white"
                          : "text-white"
                        : pathname === "/login"
                        ? "active"
                        : ""
                    }
                  >
                    Login
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/register'>
                  <a className={isHome ? "button button--white" : "button"}>
                    <IconProfile /> &nbsp; Registrasi
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </div>

        <button className='header__toggle' onClick={() => setToggle(!toggle)}>
          {toggle ? "Close" : <IconMenu />}
        </button>
      </nav>
    </header>
  );
};

export default SiteHeader;
