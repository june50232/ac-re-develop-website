const LaptopH2PrelineH3Wrap = (props) => {
  return (
    <div
      className={['h2-pre-line-wrap', props.classnames].join(' ')}
      data-aos={props.noFadeEffect ? '' : 'fade-up'}
    >
      <h2>{props.children}</h2>
    </div>
  );
};

export default LaptopH2PrelineH3Wrap;
