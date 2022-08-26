import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { isEmailValid } from "utils";
import { Modal } from "components/elements";
import { forgotPassword } from "api/auth";

interface IForgotPass {
  email: string;
}

const initNotif = {
  isShow: false,
  type: "",
  message: "",
};

const ForgotPasswordForm: FC = () => {
  const [forgotpass, setForgotpass] = useState<IForgotPass>({
    email: "",
  });
  const [notif, setNotif] = useState(initNotif);
  const [isSended, setSended] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const isEmailNotValid =
    forgotpass.email.length > 3 && !isEmailValid(forgotpass.email);

  const changeInput = (e: any) => {
    e.preventDefault();
    setForgotpass({ ...forgotpass, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      await forgotPassword(forgotpass).then((res: any) => {
        setNotif({
          isShow: true,
          type: "success",
          message: res.data.message,
        });
      });
      setSubmitted(false);
      setSended(true);
    } catch (err:any) {
      setNotif({
        isShow: true,
        type: "error",
        message: err.response
          ? err.response.data.message
          : "Cannot reset password, please try again later.",
      });
      setSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form auth-form'>
      <div className='auth-form__logo text-center'>
        <Image
          src='/logo-picaso.png'
          title='Picaso'
          alt='Picaso Team Logo'
          width='174'
          height='41'
        />
      </div>
      <h3 className='auth-form__title'>Recover Your Password</h3>

      {isSended ? (
        <div>
          <p style={{ marginBottom: "60px" }}>
            We have sent link recovery to your email address, please check your
            email address
          </p>
          <Link href='/login'>
            <a className='button w-full' data-cy='link-login'>
              LOGIN
            </a>
          </Link>
        </div>
      ) : (
        <div>
          <p style={{ marginBottom: "20px" }}>
            Enter your email address associated with your account and we&apos;ll
            send you a link to reset your password
          </p>

          <label htmlFor='email'>
            <span>E-mail</span>
            <input
              type='email'
              name='email'
              className='input'
              data-cy='forgot-email'
              id='email'
              placeholder='johndoe@gmail.com'
              value={forgotpass.email}
              onChange={changeInput}
              required
            />
            {isEmailNotValid && (
              <span
                className='input-notif input-notif--error'
                data-cy='forgot-email-error'
              >
                Email is not valid
              </span>
            )}
          </label>

          <button
            type='submit'
            className='button w-full'
            data-cy='forgot-submit'
            disabled={!isEmailValid(forgotpass.email)}
          >
            {isSubmitted ? "Loading..." : "SENT RECOVER LINK"}
          </button>
        </div>
      )}

      {notif.type === "error" ? (
        <Modal show={notif.isShow}>
          <div className='text-center'>
            <h1 className='modal__title'>Invalid</h1>
            <p>{notif.message}</p>
            <div className='modal__button'>
              <button
                className='button w-full'
                data-cy='modal-close'
                onClick={() => setNotif(initNotif)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </form>
  );
};

export default ForgotPasswordForm;
