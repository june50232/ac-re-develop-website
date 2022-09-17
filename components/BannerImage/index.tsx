export default function BannerImage(props) {
  return (
    <div
      className={
        'w-full h-full bg-center bg-no-repeat bg-cover' +
        (props.classnames ? ` ${props?.classnames}` : '')
      }
      style={{
        ...(props.styles ? props.styles : {}),
        backgroundImage: `url(${props?.url})`,
      }}
    />
  );
}
