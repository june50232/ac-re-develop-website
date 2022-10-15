import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HTMLHead, Header, Footer } from '../';

export default function Layout(props) {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 8,
      delay: 50,
    });
    // AOS.refresh({
    //   duration: 3000,
    //   offset: 8
    // });
  }, []);

  return (
    <div className="min-h-screen py-0">
      <HTMLHead />
      <Header />
      <main className="pt-16 flex flex-col">{props.children}</main>
      <Footer />
    </div>
  );
}
