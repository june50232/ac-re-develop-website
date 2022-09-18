import React from 'react';
import { MdPhoneInTalk, MdOutlineMail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer>
      <section className="lg:flex w-10/12 hidden" id="footer-laptop">
        <a>
          <MdPhoneInTalk />
          <h5>+886-2-2508-0488</h5>
        </a>
        <a>
          <MdOutlineMail />
          <h5>info@ac-re.com.tw</h5>
        </a>
        <div>
          <p>AC Re Services Co., Ltd.</p>
          <p>
            9F.-5, No. 63, Sec. 2, Chang&apos;an East Rd.,
            <br />
            Taipei 104097, Taiwan
          </p>
          <p>Fax: +886-2-2508-1348</p>
        </div>
      </section>
      <section
        className="lg:hidden w-screen py-12"
        id="footer-mobile"
      ></section>
    </footer>
  );
}
