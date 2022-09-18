import { useProgressiveImage } from 'hooks';

export default function BannerImage(props) {
  const loaded = useProgressiveImage(props?.url);

  return (
    <div
      className={
        'w-full h-full bg-center bg-no-repeat bg-cover lg:img-hover-scale lg:bannerImg' +
        (props.classnames ? ` ${props?.classnames}` : '')
      }
      style={{
        ...(props.styles ? props.styles : {}),
        backgroundImage: `url(${loaded || ''})`,
        backgroundColor: 'lightgray',
      }}
    />
  );
}
