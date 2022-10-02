import { useProgressiveImage } from 'hooks';
import { loadingImgUrl } from 'common/imgUrls';

export default function BannerImage(props) {
  const loaded = useProgressiveImage(props?.url);

  return (
    <div
      className={[
        'w-full h-full bg-center bg-no-repeat bg-cover lg:bannerImg',
        props.classnames ? ` ${props?.classnames}` : '',
        !props.noHoverEffect ? 'lg:img-hover-scale' : '',
      ].join(' ')}
      style={{
        ...(props.styles ? props.styles : {}),
        backgroundImage: `url(${loaded || loadingImgUrl})`,
        backgroundColor: 'lightgray',
      }}
    />
  );
}
