import React, { useRef } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import Link from 'next/link';
import NavList from 'common/nav';
import { Logo } from '../';

export default function Header() {
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const toggleNav = () => {
    if (navRef?.current && headerRef?.current) {
      navRef.current?.classList?.toggle('open');
      headerRef.current?.classList?.toggle('open');
    }
  };

  return (
    <header
      className="fixed top-0 left-0 z-10 bg-white shadow-lg w-screen h-16 flex pt-8 pb-6 pl-11 pr-6 justify-center"
      ref={headerRef}
    >
      <section className="relative inline-flex w-full inline-flex justify-between items-center">
        <Link href="">
          <Logo
            style={{
              marginTop: '-15px',
            }}
          />
        </Link>
        <nav
          className="mainMenu md:flex hidden justify-end grow"
          ref={navRef}
          data-aos="fade-down"
        >
          <ul className="flex flex-wrap px-0 mb-0 list-none space-x-3 items-center">
            {NavList.map(({ title, url }) => (
              <li
                key={title}
                className={'flex menu-hover-line relative px-1 h-8'}
              >
                <Link
                  href={url}
                  className="flex self-stretch items-center font-light"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={toggleNav}
          className="hamburger-button md:hidden inline-flex items-center h-7 space-x-1.5"
          data-aos="fade-down"
        >
          <CgMenuLeft className="text-lg hamburger-button-icon" />
          <span className="text-xs font-bold">MENU</span>
        </div>
      </section>
    </header>
  );
}
