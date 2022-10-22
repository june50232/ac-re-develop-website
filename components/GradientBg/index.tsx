const GradientBg = (props) => {
  return (
    <div
      className={[
        'absolute top-0 bottom-0',
        props.classnames || 'left-0 right-0',
      ].join(' ')}
      style={
        props?.background
          ? {
              background: props.background,
            }
          : {}
      }
    ></div>
  );
};

export default GradientBg;
