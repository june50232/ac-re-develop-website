import React from 'react';

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
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export const _Label = ({ widthFull, children, ...restProps }) => {
  return (
    <label
      className={[
        'flex flex-col h-auto justify-start items-start mr-8',
        widthFull ? 'w-full' : 'w-[44%]',
      ].join(' ')}
      {...restProps}
    >
      {children}
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

export const _Input = ({ error, ...restProps }) => {
  return (
    <input
      className={`flex grow rounded-lg text-lg w-full ${
        error
          ? 'border-red border-2 focus:border-red focus:ring-none'
          : 'border-none focus:border-none'
      }`}
      maxLength={255}
      {...restProps}
    />
  );
};

export const _Textarea = ({ error, ...restProps }) => {
  return (
    <textarea
      className={`flex grow rounded-lg w-full ${
        error
          ? 'border-red border-2 focus:border-red focus:ring-none'
          : 'border-none focus:border-none'
      }`}
      maxLength={10000}
      {...restProps}
    />
  );
};

export const _ErrorMsg = ({ error, title, ...restProps }) => {
  return (
    <p
      {...restProps}
      className={`text-red leading-loose ${error ? '' : 'invisible'}`}
    >
      {title} is required.
    </p>
  );
};
