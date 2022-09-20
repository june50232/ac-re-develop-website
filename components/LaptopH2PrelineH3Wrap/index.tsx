const LaptopH2PrelineH3Wrap = (props) => {
  return (
    <>
      <div className="h2-pre-line-wrap" data-aos="fade-up">
        <h2>{props.h2}</h2>
      </div>
      <h3 data-aos="fade-up">{props.children}</h3>
    </>
  );
};

export default LaptopH2PrelineH3Wrap;
