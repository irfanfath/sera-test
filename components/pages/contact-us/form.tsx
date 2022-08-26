import { FC, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Modal } from 'components/elements';
import { isEmailValid } from 'utils';
import IconSend from 'public/svg/icon-send.svg';

interface IContactForm {
  status: string;
  name: string;
  email: string;
  phone: string;
  ekyc: boolean;
  faceid: boolean;
  recod: boolean;
  message: string;
}

const initNotif = {
  isShow: false,
  type: '',
  message: '',
};

const initContact = {
  status: 'new',
  name: '',
  email: '',
  phone: '',
  ekyc: false,
  faceid: false,
  recod: false,
  message: '',
};

// const secretKey = '6LeZsJgeAAAAAGm2ABQN0dlAtFMJjp_wi-8w5X-v';

const ContactForm: FC = () => {
  // const recaptchaRef = useRef(null);
  const [notif, setNotif] = useState(initNotif);
  const [contact, setContact] = useState<IContactForm>(initContact);
  const [isSubmitted, setSubmitted] = useState(false);
  const isOneProductSelected = contact.ekyc || contact.faceid || contact.recod;
  const isEmailNotValid =
    contact.email.length > 0 && !isEmailValid(contact.email);
  const isNameNotValid = contact.name.length > 0 && contact.name.length < 3;
  const phoneIsNotValid = contact.phone.length > 0 && contact.phone.length < 12;
  const isMessageNotValid =
    contact.message.length > 0 && contact.message.length < 10;
  const isFilled =
    isNaN(+contact.phone) ||
    !contact.name ||
    !contact.email ||
    !contact.phone ||
    !contact.message ||
    !isOneProductSelected ||
    isEmailNotValid ||
    isNameNotValid ||
    isMessageNotValid ||
    phoneIsNotValid;

  const changeInput = (e: any) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const changeCheckbox = (e: any) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.checked,
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    // const token = await recaptchaRef?.current?.executeAsync();
    // console.log('onSubmit', token);

  //   if (token) {
  //     const formURL =
  //       'https://script.google.com/macros/s/AKfycbxZ9vvmk7zS4njoqj97vwKPmdNamG1-1b_amIGwjK_L7j_OK-wUYtW0tzmY3_xFBSoZ/exec';
  //     let formData = new FormData();
  //     let now: any = new Date();
  //     formData.append('TIMESTAMP', now);
  //     formData.append('STATUS', contact.status);
  //     formData.append('NAME', contact.name);
  //     formData.append('EMAIL', contact.email);
  //     formData.append('PHONE', contact.phone);
  //     formData.append('EKYC', contact.ekyc ? 'Yes' : '');
  //     formData.append('FACEID', contact.faceid ? 'Yes' : '');
  //     formData.append('RECOD', contact.recod ? 'Yes' : '');
  //     formData.append('MESSAGE', contact.message);

  //     try {
  //       await fetch(formURL, { method: 'POST', body: formData }).then(() => {
  //         setContact(initContact);
  //         setSubmitted(false);
  //         setNotif({
  //           isShow: true,
  //           type: 'Thank you for contacing Picaso',
  //           message: 'Our team will contact you as soon as possible',
  //         });
  //       });
  //     } catch (err: any) {
  //       setNotif({
  //         isShow: true,
  //         type: 'Ivalid',
  //         message: err.message,
  //       });
  //       setSubmitted(false);
  //     }
  //   }
  // };

  const formURL =
        'https://script.google.com/macros/s/AKfycbxZ9vvmk7zS4njoqj97vwKPmdNamG1-1b_amIGwjK_L7j_OK-wUYtW0tzmY3_xFBSoZ/exec';
      let formData = new FormData();
      let now: any = new Date();
      formData.append('TIMESTAMP', now);
      formData.append('STATUS', contact.status);
      formData.append('NAME', contact.name);
      formData.append('EMAIL', contact.email);
      formData.append('PHONE', contact.phone);
      formData.append('EKYC', contact.ekyc ? 'Yes' : '');
      formData.append('FACEID', contact.faceid ? 'Yes' : '');
      formData.append('RECOD', contact.recod ? 'Yes' : '');
      formData.append('MESSAGE', contact.message);

      try {
        await fetch(formURL, { method: 'POST', body: formData }).then(() => {
          setContact(initContact);
          setSubmitted(false);
          setNotif({
            isShow: true,
            type: 'Thank you for contacing Picaso',
            message: 'Our team will contact you as soon as possible',
          });
        });
      } catch (err: any) {
        setNotif({
          isShow: true,
          type: 'Ivalid',
          message: err.message,
        });
        setSubmitted(false);
      }
    }

  return (
    <form onSubmit={onSubmit} className="form-contact">
      <h2>What We Can Assist You With?</h2>
      <div className="row">
        <div className="col-12">
          <label htmlFor="name">
            <span>Name</span>
            <input
              type="text"
              name="name"
              className="input"
              data-cy="contact-input-name"
              id="name"
              placeholder="name"
              value={contact.name}
              onChange={changeInput}
              required
            />
            {isNameNotValid && (
              <span
                className="input-notif input-notif--error"
                data-cy="contact-input-name-error"
              >
                Username is not valid
              </span>
            )}
          </label>
        </div>

        <div className="col-6 md-col-12">
          <label htmlFor="email">
            <span>Email</span>
            <input
              type="email"
              name="email"
              className="input"
              data-cy="contact-input-email"
              id="email"
              placeholder="youremail@domain.com"
              value={contact.email}
              onChange={changeInput}
              required
            />
            {isEmailNotValid && (
              <span
                className="input-notif input-notif--error"
                data-cy="contact-input-email-error"
              >
                Email is not valid
              </span>
            )}
          </label>
        </div>

        <div className="col-6 md-col-12">
          <label htmlFor="phone">
            <span>Phone</span>
            <input
              type="tel"
              name="phone"
              className="input"
              id="phone"
              data-cy="contact-input-phone"
              placeholder="08123456789"
              maxLength={14}
              value={contact.phone}
              onChange={changeInput}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              required
            />
            {phoneIsNotValid && (
              <span
                className="input-notif input-notif--error"
                data-cy="contact-input-phone-error"
              >
                Phone number is not valid
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="form-contact__option">
        <h3>Choose services that you need!</h3>
        <span>( You can choose more than one )</span>

        <label htmlFor="ekyc">
          <input
            type="checkbox"
            name="ekyc"
            id="ekyc"
            checked={contact.ekyc}
            onChange={changeCheckbox}
          />
          &nbsp; Optical Character Recognition
        </label>

        <label htmlFor="faceid">
          <input
            type="checkbox"
            name="faceid"
            id="faceid"
            checked={contact.faceid}
            onChange={changeCheckbox}
          />
          &nbsp; Facial Recognition
        </label>

        <label htmlFor="recod">
          <input
            type="checkbox"
            name="recod"
            id="recod"
            checked={contact.recod}
            onChange={changeCheckbox}
          />
          &nbsp; Object Detection
        </label>
      </div>

      <label htmlFor="message">
        <textarea
          name="message"
          id="message"
          data-cy="contact-input-message"
          className="input"
          value={contact.message}
          onChange={changeInput}
          placeholder="Message"
          required
        ></textarea>
        {isMessageNotValid && (
          <span
            className="input-notif input-notif--error"
            data-cy="contact-input-message-error"
          >
            Message is not valid
          </span>
        )}
      </label>

      {/* <ReCAPTCHA
        ref={recaptchaRef}
        size="normal"
        sitekey="6LeQO5oeAAAAALLH9MSkDbCM0Ur-lSpR_ZQNGyVX"
      /> */}

      <button
        type="submit"
        className="button w-full"
        data-cy="contact-button-submit"
        disabled={isFilled || isSubmitted}
      >
        <IconSend /> &nbsp; {isSubmitted ? 'Loading...' : 'Send Message'}
      </button>

      {notif.type && (
        <Modal show={notif.isShow}>
          <div className="text-center">
            <h1 className="modal__title">{notif.type}</h1>
            <p>{notif.message}</p>
            <div className="modal__button">
              <button
                className="button w-full"
                data-cy="contact-button-close-modal"
                onClick={() => setNotif(initNotif)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </form>
  );
};

export default ContactForm;
