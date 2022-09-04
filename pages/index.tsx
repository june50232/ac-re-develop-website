import React from 'react'
import { 
  CanvasVideo, 
  LogoIcon 
} from 'components';

export default function Main() {

  return (
    <>
      <section id="banner-section">
      <a target="_blank" href="https://www.istockphoto.com/video/beautiful-building-architecture-city-life-in-taipei-taiwan-gm1161758889-318437607">
        <div className="relative">
          <CanvasVideo
          //https://www.istockphoto.com/video/beautiful-building-architecture-city-life-in-taipei-taiwan-gm1161758889-318437607
            src="https://media.istockphoto.com/videos/beautiful-building-architecture-city-life-in-taipei-taiwan-video-id1161758889"
            // src="https://acre-website.s3.ap-northeast-1.amazonaws.com/videos/city-video2.mp4"
          />
          <div
            className="absolute text-5xl text-white top-1/3 w-screen pl-12"
          >
            <h1>Welcome to <span
              className="text-5xl inline-block align-top text-left max-w-screen-sm"
            >Asia Capital Reinsurance <br/><span
              className="text-5xl"
              style={{
                borderBottom: '3px double white',
                lineHeight: '1.1em'
              }}
            >Service Corportation Limited.</span>
            <br/>
            </span>
            </h1>
          </div>
        </div>
        </a>
      </section>
      <section className="bg-slate-200 flex flex-col album" id="why-ac-re-section">
        <div className="relative flex justify-center w-screen h-72 flex-col">
          <div className="flex texture-bg justify-center">
            <h3 className="text-5xl">Why  <LogoIcon scale={1.2} />  AC Re</h3>
          </div>
        </div>
        <ul
          className="flex flex-row flex-nowrap justify-between"
        >
          <li className="img-bg img-meeting relative">
            <a className="absolute top-0 bottom-0 left-0 right-0" target="_blank" href="https://www.shutterstock.com/zh/image-photo/business-man-open-hand-ready-seal-215547460" />
          </li>
          <li className="flex grow justify-center bg-slate-100 img-texture hover-effect1 texture-bg">
            <p className="text-xl"><LogoIcon scale={0.5} /> AC Re always acts in the client’s best interest and represents you rather than a single insurance company, you can trust you’ll be receiving unbiased information and recommendations.</p>
          </li>
          <li className="flex grow justify-center bg-slate-50 img-texture hover-effect1 texture-bg">
          <p className="text-xl">We supports you by giving you technical advice that can be very useful if you need to make a claim.</p>
          </li>
        </ul>
        <ul
          className="flex flex-row flex-nowrap justify-between"
        >
          <li className="flex grow justify-center bg-slate-50 img-texture hover-effect1 texture-bg">
          <p className="text-xl">We also help you identify your risks and manage them by offering a customized insurance and risk management program, where we design the policies, negotiate the terms with insurance companies and help you find the most appropriate cover perfectly tailored to your unique needs at fair prices.</p>
          </li>
          <li className="img-bg img-handsshake">
          <a className="absolute top-0 bottom-0 left-0 right-0" target="_blank" href="https://www.istockphoto.com/photo/businessman-and-woman-shake-hands-after-a-successful-job-interview-gm1184002726-333113878?phrase=DOF%20bussiness" />
          </li>
        </ul>
      </section>

      <section className="bg-slate-200 flex flex-col album" id="core-value-section">
        <div className="relative flex justify-center w-screen h-72 flex-col">
          <div className="flex texture-bg justify-center">
            <h3 className="text-5xl">Core <LogoIcon rotate={180} />alue</h3>
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
                  <a className="flex justify-center" target="_blank" href="https://www.shutterstock.com/zh/image-photo/closeup-image-businessman-drawing-graphbusiness-strategy-328738163">
                    <h5 className="text-white z-[2] text-2xl">Professional Service</h5>
                  </a>
                </li>
                <li 
                onClick={() => {
                  window.open('https://www.shutterstock.com/zh/image-illustration/stand-out-crowd-dominos-business-leadership-1975784561')
                }}
                className="img-forward-thinking hover-effect2 flex justify-end img-subscri-effect">
                  <a className="flex justify-center" target="_blank" href="https://www.shutterstock.com/zh/image-illustration/stand-out-crowd-dominos-business-leadership-1975784561">
                    <h5 className="text-white z-[2] text-2xl">Forward-Thinking</h5>
                  </a>
                </li>
                <li 
                className="img-sustain hover-effect2 flex justify-end img-subscri-effect"
                onClick={() => {
                  window.open('https://www.shutterstock.com/zh/image-photo/eco-architecture-green-tree-glass-office-2042679986')
                }}
                >
                  <a className="flex justify-center" target="_blank" href="https://www.shutterstock.com/zh/image-photo/eco-architecture-green-tree-glass-office-2042679986">
                    <h5 className="text-white z-[2] text-2xl">Sustainable Future</h5>
                  </a>
                </li>
            </ul>
        </div>
      </section>

    </>
  );
}
