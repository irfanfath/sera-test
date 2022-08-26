import type { NextPage } from "next";
import Image from "next/image";
import Site from "components/layouts/site";
import ResetPasswordForm from "components/pages/reset-password/form";

const ResetPassword: NextPage = () => {
  const seo = {
    title: "Reset Password",
    url: "https://www.picaso.id/",
    noIndex: false,
    keywords: "picaso e-kyc telkom",
  };

  return (
    <Site seo={seo}>
      <section className='page'>
        <div className='container'>
          <div className='row row--center row--middle'>
            <div className='col-6 md-hide text-center'>
              <Image
                src='/ilust-vr.png'
                alt='E-kyc Technology Picaso Banner'
                width='400'
                height='345'
              />
              <h2 className='auth-title'>Picaso Developer Portal</h2>
              <p className='auth-description'>
                We are the best of machine learning and AI-Driven automation to
                automate identity verification in efficient manner
              </p>
            </div>
            <div className='col-1 md-col-12'></div>
            <div className='col-5 md-col-8 sm-col-12'>
              <div className='card'>
                <ResetPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Site>
  );
};

export default ResetPassword;
