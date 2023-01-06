export default function BannerImage(props) {
  return (
    <div
      className={[
        'w-full h-full bg-center bg-no-repeat bg-cover lg:bannerImg',
        props.classnames ? ` ${props?.classnames}` : '',
        !props.noHoverEffect ? 'lg:img-hover-scale' : '',
      ].join(' ')}
      style={{
        ...(props.styles ? props.styles : {}),
        backgroundImage: `url(${props?.url})`,
      }}
    />
  );
}
