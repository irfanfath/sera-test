import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "components/elements";
import { useRouter } from "next/router";
import queryString from "query-string";
import { resetPassword } from "api/auth";

interface IResetPass {
  password: string;
  confirm_password: string;
}

const initNotif = {
  isShow: false,
  type: "",
  message: "",
};

const ResetForm: FC = () => {
  const [reset, setReset] = useState<IResetPass>({
    password: "",
    confirm_password: "",
  });

  const [notif, setNotif] = useState(initNotif);
  const [isSended, setSended] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const isPasswordValid = reset.password.length >= 8;
  const isPassSame = reset.password === reset.confirm_password;
  const isFilled = !isPassSame || !isPasswordValid;

  const router = useRouter();
  const { code } = queryString.parse(router.asPath.split(/\?/)[1]);
  console.log(code);

  const changeInput = (e: any) => {
    e.preventDefault();
    setReset({ ...reset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    const payload = {
      password: reset.password,
      verification_code: code,
    };
    try {
      await resetPassword(payload).then((res: any) => {
        setNotif({
          isShow: true,
          type: "success",
          message: res.data.message,
        });
      });
      setSubmitted(false);
      setSended(true);
    } catch (err:any) {
      console.log(err);
      setNotif({
        isShow: true,
        type: "error",
        message: err.response
          ? err.response.data.message
          : "Cannot register, please try again laterooo.",
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
      <h3 className='auth-form__title'>Reset your password</h3>

      {isSended ? (
        <div>
          <h4>Succesful password reset!</h4>
          <p style={{ marginBottom: "60px" }}>
            You can now use your new password to login to your account
          </p>

          <Link href='/login'>
            <a className='button w-full' data-cy='link-login'>
              LOGIN
            </a>
          </Link>
        </div>
      ) : (
        <div>
          <label htmlFor='password'>
            <span>New Password</span>
            <input
              type='password'
              name='password'
              className='input'
              id='password'
              data-cy='reset-password'
              placeholder='new password'
              value={reset.password}
              onChange={changeInput}
              required
            />
            {reset.password.length > 1
              ? !isPasswordValid && (
                  <span
                    className='input-notif input-notif--error'
                    data-cy='reset-password-error'
                  >
                    Password length must be min. 8 characters
                  </span>
                )
              : null}
          </label>

          <label htmlFor='confirm_password'>
            <span>Confirm Password </span>
            <input
              type='password'
              name='confirm_password'
              className='input'
              id='confirm_password'
              data-cy='reset-confirm_password'
              placeholder='confirm password'
              value={reset.confirm_password}
              onChange={changeInput}
              required
            />
            {reset.confirm_password.length > 1
              ? !isPassSame && (
                  <span
                    className='input-notif input-notif--error'
                    data-cy='reset-confirm_password-error'
                  >
                    Password not match
                  </span>
                )
              : null}
          </label>

          <button
            type='submit'
            className='button w-full'
            disabled={isFilled || isSubmitted}
            data-cy='reset-submit'
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
                onClick={() => setNotif(initNotif)}
                data-cy='modal-close'
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </form>
  );
};

export default ResetForm;
