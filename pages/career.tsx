import React, { useState, useContext } from 'react';
import {
  Section,
  GradientBg,
  BannerImage,
  LaptopH2PrelineH3Wrap,
  _SubmitButton,
  _Label,
  _Title,
  _Input,
  _Textarea,
  _ErrorMsg,
} from 'components';
import { careerTeamImgUrl, careerCareImgUrl } from 'common/imgUrls';
import { attachEmail } from 'lib/api.js';

const initValues = {
  title: '',
  name: '',
  mobile: '',
  email: '',
  role: '',
  coverLetter: '',
  resume: '',
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
  coverLetter: false,
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
  const [state, setState] = useState(initState);

  return (
    <>
      <Section
        classname="h-80"
        style={{
          background: 'rgba(255, 247, 237, 0.85)',
        }}
      >
        <div
          className="h-full w-full flex flex-col justify-center items-center space-y-5"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold">Join us!</h2>
          <hr className="w-8 text-neutral-500" />
          <h3 className="text-lg font-light text-secondary text-left leading-relaxed w-2/3 indent-8 leading-relaxed">
            AC Re has been continually expanding by adding new talent.
            We&apos;re looking for motivated individuals who would like to grow
            within a dynamic and friendly environment. We welcome diverse
            talents in every aspect to make up a prosperous team.
          </h3>
        </div>
      </Section>
      <Section classname="h-[30rem]">
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
            <div
              className="text-lg text-secondary font-light space-y-5 indent-8 leading-relaxed"
              data-aos="fade-up"
            >
              We are a united team full of highly talented and enthusiastic
              people. We appreciate the uniqueness of each individual and the
              values they bring. AC Re is committed to creating a workspace and
              culture that makes our employees feel safe and comfortable while
              continuing to grow with the company.
            </div>
          </div>
        </div>
      </Section>

      <Section classname="h-[30rem]">
        <div
          className="w-[58%] h-full flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <div className="h-3/6 w-9/12 flex flex-col justify-evenly space-y-10">
            <LaptopH2PrelineH3Wrap>What we care about</LaptopH2PrelineH3Wrap>
            <div
              className="text-secondary font-light space-y-5 text-lg indent-8 leading-relaxed"
              data-aos="fade-up"
            >
              The foundation of our success is integrity, diversity, and
              client-driven. We encourage individuals to express different
              perspectives and we worship teamworking. Using our professionalism
              and expertise, we are dedicated to servicing our clients across
              all industries and providing best solutions for them. Our goal is
              to go beyond traditional insurance brokers and make positive
              impacts across the industry.
            </div>
          </div>
        </div>
        <aside className="w-[42%] h-full overflow-hidden relative rounded-tl-3xl">
          <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
          <BannerImage url={careerCareImgUrl} />
        </aside>
      </Section>

      <Section
        className="relative flex flex-col justify-evenly items-center space-y-2 h-[65rem]"
        style={{
          background: 'rgba(255, 247, 237, 0.85)',
        }}
      >
        <div
          className="h-50 w-full flex flex-col justify-center items-center space-y-5 relative"
          data-aos="fade-up"
        >
          <h5 className="text-2xl text-center text-primary-darker  leading-relaxed">
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
            <span className="border-b-8 border-neutral-300 border-solid leading-4 inline-block">
              employment application form
            </span>{' '}
            below.
          </h5>
          <hr className="w-8 text-neutral-500" data-aos="fade-up" />
          <h5
            className="text-lg font-light text-secondary text-center leading-relaxed"
            data-aos="fade-up"
          >
            Thank you for expressing your interest in joining AC Re.
            <br />
            Please complete the details below and upload your CV.
          </h5>
        </div>
        <FormContext.Provider
          value={{
            state,
            setState: (val) => setState(val),
          }}
        >
          <div
            className="flex flex-wrap w-4/6 h-[36rem] justify-between items-center"
            data-aos="fade-up"
          >
            <Field
              name="title"
              title="Title"
              required
              placeholder="Mr., Miss, Ms., Mrs."
            />
            <Field name="name" title="Name" required />
            <Field name="mobile" title="Phone" type="number" required />
            <Field name="email" title="Email" required type="email" />
            <Field
              name="role"
              title="Type of role you’d like to apply"
              widthFull
            />
            <Field
              name="resume"
              title="CV upload (choose a file)"
              type="file"
              required
              widthFull
            />
            <Field
              name="coverLetter"
              title="Cover Letter (choose a file)"
              type="file"
              widthFull
            />
            <div className="w-full h-auto flex justify-end items-center mr-8">
              <SubmitButton />
            </div>
          </div>
        </FormContext.Provider>
      </Section>
    </>
  );
}

interface TextInputProps {
  widthFull?: boolean;
  title: string;
  required?: boolean;
  typeArea?: boolean;
  name: string;
  type?: string;
  placeholder?: string;
  isFile?: boolean;
}

const Field = ({
  widthFull = false,
  title = '',
  required = false,
  typeArea = false,
  name,
  type = 'text',
  placeholder = '',
}: TextInputProps) => {
  const { state, setState } = useContext(FormContext);
  const { values, errors, isLoading, errorMsg } = state;
  const currentValue = values[name];

  const handleChange = ({ target }) => {
    let val = target.value ? target.value.trim() : '';
    let files = {};
    let currentErrorMsg = '';
    let errorMsg = {};
    if (type === 'file') {
      if (target.files.length) {
        const size = !!target.files[0].size ? target.files[0].size / 1024 : 0;
        if (size > 200) {
          currentErrorMsg = 'file size should <= 200k';
        }
      }
      files = {
        [target.name]: target.files.length ? target.files[0] : '',
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
    const isError = (!currentValue && required) || !!errorMsg[target.name];

    setState((prev: FormStateInterface) => ({
      ...prev,
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
    <_Label widthFull={widthFull}>
      <_Title title={title} required={required} />
      {!typeArea && (
        <_Input
          error={errors[name]}
          type={type}
          onChange={handleChange}
          value={currentValue}
          name={name}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={isLoading}
        />
      )}
      {typeArea && (
        <_Textarea
          error={errors[name]}
          onChange={handleChange}
          value={currentValue}
          name={name}
          onBlur={handleBlur}
          disabled={isLoading}
        />
      )}
      <_ErrorMsg error={errors[name]} title={title} errorMsg={errorMsg[name]} />
    </_Label>
  );
};

const SubmitButton = () => {
  const { state, setState } = useContext(FormContext);
  const { values, errors, isLoading, files } = state;
  const isEnabled = Object.values(errors).every((v) => v === false);

  const handleSubmit = async () => {
    setState((prev: FormStateInterface) => ({
      ...prev,
      isLoading: true,
    }));

    let formData = new FormData();

    formData.append('data', JSON.stringify(values));

    for (const [, value] of Object.entries(files)) {
      if (value) {
        formData.append('files', value);
      }
    }

    await attachEmail(formData);
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
