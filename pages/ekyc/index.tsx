import type { NextPage, GetServerSideProps } from "next";
import Site from "components/layouts/site";
import EKYCShowcase from "components/pages/ekyc";

interface ILogin {
  isLogin: boolean;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx;
  const { cookies } = req;

  return {
    props: {
      isLogin: cookies.token ? true : false,
    },
  };
};

const EKYC: NextPage<ILogin> = ({ isLogin }) => {
  const seo = {
    title: "Picaso ekyc ID Documents & Identity Verification Solution.",
    description:
      "Solusi picaso e-KYC Solusi end-to-end yang memungkinkan Anda mendapatkan pelanggan baru melalui ID dan verifikasi biometrik secara digital. Fitur-fitur e-KYC akan mencakup Optical Character Recognition (OCR), Face Recognition, Liveness Detection.",
    url: "https://www.picaso.id/ekyc",
    noIndex: false,
    keywords: "service Teknologi e-KYC Picaso Telkom",
  };

  return (
    <Site seo={seo} isLogin={isLogin}>
      <section className='page'>
        <div className='container'>
          <EKYCShowcase />
        </div>
      </section>
    </Site>
  );
};

export default EKYC;
