import React from 'react'
import Image from 'next/image'

export default function Logo(props) {
  const scale = props.scale ?? 1
  return (
    <div 
      className={"flex justify-start items-center"}
      style={props.style || {}}
      >
        <Image 
          src="/img/logo.svg" 
          width={150*scale}
          height={39*scale}
          alt="logo"
        />
    </div>
  );
}
