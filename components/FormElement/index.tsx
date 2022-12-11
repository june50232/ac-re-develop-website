import React from 'react';

export const _SubmitButton = ({ isEnabled, children, ...restProps }) => {
  return (
    <button
      className={`text-lg px-24 py-3 font-semibold ${
        !isEnabled
          ? 'bg-secondary-lightest text-white cursor-not-allowed'
          : 'bg-neutral-500 cursor-pointer'
      }`}
      disabled={!isEnabled}
      {...restProps}
    >
      {children}
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
