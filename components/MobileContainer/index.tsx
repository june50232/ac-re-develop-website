export default function MobileContainer(props) {
  return (
    <div
      className={
        'w-full relative flex items-center justify-center' +
        (props.classnames ? ` ${props?.classnames}` : '')
      }
      data-aos={props.isFadeUp ? 'fade-up' : ''}
    >
      {props.children}
    </div>
  );
}
