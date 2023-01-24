import React from 'react';
import { MdPhoneInTalk, MdOutlineMail } from 'react-icons/md';
import NavList from 'common/nav';
import Link from 'next/link';
import { Mailto } from 'components'

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
            id="footer-phone"
          >
            <MdPhoneInTalk
              color="#A0DDFE"
              fontSize="2rem"
              style={{
                transform: 'rotate(25deg)',
              }}
            />
            <h4 className='hover:text-blue-600 hover:underline'>
              +886-2-2508-0488
            </h4>
          </a>
          <Mailto
            className="flex justify-center items-center space-x-2"
            from="footer"
          >
            <>
              <MdOutlineMail color="#A0DDFE" fontSize="2rem" />
              <h4 className='hover:text-blue-600 hover:underline'>
                info@ac-re.com.tw
              </h4>
            </>
          </Mailto>
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
          className="flex w-11/12  items-center justify-evenly pb-12"
          data-aos="fade-up"
        >
          <a href="tel:+886225080488">
            <MdPhoneInTalk
              color="#A0DDFE"
              fontSize="3.5rem"
              style={{
                transform: 'rotate(25deg)',
              }}
            />
          </a>
          <Mailto>
            <MdOutlineMail color="#A0DDFE" fontSize="3.5rem" />
          </Mailto>
        </div>
        <ul className="w-10/12 space-y-6" data-aos="fade-up">
          {NavList.map(({ title, url }) => (
            <li key={title} className={'h-8 text-center'}>
              <Link href={url}>
                <a className="tracking-tight font-bold text-secondary-light">
                  <h2>{title}</h2>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <h5
          className="font-light text-secondary-lightest text-center w-10/12 pt-6"
          data-aos="fade-up"
        >
          Copyright © {new Date().getFullYear()} by AC Re Services Co., Ltd. <span className='whitespace-nowrap'>All
          Rights Reserved.</span>
        </h5>
      </section>
    </footer>
  );
}
