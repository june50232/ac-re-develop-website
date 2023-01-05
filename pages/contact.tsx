import React, { useState, useContext } from 'react';
import {
  Section,
  GradientBg,
  BannerImage,
  GoogleMap,
  _SubmitButton,
  _Label,
  _Input,
  _Textarea,
  _ErrorMsg,
  _AfterSubmitCard,
  _Grid,
  _IconInput,
  Spinner,
} from 'components';
import { contactBannerImgUrl } from 'common/imgUrls';
import {
  FcPhoneAndroid,
  FcDepartment,
  FcPrint,
  FcFeedback,
} from 'react-icons/fc';
import { sendContactForm } from 'common/api.js';

const initValues = {
  name: '',
  company: '',
  mobile: '',
  email: '',
  subject: '',
  message: '',
};
const initTouched = {
  name: false,
  company: false,
  mobile: false,
  email: false,
  subject: false,
  message: false,
};
const initErrors = {
  name: null,
  company: false,
  mobile: false,
  email: null,
  subject: false,
  message: null,
};

const initState = {
  values: initValues,
  touched: initTouched,
  errors: initErrors,
  isLoading: false,
  isSubmitSuccess: false,
  isSubmitFail: false,
};

interface FormStateInterface {
  values: {
    name: string;
    company: string;
    mobile: string;
    email: string;
    subject: string;
    message: string;
  };
  touched: {
    name: boolean;
    company: boolean;
    mobile: boolean;
    email: boolean;
    subject: boolean;
    message: boolean;
  };
  errors: {
    name: boolean | null;
    company: boolean | null;
    mobile: boolean | null;
    email: boolean | null;
    subject: boolean | null;
    message: boolean | null;
  };
  isLoading: boolean;
  isSubmitSuccess: boolean;
  isSubmitFail: boolean;
}

interface FormContextInterface {
  state: FormStateInterface;
  // eslint-disable-next-line no-unused-vars
  setState: (val: any) => void;
}

const FormContext = React.createContext<FormContextInterface>({
  state: initState,
  setState: () => {},
});

export default function Contact() {
  const [state, setState] = useState(initState);
  const {
    isLoading,
    isSubmitSuccess,
    isSubmitFail,
  } = state

  return (
    <>
      <Section classname="h-80">
        <GradientBg background="rgba(255, 247, 237, 0.85)" />
        <BannerImage url={contactBannerImgUrl} />
        <div
          className="absolute h-full w-full flex flex-col justify-center items-center space-y-5"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold">Get in touch with AC Re!</h2>
          <hr className="w-8 text-neutral-500" />
          <h3 className="text-lg font-light text-secondary leading-relaxed text-left w-2/3 indent-8">
            AC Re brings industry knowledge, expertise, and insight to design
            programs for your business&apos;s specific risks and needs. As
            strategic advisors, we build long-term partnerships with local and
            regional insurance companies to assure you have the protection you
            need.
          </h3>
        </div>
      </Section>
      <Section
        classname="h-80 grow flex items-center justify-center"
        data-aos="fade-up"
      >
        <div className="w-full h-3/6 flex justify-evenly items-start">
          <a
            href="https://www.google.com.tw/maps/place/10491%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E9%95%B7%E5%AE%89%E6%9D%B1%E8%B7%AF%E4%BA%8C%E6%AE%B563%E8%99%9F/@25.0485715,121.5315824,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a963cec3cdd7:0xd8de6f134ac1fbc2!8m2!3d25.0485715!4d121.5337711?hl=zh-TW"
            className="flex flex-col space-y-3 items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FcDepartment color="#A0DDFE" fontSize="3rem" />
            <div className="flex flex-col space-y-6 items-center">
              <h3 className="font-bold text-primary-darkest text-xl">
                Address
              </h3>
              <h5 className="text-lg font-light text-secondary leading-relaxed text-center">
                9F.-5, No. 63,
                <br /> Sec. 2, Chang&apos;an East Rd.,
                <br />
                Taipei 104097, Taiwan
              </h5>
            </div>
          </a>
          <a
            href="tel:886225080488"
            rel="noopener noreferrer"
            className="flex flex-col space-y-3 items-center"
          >
            <FcPhoneAndroid color="#A0DDFE" fontSize="3rem" />
            <div className="flex flex-col space-y-6 items-center">
              <h3 className="font-bold text-primary-darkest text-xl">Phone</h3>
              <h5 className="text-lg font-light text-secondary leading-relaxed text-center">
                +886-2-2508-0488
              </h5>
            </div>
          </a>
          <a
            href="mailto:1yuting.chiu@gmail.com?subject=Contact%20AC-Re&body=Your%20name%3A%20%0A%0ACompany%20name%3A%0A%0APhone%20number%3A%0A%0AMessage%3A%0A%0A"
            rel="noopener noreferrer"
            className="flex flex-col space-y-3 items-center"
          >
            <FcFeedback color="#A0DDFE" fontSize="3rem" />
            <div className="flex flex-col space-y-6 items-center">
              <h3 className="font-bold text-primary-darkest text-xl">Email</h3>
              <h5 className="text-lg font-light text-secondary leading-relaxed text-center">
                info@ac-re.com.tw
              </h5>
            </div>
          </a>
          <div className="flex flex-col space-y-3 items-center">
            <FcPrint color="#A0DDFE" fontSize="3rem" />
            <div className="flex flex-col space-y-6 items-center">
              <h3 className="font-bold text-primary-darkest text-xl">Fax</h3>
              <h5 className="text-lg font-light text-secondary leading-relaxed text-center">
                +886-2-2508-1348
              </h5>
            </div>
          </div>
        </div>
      </Section>
      <Section
        className="relative flex flex-col justify-evenly items-center space-y-10 py-20"
        style={{
          background: 'rgba(255, 247, 237, 0.85)',
        }}
      >
        <div
          className="h-40 w-full flex flex-col justify-center items-center space-y-5 relative"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-primary-darker">
            Need More Help?
          </h2>
          <hr className="w-8 text-neutral-500" />
          <h5 className="text-lg font-light text-secondary w-9/12 text-center leading-relaxed">
            Whether you are looking for specific solutions or have a question,{' '}
            <br />
            you can also connect with us via the{' '}
            <span className="border-b-8 border-neutral-300 border-solid leading-3 inline-block">
              contact form
            </span>{' '}
            below.
          </h5>
        </div>
        <FormContext.Provider
          value={{
            state,
            setState: (val) => setState(val),
          }}
        >
          {(isSubmitSuccess || isSubmitFail) 
            ?
              <_AfterSubmitCard 
                isSuccess={isSubmitSuccess}
                onClick={() => {
                  setState(initState);
                }}
              />
            : 
              <div
                className="relative w-4/6"
                data-aos="fade-up"
              >
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <Field title="Your name" required name="name" type="text" />
                  <Field title="Company name" name="company" type="text" />
                  <Field title="Email address" required name="email" type="email" />
                  <Field title="Phone number" name="mobile" type="tel" />
                </div>
                <Field title="Subject" fullWidth name="subject" type="textArea" />
                <Field title="Message" required fullWidth type="textArea" name="message" rows="4" />
                <div className="w-full h-auto flex justify-end items-center mr-8">
                  <SubmitButton />
                </div>
                {isLoading && <Spinner/>}
              </div>
          }
        </FormContext.Provider>
      </Section>
      <Section classname="h-96">
        <GoogleMap></GoogleMap>
      </Section>
    </>
  );
}

