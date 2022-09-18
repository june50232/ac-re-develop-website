import React from 'react';
import { MdPhoneInTalk, MdOutlineMail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer>
      <section
        className="lg:flex hidden w-10/12 h-80 justify-center items-center"
        id="footer-laptop"
      >
        <div className="flex justify-center items-center w-full">
          <div className="flex grow">
            <a className="flex">
              <MdPhoneInTalk color="#A0DDFE" fontSize="1.5rem" />
              <h5>+886-2-2508-0488</h5>
            </a>
            <a className="flex">
              <MdOutlineMail color="#A0DDFE" fontSize="1.5rem" />
              <h5>info@ac-re.com.tw</h5>
            </a>
          </div>
          <div className="flex flex-col">
            <p>AC Re Services Co., Ltd.</p>
            <p>
              9F.-5, No. 63, Sec. 2, Chang&apos;an East Rd.,
              <br />
              Taipei 104097, Taiwan
            </p>
            <p>Fax: +886-2-2508-1348</p>
          </div>
        </div>
      </section>
      <section
        className="lg:hidden w-screen py-12"
        id="footer-mobile"
      ></section>
    </footer>
  );
}
