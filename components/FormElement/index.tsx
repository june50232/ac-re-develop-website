import React from 'react';
import { 
  FcOk,
  FcServices 
} from 'react-icons/fc'
import { Mailto } from 'components'

export const _SubmitButton = ({
  isEnabled,
  children,
  isLoading,
  ...restProps
}) => {
  let stateClassname = 'bg-amber-500 cursor-pointer px-24';
  if (!isEnabled) {
    stateClassname =
      'bg-secondary-lightest text-white cursor-not-allowed px-24';
  } else if (isLoading) {
    stateClassname =
      'bg-secondary-lightest text-white cursor-not-allowed flex px-12';
  }
  return (
    <button
      className={`py-3 ${stateClassname}`}
      disabled={!isEnabled || isLoading}
      {...restProps}
    ><h3 className={stateClassname}>
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 mr-3 text-white"
            viewBox="0 0 24 24"
          >
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Please wait, don&apos;t reload this page. Processing...
        </>
      ) : (
        children
      )}
      </h3>
    </button>
  );
};

export const _Grid = ({ fullWidth, children, ...restProps }) => {
  return (
    <div 
      className={fullWidth ? "mb-6" : ""}
      {...restProps}
    >
      {children}
    </div>
  )
}

interface LabelProps {
  isError: boolean;
  name: string;
  required: boolean;
  title: string;
  description?: any;
}

export const _Label = ({ isError, required, title, description, ...restProps }: LabelProps) => {
  return (
    <label
      className="block mb-2"
      {...restProps}
    >
      <h3 className={[
          "font-normal leading-loose",
          isError ? 'text-red-700' : 'text-gray-900',
        ].join(' ')}>
        {title}&nbsp;{description && '-'}&nbsp;{description && description}
        {required && <span className="text-red-500">*</span>}
      </h3>
    </label>
  );
};

export const _Title = (props) => {
  return (
    <span className="text-lg w-[12rem] leading-loose">
      {props.title}
      {props.required && <span className="text-red">*</span>}
    </span>
  );
};

export const _Input = ({ isError, ...restProps }) => {
  return (
    <input
      className={
        isError
        ? "font-light bg-red-50 border border-red-500 text-red-900 placeholder-red-700 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-loose"
        : "font-light bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-loose"
      }
      maxLength={255}
      {...restProps}
    />
  );
};

export const _InputFile = ({ isError, ...restProps }) => {
  return (
    <input
      className={
        isError
        ? "font-light block w-full text-red-900 border border-red-300 rounded-lg cursor-pointer bg-red-50 focus:outline-none p-2.5 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-loose"
        : "font-light block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2.5 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-loose"
      }
      maxLength={255}
      aria-describedby="user_avatar_help"
      {...restProps}
    />
  );
};

export const _IconInput = ({ isError, type, ...restProps }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {type === 'email' && <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>}
        {type === 'tel' && <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>}
      </div>
      <input
        className={[
          "block w-full pl-10 p-2.5",
          isError
          ? "font-light bg-red-50 border border-red-500 text-red-900 placeholder-red-700 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-loose"
          : "font-light bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-loose"
        ].join(' ')}
        maxLength={255}
        {...restProps}
      />
    </div>
  );
};

export const _Textarea = ({ isError, ...restProps }) => {
  return (
    <textarea
      className={isError 
        ? "font-light block p-2.5 w-full text-red-900 bg-red-50 rounded-lg border border-red-300 focus:ring-red-500 focus:border-red-500 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-loose"
        : "font-light block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-loose"
      }
      maxLength={10000}
      {...restProps}
    />
  );
};

interface ErrorMsgProps {
  title?: string;
  errorMsg?: any;
}

export const _ErrorMsg = ({
  title,
  errorMsg,
  ...restProps
}: ErrorMsgProps) => {
  return (
    <h3
      {...restProps}
      className={"font-light leading-loose mt-2 text-red-600"}
    >
      {errorMsg || `${title} is required.`}
    </h3>
  );
};

interface AfterSubmitProps {
  isSuccess: boolean;
  onClick: () => void;
  formName: string;
}

export const _AfterSubmitCard = ({ isSuccess, onClick, formName }: AfterSubmitProps) => {
  return (
    <div
      className="flex flex-col w-4/6 h-[30rem] space-y-6 justify-center items-center relative border border-gray-200 rounded-lg shadow-md"
      data-aos="flip-left"
    >
      {isSuccess 
      ? (
        <>
          <FcOk fontSize="3rem" />
          <h1
            className="text-primary-darker font-normal leading-relaxed" 
          >
            Submit successfully
          </h1>
          <h2
            className="font-light text-secondary text-center leading-relaxed"
          >
            {formName === 'career' && (
              <>
              Thank you for your interest in AC Re. 
              <br/>
              We are happy you took the time to complete the form, 
              <br/>
              and we look forward to reviewing your application.
              </>
            )}
            {formName === 'contact' && (
              <>
              Thank you for getting in touch with AC Re. 
              <br/>
              We appreciate you contacting us, 
              <br/>
              and we will get back in touch with you soon.
              </>
            )}
          </h2>
          <NarrowButton 
            text={formName === 'career' ? "Request another applying" : "Send another message"}
            onClick={() => onClick()}
          />
        </>
      )
      : (
        <>
          <FcServices fontSize="3rem" />
          <h1
            className="font-normal leading-relaxed text-red-600" 
          >
            Submit failed
          </h1>
          <h2
            className="font-light text-red-600 text-center leading-relaxed"
          >
            {formName === 'career' && (
              <>
              We are sorry that our system is currently blocked.
              <br/>
              Please send request via <Mailto type="career">hr@ac-re.com.tw</Mailto>
              <br/>
              and we look forward to reviewing your application.
              </>
            )}
            {formName === 'contact' && (
              <>
              We are sorry that our system is currently blocked.
              <br/>
              Please send request via <Mailto>info@ac-re.com.tw</Mailto>
              <br/>
              and we will get back in touch with you soon.
              </>
            )}
          </h2>
          <NarrowButton 
            text="Retry again"
            onClick={() => onClick()}
          />
        </>
      )
      }
    </div>
  )
} 

const NarrowButton = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className='flex space-x-3 justify-center items-center retry-button'>
      <h3 className='leading-relaxed text-blue-700 cursor-pointer font-light'>{text}</h3>
      <button type="button">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Icon description</span>
      </button>
    </div>
  )
}
