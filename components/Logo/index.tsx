import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <>
        <div className="w-14">
            <Image 
                src="/img/icon.svg" 
                width={56}
                height={41}
                alt="logo"
            />
        </div>
        <h3
            className="text-2xl mx-2.5 tracking-wider mt-5"
        >AC Re</h3>
    </>
  );
}
