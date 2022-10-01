const GradientBg = (props) => {
  return (
    <div
      className={[
        'absolute left-0 top-0 bottom-0 right-0',
        props.classnames || '',
      ].join(' ')}
      style={{
        background: props.background,
      }}
    ></div>
  );
};

export default GradientBg;
