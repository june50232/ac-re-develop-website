import React from 'react';
import { MdPhoneInTalk, MdOutlineMail } from 'react-icons/md';
import NavList from 'common/nav';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <section
        className="lg:flex hidden flex-col w-10/12 h-80 justify-around items-center"
        id="footer-laptop"
      >
        <div className="flex justify-center items-center w-full space-x-2">
          <div className="flex grow space-x-6">
            <a
              className="flex justify-center items-center space-x-2"
              href="tel:+886225080488"
            >
              <MdPhoneInTalk
                color="#A0DDFE"
                fontSize="1.5rem"
                style={{
                  transform: 'rotate(25deg)',
                }}
              />
              <h5 className="xl:text-2xl lg:text-xl font-bold text-primary-dark">
                +886-2-2508-0488
              </h5>
            </a>
            <a
              className="flex justify-center items-center space-x-2"
              href="mailto:info@ac-re.com.tw"
            >
              <MdOutlineMail color="#A0DDFE" fontSize="1.5rem" />
              <h5 className="xl:text-2xl lg:text-xl font-bold text-primary-dark">
                info@ac-re.com.tw
              </h5>
            </a>
          </div>
          <div className="flex flex-col text-sm text-secondary-light">
            <p>AC Re Services Co., Ltd.</p>
            <p>
              9F.-5, No. 63, Sec. 2, Chang&apos;an East Rd.,
              <br />
              Taipei 104097, Taiwan
            </p>
            <p>Fax: +886-2-2508-1348</p>
          </div>
        </div>
        <hr className="w-full block bottom-light-gray" />
        <div>
          <ul className="flex">
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
        </div>
      </section>
      <section
        className="lg:hidden w-screen py-12"
        id="footer-mobile"
      ></section>
    </footer>
  );
}
