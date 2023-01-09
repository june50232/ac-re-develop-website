const LaptopH2PrelineH3Wrap = (props) => {
  return (
    <h1
      className={[props.classnames, 'leading-relaxed'].join(' ')}
      data-aos={props.noFadeEffect ? '' : 'fade-up'}
    >
      {props.children}
    </h1>
  );
};

export default LaptopH2PrelineH3Wrap;
