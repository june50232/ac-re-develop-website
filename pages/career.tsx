import React, { useState, useContext } from 'react';
import {
  Section,
  GradientBg,
  BannerImage,
  LaptopH2PrelineH3Wrap,
  _SubmitButton,
  _Label,
  _Input,
  _ErrorMsg,
  _AfterSubmitCard,
  _Grid,
  _IconInput,
  _InputFile,
  Spinner,
} from 'components';
import { careerTeamImgUrl, careerCareImgUrl } from 'common/imgUrls';
import { sendCareerForm } from 'common/api.js';

const requiredField = [
  'title',
  'name',
  'mobile',
  'email'
]

const initValues = {
  title: '',
  name: '',
  mobile: '',
  email: '',
  role: '',
  coverLetter: '',
  resume: '',
  resumeInputType: 'file',
  coverLetterInputType: 'file',
};
const initTouched = {
  title: false,
  name: false,
  mobile: false,
  email: false,
  role: false,
  coverLetter: false,
  resume: false,
};
const initErrors = {
  title: null,
  name: null,
  mobile: null,
  email: null,
  role: false,
  coverLetter: null,
  resume: null,
};

const initErrorMsg = {
  coverLetter: '',
  resume: '',
};

const initState = {
  values: initValues,
  touched: initTouched,
  errors: initErrors,
  files: {
    resume: null,
    coverLetter: null,
  },
  isLoading: false,
  errorMsg: initErrorMsg,
  isSubmitSuccess: false,
  isSubmitFail: false,
};

