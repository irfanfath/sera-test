import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import Site from "components/layouts/site";
import ContactForm from "components/pages/contact-us/form";

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

const ContactUs: NextPage<ILogin> = ({ isLogin }) => {
  const seo = {
    title: "Contact Us",
    description:
      "Helps you implement latest AI Technology to your products while capture any valuable insights from your customer easily with our Picaso's API.",
    url: "https://www.picaso.id/contact-us/",
    keywords: "Contoh artificial intelligence",
  };

  return (
    <Site seo={seo} isLogin={isLogin}>
      <section className='page'>
        <div className='container'>
          <div className='card'>
            <div className='row row--center row--middle'>
              <div className='col-6 md-hide'>
                <div className='text-center'>
                  <Image
                    src='/ilust-vr.png'
                    alt='E-kyc Technology Picaso Banner'
                    width='400'
                    height='345'
                  />
                </div>
                <div className='page__content' style={{ marginTop: "40px" }}>
                  <p>
                    Helps you implement latest AI Technology to your products
                    while capture any valuable insights from your customer
                    easily with our Picaso&apos;s API.{" "}
                  </p>
                  <p>
                    <b>Start elevating your products with:</b>
                  </p>
                  <ul>
                    <li>Optical Character Recognition</li>
                    <li>Facial Recognition</li>
                    <li>Object Detection</li>
                  </ul>
                </div>
              </div>
              <div className='col-6 md-col-8 sm-col-12 form-contact-outer'>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Site>
  );
};

export default ContactUs;
