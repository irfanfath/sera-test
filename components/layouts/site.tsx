/* eslint-disable @next/next/no-page-custom-font */
import React, { Fragment, FC, useEffect } from "react";
import Head from "next/head";
import SiteHeader from "components/layouts/site-header";
import SiteFooter from "components/layouts/site-footer";
import LinkedInTag from "react-linkedin-insight";

import { useRouter } from "next/router";
interface ISeo {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
  keywords?: string;
}

interface ISite {
  seo: ISeo;
  isHome?: boolean;
  isLogin?: boolean;
  children: React.ReactNode;
}

const SEO = {
  title: "Homepage",
  description: "Description",
  image: "/picaso E-kyc.png",
  url: "https://www.picaso.id/",
  noIndex: 0,
  keywords: "Mudah dan cepat serta terverifikasi dengan Dukcapil",
};

const Site: FC<ISite> = ({
  seo = SEO,
  isHome = false,
  isLogin = false,
  children,
}) => {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1027453168174179"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  return (
    <Fragment>
      <Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1027453168174179');
              fbq('track', 'PageView');`,
          }}
        /> */}
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{seo.title}</title>
        <link rel='icon' href='/favicon-picaso.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap'
          rel='stylesheet'
        />
        <meta name='description' content={seo.description} key='description' />
        <meta name='keywords' content={seo.keywords} />

        <meta
          name='twitter:card'
          content='summary_large_image'
          key='twitter:card'
        />
        <meta property='og:url' content={seo.url} key='og:url' />
        <meta property='og:title' content={seo.title} key='og:title' />
        <meta
          property='og:description'
          content={seo.description}
          key='og:description'
        />
        <meta property='og:image' content={seo.image} key='og:image' />
        <link rel='canonical' href={seo.url} />
        {seo.noIndex && (
          <>
            <meta name='robots' content='noindex'></meta>
            <meta name='googlebot' content='noindex'></meta>
          </>
        )}
        {/* linkedinTag */}

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-8ZB5BDKM9K`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-8ZB5BDKM9K');
            `,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCHV4ZH" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      <div className={isHome ? "site site--home" : "site"} id='top'>
        <SiteHeader isHome={isHome} isLogin={isLogin} />
        <main role='main'>{children}</main>
      </div>
    </Fragment>
  );
};

export default Site;