interface FormStateInterface {
  values: {
    title: string;
    name: string;
    mobile: string;
    email: string;
    role: string;
    coverLetter: any;
    resume: any;
    resumeInputType: string;
    coverLetterInputType: string;
  };
  touched: {
    title: boolean;
    name: boolean;
    mobile: boolean;
    email: boolean;
    role: boolean;
    coverLetter: boolean;
    resume: boolean;
  };
  errors: {
    title: boolean | null;
    name: boolean | null;
    mobile: boolean | null;
    email: boolean | null;
    role: boolean | null;
    coverLetter: boolean | null;
    resume: boolean | null;
  };
  files: {
    coverLetter: any;
    resume: any;
  };
  isLoading: boolean;
  errorMsg: {
    coverLetter: string;
    resume: string;
  };
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

export default function Career() {
  const [state, setState] = useState<FormStateInterface>(initState);
  const {
    values,
    isLoading,
    isSubmitSuccess,
    isSubmitFail,
  } = state

  const handleFileType = (name, type): void => {
    if (values[`${name}InputType`] === type) return
    
    setState((prev: FormStateInterface) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: initValues[name],
        [`${name}InputType`]: type,
      },
      files: {
        ...prev.files,
        [name]: initState.files[name],
      },
    }));
  }

  const renderFileLink = ({name, type, title}) => (
    <span 
      className={`${values[`${name}InputType`] !== type && 'text-blue-500 hover:text-blue-700 cursor-pointer'}`}
      {...values[`${name}InputType`] !== type ? {
        onClick: () => handleFileType(name, type)
      } : {}}
    >{title}</span>
  )

  return (
    <>
      <Section
        classname="h-96"
        style={{
          background: 'rgba(255, 247, 237, 0.85)',
        }}
      >
        <div
          className="h-full w-full flex flex-col justify-center items-center space-y-5"
          data-aos="fade-up"
        >
          <h1>Join us!</h1>
          <hr className="w-8 text-amber-500" />
          <h3 className="font-light text-secondary text-left w-2/3 indent-8 leading-relaxed">
            AC Re has been continually expanding by adding new talent.
            We&apos;re looking for motivated individuals who would like to grow
            within a dynamic and friendly environment. We welcome diverse
            talents in every aspect to make up a prosperous team.
          </h3>
        </div>
      </Section>
      <Section classname="h-[32rem]">
        <aside className="w-[42%] h-full overflow-hidden relative rounded-br-3xl">
          <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
          <BannerImage url={careerTeamImgUrl} />
        </aside>
        <div
          className="w-[58%] h-full flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <div className="h-3/6 w-10/12 flex flex-col justify-evenly space-y-10">
            <LaptopH2PrelineH3Wrap>Our Team</LaptopH2PrelineH3Wrap>
            <h3
              className="text-secondary font-light space-y-5 indent-8 leading-relaxed"
              data-aos="fade-up"
            >
              We are a united team full of highly talented and enthusiastic
              people. We appreciate the uniqueness of each individual and the
              values they bring. AC Re is committed to creating a workspace and
              culture that makes our employees feel safe and comfortable while
              continuing to grow with the company.
            </h3>
          </div>
        </div>
      </Section>

      <Section classname="h-[36rem]">
        <div
          className="w-[58%] h-full flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <div className="h-3/6 w-9/12 flex flex-col justify-evenly space-y-10">
            <LaptopH2PrelineH3Wrap>What we care about</LaptopH2PrelineH3Wrap>
            <h3
              className="text-secondary font-light space-y-5 indent-8 leading-relaxed"
              data-aos="fade-up"
            >
              The foundation of our success is integrity, diversity, and
              client-driven. We encourage individuals to express different
              perspectives and we worship teamworking. Using our professionalism
              and expertise, we are dedicated to servicing our clients across
              all industries and providing best solutions for them. Our goal is
              to go beyond traditional insurance brokers and make positive
              impacts across the industry.
            </h3>
          </div>
        </div>
        <aside className="w-[42%] h-full overflow-hidden relative rounded-tl-3xl">
          <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
          <BannerImage url={careerCareImgUrl} />
        </aside>
      </Section>

      <Section
        className="relative flex flex-col justify-evenly items-center space-y-10 py-20"
        style={{
          background: 'rgba(255, 247, 237, 0.85)',
        }}
      >
        <div
          className="h-50 w-full flex flex-col justify-center items-center space-y-5 relative"
          data-aos="fade-up"
        >
          <h2 className="text-center text-primary-darker leading-relaxed">
            If you&apos;re interested in joining our team,
            <br />
            then please get in touch with us via{' '}
            <a
              href="mailto:hr@ac-re.com.tw"
              rel="noopener noreferrer"
              className="text-primary-darkGray"
            >
              hr@ac-re.com.tw
            </a>
            ,
            <br />
            or by completing the{' '}
            <span className="border-b-8 border-amber-300 border-solid leading-4 inline-block">
              employment application form
            </span>{' '}
            below.
          </h2>
          <hr className="w-8 text-amber-500" data-aos="fade-up" />
          <h2
            className="font-light text-secondary text-center leading-relaxed"
            data-aos="fade-up"
          >
            Thank you for expressing your interest in joining AC Re.
            <br />
            Please complete the details below and upload your CV.
          </h2>
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
                formName="career"
              />
            : 
            <div
              className="w-4/6 relative"
              data-aos="fade-up"
            >
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <Field
                  name="title"
                  title="Title"
                  type="text"
                  placeholder="Mr., Miss, Ms., Mrs."
                />
                <Field 
                  name="name" 
                  title="Name" 
                  type="text"
                />
                <Field 
                  name="mobile" 
                  title="Phone" 
                  type="tel" 
                />
                <Field 
                  name="email" 
                  title="Email" 
                  type="email" 
                />
              </div>
              <Field
                name="role"
                title="Type of role you’d like to apply"
                type="text"
                fullWidth
              />
              {[{
                title: 'CV',
                name: 'resume',
              }, {
                title: 'Cover Letter',
                name: 'coverLetter',
              }].map(({name, title}, i) => (
                <Field
                  key={i}
                  name={name}
                  title={title}
                  description={<>
                    {renderFileLink({name, title: 'upload (size smaller than 200k)', type: 'file'})}
                    &nbsp;or&nbsp;
                    {renderFileLink({name, title: 'by link', type: 'text'})}
                  </>}
                  type={values[`${name}InputType`]}
                  placeholder={values[`${name}InputType`] === 'text' ? 'google drive link or onedrive link（public）' : ''}
                  fullWidth
                />
              ))}
              <div className="w-full h-auto flex justify-end items-center mt-8">
                <SubmitButton />
              </div>
              {isLoading && <Spinner/>}
            </div>
          }   
        </FormContext.Provider>
      </Section>
    </>
  );
}

