import React from 'react';

export default function Footer() {
  return (
    <footer>
      <section className="lg:flex w-screen hidden" id="footer-laptop"></section>
      <section
        className="lg:hidden w-screen py-12"
        id="footer-mobile"
      ></section>
    </footer>
  );
}
