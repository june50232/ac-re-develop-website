import React from 'react'
import Image from 'next/image'

export default function LogoIcon(props) {
  const scale = props.scale ?? 1
  const rotate = props.rotate ?? 0

  return (
    <Image 
        src="/img/icon.svg" 
        width={56*scale}
        height={41*scale}
        alt="logo"
        style={{
            transform: `rotate(${rotate}deg)`
        }}
    />
  );
}