interface TextInputProps {
  fullWidth?: boolean;
  title: string;
  description?: any;
  name: string;
  type?: string;
  placeholder?: string;
}

const Field = ({
  fullWidth = false,
  title = '',
  description = '',
  name,
  type = 'text',
  placeholder = '',
}: TextInputProps) => {
  const required = requiredField.includes(name)
  const { state, setState } = useContext(FormContext);
  const { values, errors, isLoading, errorMsg } = state;
  const currentValue = values[name];
  const isError = !!errors[name]

  const handleChange = ({ target }) => {
    let val = target.value || '';
    let files = {};
    let currentErrorMsg: any = '';
    let errorMsg = {};
    if (type === 'file') {
      if (target.files.length) {
        const size = !!target.files[0].size ? target.files[0].size / 1024 : 0;
        if (size > 200) {
          currentErrorMsg = <>File is greater than 200k, please send it via <a href="mailto:hr@ac-re.com.tw" className="font-light text-blue-600 hover:underline">hr@ac-re.com.tw</a></>;
        }
      }
      files = {
        [target.name]: (!!target.files.length && !currentErrorMsg) ? target.files[0] : '',
      };
      errorMsg[target.name] = currentErrorMsg;
    }
    const isError = (!val && required) || !!errorMsg[target.name];

    setState((prev: FormStateInterface) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: val,
      },
      errors: {
        ...prev.errors,
        [target.name]: isError,
      },
      files: {
        ...prev.files,
        ...files,
      },
      errorMsg: {
        ...prev.errorMsg,
        ...errorMsg,
      },
    }));
  };

  const handleBlur = ({ target }) => {
    const val = currentValue ? currentValue.trim() : ''
    const isError = (!val && required) || !!errorMsg[target.name];

    setState((prev: FormStateInterface) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: val,
      },
      touched: {
        ...prev.touched,
        [target.name]: true,
      },
      errors: {
        ...prev.errors,
        [target.name]: isError,
      },
    }));
  };

  return (
    <_Grid
      fullWidth={fullWidth}
    >
      <_Label isError={isError} name={name} title={title} description={description} required={required} />
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
      {['file'].includes(type) && (
        <_InputFile 
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
      {isError && <_ErrorMsg title={title} errorMsg={errorMsg[name]} />} 
    </_Grid>
  );
};

const SubmitButton = () => {
  const { state, setState } = useContext(FormContext);
  const { values, errors, isLoading, files } = state;
  let isEnabled = true;

  for (const [name, value] of Object.entries(errors)) {
    if (value !== false && requiredField.includes(name)) {
      isEnabled = false
    }
  }

  const handleSubmit = () => {
    setState((prev: FormStateInterface) => ({
      ...prev,
      isLoading: true,
    }));

    let formData = new FormData();
    let filteredValues = {}

    for (const [name, value] of Object.entries(values)) {
      if (!!value && !errors[name]) {
        filteredValues[name] = value
      }
    }   

    formData.append('data', JSON.stringify(filteredValues));

    for (const [name, value] of Object.entries(files)) {
      if (!!value && !errors[name]) {
        formData.append('files', value);
      }
    }

    sendCareerForm(formData)
      .then(() => {
        setState((prev: FormStateInterface) => ({
          ...prev,
          isLoading: false,
          isSubmitSuccess: true,
        }));
      })
      .catch(() => {
        setState((prev: FormStateInterface) => ({
          ...prev,
          isLoading: false,
          isSubmitFail: true,
        }));
      })
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