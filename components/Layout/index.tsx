import React from 'react'

import { 
  HTMLHead,
  Header, 
  Footer,
} from '../'

export default function Layout(props) {
  return (
    <div className="min-h-screen py-0">
      <HTMLHead />
      <Header />
      <main className="px-0">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
