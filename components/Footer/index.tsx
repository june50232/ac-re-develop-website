import React from 'react';
import { MdPhoneInTalk, MdOutlineMail } from 'react-icons/md';
import NavList from 'common/nav';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer data-aos="fade-up">
      <section
        className="lg:flex hidden flex-col w-10/12 h-80 justify-center space-y-10 items-center"
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
        <div className="w-full justify-start">
          <ul className="flex space-x-6">
            {NavList.map(({ title, url }) => (
              <li key={title} className={'flex h-8'}>
                <Link href={url}>
                  <a className="flex self-stretch items-center text-sm tracking-tight font-bold text-secondary-light">
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-secondary-lightest text-sm">
            Copyright © {new Date().getFullYear()} by AC Re Services Co., Ltd.
            All Rights Reserved.
          </p>
        </div>
      </section>
      <section
        className="lg:hidden w-screen py-12 space-y-3 flex flex-col items-center"
        id="footer-mobile"
      >
        <div className="flex w-11/12  items-center justify-evenly pb-6">
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
        <ul className="w-10/12">
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
        <div className="flex flex-col text-base text-secondary-light w-10/12 space-y-2">
          <p>AC Re Services Co., Ltd.</p>
          <p>
            9F.-5, No. 63, Sec. 2, Chang&apos;an East Rd.,
            <br />
            Taipei 104097, Taiwan
          </p>
          <p>Fax: +886-2-2508-1348</p>
        </div>
        <p className="flex text-secondary-lightest text-7xl text-center w-10/12 pt-6">
          Copyright © {new Date().getFullYear()} by AC Re Services Co., Ltd. All
          Rights Reserved.
        </p>
      </section>
    </footer>
  );
}
