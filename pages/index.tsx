import React from 'react';
import { BannerImage, Button } from 'components';

const MobileContainer = (props) => {
  return (
    <div
      className={
        'w-full relative flex items-center justify-center' +
        (props.classnames ? ` ${props?.classnames}` : '')
      }
    >
      {props.children}
    </div>
  );
};

export default function Home() {
  const globalImgUrl = '/static/img/global.png';
  const globalDottedImgUrl = '/static/img/dotted-map.png';

  return (
    <>
      <section
        className="lg:inline-flex w-screen lg:flex-row hidden"
        id="banner-laptop"
      >
        <div className="w-full lg:w-[42%] h-screen flex justify-center items-center">
          <div className="h-80 space-y-16">
            <h1 className="text-5xl font-extrabold">
              AC Re Services
              <br />
              Co., Ltd.
            </h1>
            <p className="text-secondary-lighter">
              We’re enabling a better,
              <br />
              <span className="ml-20">
                more <i>efficient</i> Reinsurance service
              </span>
            </p>
            <div className="button-group space-x-3">
              <Button title="ABOUT US" classnames="bg-primary text-white" />
              <Button
                title="SERVICES"
                classnames="bg-primary-light text-white"
              />
            </div>
          </div>
        </div>
        <aside className="w-full lg:w-[58%] h-screen relative">
          <BannerImage url={globalImgUrl} />
          <Button
            title="CONTACT US"
            classnames="absolute right-5 top-8 bg-white"
          />
        </aside>
      </section>
      <section
        className="lg:hidden w-screen h-screen pt-24 flex flex-col justify-evenly"
        id="banner-mobile"
      >
        <MobileContainer>
          <BannerImage
            url={globalDottedImgUrl}
            classnames="absolute -z-[1] opacity-30"
          />
          <h1 className="text-3xl font-bold w-[180px] ml-16">
            AC Re
            <br />
            Services
            <br />
            Co., Ltd.
          </h1>
        </MobileContainer>
        <MobileContainer classnames="relative px-3  h-2/4">
          <BannerImage url={globalImgUrl} />
          <Button
            title="CONTACT US"
            classnames="absolute right-8 top-8 bg-white text-7xl"
          />
        </MobileContainer>
        <MobileContainer classnames="px-3 space-x-1.5">
          <p className="text-secondary-lighter">
            We’re enabling a better, more <i>efficient</i> Reinsurance service
          </p>
          <Button
            title="ABOUT"
            classnames="bg-primary text-white text-7xl"
            px="5"
          />
          <Button
            title="SERVICES"
            classnames="bg-primary-light text-white text-7xl"
            px="5"
          />
        </MobileContainer>
      </section>

      {/* 
      <section className="bg-slate-200 flex flex-col album" id="why-ac-re-section">
        
        <div className="relative flex justify-center w-screen h-72 flex-col">
          <div className="flex texture-bg justify-center">
            <h3 className="text-5xl">Why <LogoIcon scale={1.2} /> <span className="logo-font text-5xl">AC Re</span></h3>
          </div>
        </div>
       

        <ul
          className="flex flex-row flex-nowrap justify-between"
        >
          <li className="img-meeting flex-none w-5/12"></li>
          <li className="flex flex-grow">
          <p className="text-2xl"><LogoIcon scale={0.5} /> AC Re always acts in the client’s best interest and represents you rather than a single insurance company, you can trust you’ll be receiving unbiased information and recommendations.</p>
          </li>
        </ul>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li></li>
          <li></li>
        </ul>

        {/* 
        <ul
          className="flex flex-row flex-nowrap justify-between"
        >
          <li className="img-bg img-meeting relative">
            <a className="absolute top-0 bottom-0 left-0 right-0" rel="noreferrer" target="_blank" href="https://www.shutterstock.com/zh/image-photo/business-man-open-hand-ready-seal-215547460" />
          </li>
          <li className="flex grow justify-center bg-slate-100 img-texture hover-effect1 texture-bg">
            <p className="text-2xl"><LogoIcon scale={0.5} /> AC Re always acts in the client’s best interest and represents you rather than a single insurance company, you can trust you’ll be receiving unbiased information and recommendations.</p>
          </li>
          <li className="flex grow justify-center bg-slate-50 img-texture hover-effect1 texture-bg">
          <p className="text-2xl">We support you by giving you technical advice that can be very useful if you need to make a claim.</p>
          </li>
        </ul>
        <ul
          className="flex flex-row flex-nowrap justify-between"
        >
          <li className="flex grow justify-center bg-slate-50 img-texture hover-effect1 texture-bg">
          <p className="text-2xl">We also help you identify your risks and manage them by offering a customized insurance and risk management program, where we design the policies, negotiate the terms with insurance companies and help you find the most appropriate cover perfectly tailored to your unique needs at fair prices.</p>
          </li>
          <li className="img-bg img-handsshake">
          <a className="absolute top-0 bottom-0 left-0 right-0" rel="noreferrer" target="_blank" href="https://www.istockphoto.com/photo/businessman-and-woman-shake-hands-after-a-successful-job-interview-gm1184002726-333113878?phrase=DOF%20bussiness" />
          </li>
        </ul>
      </section>

      <section className="bg-slate-200 flex flex-col album" id="core-value-section">
        <div className="relative flex justify-center w-screen h-72 flex-col">
          <div className="flex texture-bg justify-center">
            {/* <h3 className="text-5xl">Core <LogoIcon rotate={180} />alue</h3> 
          </div>
        </div>
        <div className="texture-bg relative">
            <ul className="flex mb-32 space-x-8 px-8">
                <li 
                  className="img-professional hover-effect2 flex justify-end img-subscri-effect"
                  onClick={() => {
                    window.open('https://www.shutterstock.com/zh/image-photo/closeup-image-businessman-drawing-graphbusiness-strategy-328738163')
                  }}
                  >
                  <a className="flex justify-center" rel="noreferrer" target="_blank" href="https://www.shutterstock.com/zh/image-photo/closeup-image-businessman-drawing-graphbusiness-strategy-328738163">
                    <h5 className="text-white z-[2] text-3xl">Professional Service</h5>
                  </a>
                </li>
                <li 
                onClick={() => {
                  window.open('https://www.shutterstock.com/zh/image-illustration/stand-out-crowd-dominos-business-leadership-1975784561')
                }}
                className="img-forward-thinking hover-effect2 flex justify-end img-subscri-effect img-subscri-effect-no-hover">
                  <a className="flex justify-center" rel="noreferrer" target="_blank" href="https://www.shutterstock.com/zh/image-illustration/stand-out-crowd-dominos-business-leadership-1975784561">
                    <h5 className="text-white z-[2] text-3xl">Forward Thinking</h5>
                  </a>
                </li>
                <li 
                className="img-sustain hover-effect2 flex justify-end img-subscri-effect"
                onClick={() => {
                  window.open('https://www.shutterstock.com/zh/image-photo/eco-architecture-green-tree-glass-office-2042679986')
                }}
                >
                  <a className="flex justify-center" rel="noreferrer" target="_blank" href="https://www.shutterstock.com/zh/image-photo/eco-architecture-green-tree-glass-office-2042679986">
                    <h5 className="text-white z-[2] text-3xl">Sustainable Future</h5>
                  </a>
                </li>
            </ul>
        </div>
      </section>
 */}
    </>
  );
}
