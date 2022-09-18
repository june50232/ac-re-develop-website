import React from 'react';

function Button(props) {
  return (
    <button
      className={
        (props.classnames ? `${props?.classnames} ` : '') +
        (props.px ? `px-${props.px} ` : 'px-7 ') +
        (props.py ? `py-${props.py} ` : 'py-3 ') +
        'rounded-full text-xs font-extrabold'
      }
      type="button"
      onClick={() => {
        // 導頁
      }}
      data-aos={props.isFadeUp ? 'fade-up' : ''}
    >
      {props?.title}
    </button>
  );
}

export default Button;
