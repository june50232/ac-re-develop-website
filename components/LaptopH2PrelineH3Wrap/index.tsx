const LaptopH2PrelineH3Wrap = (props) => {
  return (
    <h2
      className={props.classnames}
      data-aos={props.noFadeEffect ? '' : 'fade-up'}
    >
      {props.children}
    </h2>
  );
};

export default LaptopH2PrelineH3Wrap;
