import React from 'react';
import { 
  FcOk,
  FcServices 
} from 'react-icons/fc'

export const _SubmitButton = ({
  isEnabled,
  children,
  isLoading,
  ...restProps
}) => {
  let stateClassname = 'bg-neutral-500 cursor-pointer px-24';
  if (!isEnabled) {
    stateClassname =
      'bg-secondary-lightest text-white cursor-not-allowed px-24';
  } else if (isLoading) {
    stateClassname =
      'bg-secondary-lightest text-white cursor-not-allowed flex px-12';
  }
  return (
    <button
      className={`text-lg  py-3 font-semibold ${stateClassname}`}
      disabled={!isEnabled || isLoading}
      {...restProps}
    >
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
          Please wait. Processing...
        </>
      ) : (
        children
      )}
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
  title: string
}

export const _Label = ({ isError, name, required, title, ...restProps }: LabelProps) => {
  return (
    <label
      htmlFor={name}
      className="block mb-2"
      {...restProps}
    >
      <p className={[
          "text-lg flex whitespace-nowrap leading-loose",
          isError ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white',
        ].join(' ')}>
        {title}
        {required && <span className="text-red">*</span>}
      </p>
    </label>
  );
};

export const _Title = (props) => {
  return (
    <p className="text-lg w-[12rem] flex whitespace-nowrap leading-loose">
      {props.title}
      {props.required && <span className="text-red">*</span>}
    </p>
  );
};

export const _Input = ({ isError, ...restProps }) => {
  return (
    <input
      className={
        isError
        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-lg rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        : "bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
        ? "block w-full text-lg text-red-900 border border-red-300 rounded-lg cursor-pointer bg-red-50 focus:outline-none p-2.5"
        : "block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2.5"
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
        {type === 'email' && <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>}
        {type === 'tel' && <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>}
      </div>
      <input
        className={[
          "block w-full pl-10 p-2.5",
          isError
          ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-lg rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
          : "bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        ? "block p-2.5 w-full text-sm text-red-900 bg-red-50 rounded-lg border border-red-300 focus:ring-red-500 focus:border-red-500"
        : "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      }
      maxLength={10000}
      {...restProps}
    />
  );
};

interface ErrorMsgProps {
  title?: string;
  errorMsg?: string;
}

export const _ErrorMsg = ({
  title,
  errorMsg,
  ...restProps
}: ErrorMsgProps) => {
  return (
    <p
      {...restProps}
      className={"leading-loose mt-2 text-red-600 dark:text-red-500"}
    >
      {errorMsg || `${title} is required.`}
    </p>
  );
};

interface AfterSubmitProps {
  isSuccess: boolean;
  onClick: () => void;
}

export const _AfterSubmitCard = ({ isSuccess, onClick }: AfterSubmitProps) => {
  return (
    <div
      className="flex flex-col w-4/6 h-[30rem] space-y-6 justify-center items-center relative border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      data-aos="flip-left"
    >
      {isSuccess 
      ? (
        <>
          <FcOk fontSize="3rem" />
          <h5
            className="text-2xl text-primary-darker leading-relaxed" 
          >
            Submit successfully
          </h5>
          <p
            className="text-lg font-light text-secondary text-center leading-relaxed"
          >
            Thank you for your interest in AC Re. 
            <br/>
            We are happy you took the time to complete the form, 
            <br/>
            and we look forward to reviewing your application.
          </p>
          <NarrowButton 
            text="Request another applying"
            onClick={() => onClick()}
          />
        </>
      )
      : (
        <>
          <FcServices fontSize="3rem" />
          <h5
            className="text-2xl leading-relaxed text-red-600" 
          >
            Submit failed
          </h5>
          <p
            className="text-lg font-light text-red-600 text-center leading-relaxed"
          >
            We are sorry that our system is currently blocked.
            <br/>
            Please send request via hr@ac-re.com.tw,
            <br/>
            and we look forward to reviewing your application.
          </p>
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
      <p className='leading-relaxed text-lg text-blue-700 cursor-pointer'>{text}</p>
      <button type="button">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Icon description</span>
      </button>
    </div>
    // <button onClick={onClick} type="button" className="leading-relaxed text-lg font-light text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //     {text}
    //     <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    // </button>
  )
}
