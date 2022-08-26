import type { NextPage, GetServerSideProps } from "next";
import Site from "components/layouts/site";
import HomeSectionHero from "components/pages/home/section-hero";
import HomeSectionWho from "components/pages/home/section-who";
import HomeSectionSolution from "components/pages/home/section-solution";
import HomeSectionCta from "components/pages/home/section-cta";
import HomeSectionDemo from "components/pages/home/section-demo";
import HomeSectionProduct from "components/pages/home/section-product";
import HomeSectionPricing from "components/pages/home/section-pricing";
import HomeSectionSubscribe from "components/pages/home/section-subscribe";

interface ILogin {
  isLogin: boolean;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const { cookies } = req;

  return {
    props: {
      isLogin: cookies.token ? true : false,
    },
  };
};

const Home: NextPage<ILogin> = ({ isLogin }) => {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Articles",
    headline:
      "Artificial intelligence terpercaya di indonesia, Solution seperti e-kyc, face recognition, object detection ",
    description:
      "Helps you implement latest AI Technology to your products while capture any valuable insights from your customer easily with our Picaso's API.",
    image:
      "https://picaso.id/_next/image?url=%2Fhome%2Fsolution-picaso.png&w=1920&q=75",
    datePublished: new Date().toISOString(),
    author: {
      "@type": "organization",
      name: "Picaso E-kyc",
      url: "https://www.instagram.com/picasoekyc/",
    },
  };

  const seo = {
    title:
      "Picaso e-kyc: memberikan layanan AI ,e-kyc,face recognition, object detection",
    keywords:
      "Artificial intelligence terpercaya di indonesia, Solution seperti e-kyc, face recognition, object detection ",
    description:
      "Picaso e-kyc memberikan layanan artificial intelligence Terpercaya di indonesia, Mudah,cepat serta sudah terverifikasi dengan Dukcapil memberikan solution seperti e-kyc, face recognition, object detection, solution ocr",
  };

  return (
    <>
      {/* <script type='application/ld+json'>
        {JSON.stringify(articleStructuredData)}
      </script> */}
      <Site seo={seo} isHome={true} isLogin={isLogin}>
        <HomeSectionHero />
        <HomeSectionWho />
        <HomeSectionSolution />
        <HomeSectionCta />
        <HomeSectionDemo />
        <HomeSectionProduct />
        <HomeSectionPricing />
        <HomeSectionSubscribe />
      </Site>
    </>
  );
};

export default Home;
