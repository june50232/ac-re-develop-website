import React from 'react'
import useWindowSize from 'common/useWindowSize'

const BannerImage = (props) => {
  const { width } = useWindowSize();
  const imgPrefix = width < 768 ? './mobileImg' : './img'
  return (
    <div
      className={[
        'w-full h-full bg-center bg-no-repeat bg-cover lg:bannerImg',
        props.classnames ? ` ${props?.classnames}` : '',
        !props.noHoverEffect ? 'lg:img-hover-scale' : '',
      ].join(' ')}
      style={{
        ...(props.styles ? props.styles : {}),
        backgroundImage: `url(${imgPrefix}${props?.url})`,
      }}
    />
  );
}

export default BannerImage