interface TextInputProps {
  fullWidth?: boolean;
  title: string;
  required?: boolean;
  name: string;
  type?: string;
  placeholder?: string;
  rows?: string;
}

const Field = ({
  fullWidth = false,
  title = '',
  required = false,
  name,
  type = 'text',
  placeholder = '',
  rows = '1'
}: TextInputProps) => {
  const { state, setState } = useContext(FormContext);
  const { values, errors, isLoading } = state;
  const currentValue = values[name];
  const isError = !!errors[name]
  
  const handleChange = ({ target }) => {
    const val = target.value ? target.value.trim() : '';
    setState((prev: FormStateInterface) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: val,
      },
      errors: {
        ...prev.errors,
        [target.name]: !val && required,
      },
    }));
  };

  const handleBlur = ({ target }) => {
    setState((prev: FormStateInterface) => ({
      ...prev,
      touched: {
        ...prev.touched,
        [target.name]: true,
      },
      errors: {
        ...prev.errors,
        [target.name]: !currentValue && required,
      },
    }));
  };

  return (
    <_Grid
      fullWidth={fullWidth}
    >
      <_Label isError={isError} name={name} title={title} required={required} />
      {type === 'text' && (
        <_Input
          isError={isError}
          type={type}
          onChange={handleChange}
          value={currentValue}
          name={name}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={isLoading}
          id={name}
        />
      )}
      {['email', 'tel'].includes(type) && (
        <_IconInput 
          isError={isError}
          type={type}
          onChange={handleChange}
          value={currentValue}
          name={name}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={isLoading}
          id={name}
        />
      )}
      {type === 'textArea' && (
        <_Textarea
          isError={isError}
          onChange={handleChange}
          value={currentValue}
          name={name}
          onBlur={handleBlur}
          disabled={isLoading}
          id={name}
          rows={rows}
        />
      )}
      {isError && <_ErrorMsg title={title} />} 
    </_Grid>
  );
};

const SubmitButton = () => {
  const { state, setState } = useContext(FormContext);
  const { values, errors, isLoading } = state;
  const isEnabled = Object.values(errors).every((v) => v === false);

  const handleSubmit = async () => {
    setState((prev: FormStateInterface) => ({
      ...prev,
      isLoading: true,
    }));

    await sendContactForm(values);
  };

  return (
    <_SubmitButton
      isEnabled={isEnabled}
      onClick={handleSubmit}
      isLoading={isLoading}
    >
      Submit
    </_SubmitButton>
  );
};
