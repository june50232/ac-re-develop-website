import React from 'react'
import Image from 'next/image'

export default function Logo(props) {
  return (
    <div 
      className={"flex justify-start items-center"}
      style={props.style || {}}
      >
        <Image 
          src="/img/logo.svg" 
          width="150rem"
          height="39rem"
          alt="logo"
        />
    </div>
  );
}
