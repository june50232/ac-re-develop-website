import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { CgMenuLeft } from 'react-icons/cg';
import Link from 'next/link';
import NavList from 'common/nav';
import { Logo } from '../';

export default function Header() {
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const toggleNav = () => {
    if (navRef?.current && headerRef?.current) {
      navRef.current?.classList?.toggle('open');
      document.body.classList?.toggle('open');
    }
  };

  const handleMenuClick = (path) => {
    router.push(path)
    toggleNav()
  }

  return (
    <header
      className="fixed top-0 left-0 z-10 bg-white shadow-xl w-screen flex pt-7 pb-4 pl-11 pr-6 justify-center"
      ref={headerRef}
    >
      <section className="relative inline-flex w-full inline-flex justify-between items-center">
        <Link href="./" passHref>
          <a className="cursor-pointer" id="logo">
            <Logo
              style={{
                marginTop: '-15px',
              }}
            />
          </a>
        </Link>
        <nav
          className="mainMenu md:flex hidden justify-end grow"
          id="nav"
        >
          <ul className="flex flex-wrap px-0 mb-0 list-none space-x-3 items-center">
            {NavList.filter(o => !o.isMdNavHidden).map(({ title, url }) => (
              <li
                key={title}
                className={`flex menu-hover-line relative px-1 h-10 font-normal tracking-normal ${
                  router.asPath === url ? 'menu-line' : ''
                }`}
              >
                <Link href={url} passHref>
                  <a id={title.split(' ').join('')}>
                    <h4 className='font-normal leading-normal'>
                      {title}
                    </h4>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav> 
        <div
          onClick={toggleNav}
          className="hamburger-button md:hidden inline-flex items-center h-7 space-x-1.5"
          data-aos="fade-down"
          id="phone-button"
        >
          <CgMenuLeft className="text-lg hamburger-button-icon" />
          <span className="text-xs font-bold">MENU</span>
        </div>
      </section>
      <div
        className="md:hidden opacity-0 absolute top-[4.5rem] bg-white w-screen left-0 shadow-2xl divide-y divide-slate-200"
        ref={navRef}
        id="phone-nav"
      >
        {NavList.map(({ title, url }) => (
          <div
            key={title}
            className={`relative py-6 font-normal tracking-normal flex justify-center items-center ${
              router.asPath === url ? 'bg-default' : ''
            }`}
            id={title.split(' ').join('')}
            onClick={() => handleMenuClick(url)}
          >
            <h1 className={`font-normal leading-normal ${
              router.asPath === url ? 'text-white' : ''
            }`}>
              {title}
            </h1>
          </div>
        ))}
      </div> 
    </header>
  );
}
