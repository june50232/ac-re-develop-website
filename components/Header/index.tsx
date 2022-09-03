import React from 'react'
import Link from 'next/link'
import NavList from 'common/nav'

import { Logo } from '../'

export default function Header() {
  return (
      <header className="w-screen h-32 inline-flex py-9 px-14">
        <div className="flex justify-start items-center">
          <Logo />
        </div>
        <nav className="flex justify-end grow underLaptop:hidden">
          <ul className="flex flex-wrap px-0 mb-0 list-none space-x-8 items-stretch">
            {NavList.map(({title, url}) => (
              <li 
                key={title}
                className={"flex menu-hover-line relative px-1.5"}
              >
                <Link 
                  href={url}
                >
                  <a
                    className="flex self-stretch tracking-widest items-center font-extrabold text-lg"
                  >{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* TODO: 900 window width to mobile */}
      </header>
  );
}
