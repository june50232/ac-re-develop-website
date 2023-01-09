import React from 'react';
import { MdPhoneInTalk, MdOutlineMail } from 'react-icons/md';
import NavList from 'common/nav';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="overflow-hidden">
      <section
        className="md:flex hidden flex-col w-10/12 h-48 justify-center space-y-3 items-center"
        id="footer-laptop"
      >
        <div
          className="flex justify-center items-center w-full space-x-12"
          data-aos="fade-up"
        >
          <a
            className="flex justify-center items-center space-x-2"
            href="tel:+886225080488"
          >
            <MdPhoneInTalk
              color="#A0DDFE"
              fontSize="2rem"
              style={{
                transform: 'rotate(25deg)',
              }}
            />
            <h4 className='hover:text-primary-light'>
              +886-2-2508-0488
            </h4>
          </a>
          <a
            className="flex justify-center items-center space-x-2"
            href="mailto:info@ac-re.com.tw"
          >
            <MdOutlineMail color="#A0DDFE" fontSize="2rem" />
            <h4 className='hover:text-primary-light'>
              info@ac-re.com.tw
            </h4>
          </a>
        </div>
        <hr className="w-full block bottom-light-gray" data-aos="fade-up" />
        <div className="w-full justify-center items-center" data-aos="fade-up">
          <h5 className="text-secondary-lightest text-center">
            Copyright © {new Date().getFullYear()} by AC Re Services Co., Ltd.
            All Rights Reserved.
          </h5>
        </div>
      </section>
      <section
        className="md:hidden w-screen py-12 space-y-3 flex flex-col items-center"
        id="footer-mobile"
      >
        <div
          className="flex w-11/12  items-center justify-evenly pb-6"
          data-aos="fade-up"
        >
          <a className="" href="tel:+886225080488">
            <MdPhoneInTalk
              color="#A0DDFE"
              fontSize="5rem"
              style={{
                transform: 'rotate(25deg)',
              }}
            />
          </a>
          <a className="" href="mailto:info@ac-re.com.tw">
            <MdOutlineMail color="#A0DDFE" fontSize="5rem" />
          </a>
        </div>
        <ul className="w-10/12" data-aos="fade-up">
          {NavList.map(({ title, url }) => (
            <li key={title} className={'h-8'}>
              <Link href={url}>
                <a className="text-base tracking-tight font-bold text-secondary-light">
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <h5
          className="flex font-light text-secondary-lightest text-center w-10/12 pt-6"
          data-aos="fade-up"
        >
          Copyright © {new Date().getFullYear()} by AC Re Services Co., Ltd. All
          Rights Reserved.
        </h5>
      </section>
    </footer>
  );
}
