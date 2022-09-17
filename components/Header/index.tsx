import React, { useRef } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import Link from 'next/link';
import NavList from 'common/nav';
import { Logo } from '../';

export default function Header() {
  const navRef = useRef(null);
  const headerRef = useRef(null);

  const toggleNav = () => {
    if (navRef?.current && headerRef?.current) {
      navRef.current.classList.toggle('open');
      headerRef.current.classList.toggle('open');
    }
  };

  return (
    <header
      className="absolute top-0 left-0 z-[1] bg-white w-screen lg:w-[42%] h-22 flex pt-8 pb-6 pl-11 pr-6 justify-center"
      ref={headerRef}
    >
      <section className="relative inline-flex w-full inline-flex justify-between items-center">
        <Logo
          style={{
            marginTop: '-15px',
          }}
        />
        <nav
          className="mainMenu md:flex lg:hidden 2xl:flex hidden justify-end grow"
          ref={navRef}
        >
          <ul className="flex flex-wrap px-0 mb-0 list-none space-x-3 items-center">
            {NavList.map(({ title, url }) => (
              <li
                key={title}
                className={'flex menu-hover-line relative px-1 h-8'}
              >
                <Link href={url}>
                  <a className="flex self-stretch items-center text-sm tracking-tight">
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={toggleNav}
          className="hamburger-button md:hidden lg:inline-flex 2xl:hidden inline-flex items-center h-7 space-x-1.5"
        >
          <CgMenuLeft className="text-lg hamburger-button-icon" />
          <span className="text-xs font-bold">MENU</span>
        </div>
      </section>
    </header>
  );
}
