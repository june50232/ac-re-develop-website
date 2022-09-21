import React from 'react';
import { BannerImage, Button, LaptopH2PrelineH3Wrap } from 'components';
import {
  globalImgUrl,
  globalDottedImgUrl,
  smileHandShakeImgUrl,
  globalNightImgUrl,
  esgImgUrl,
  professionImgUrl,
} from 'common/imgUrls';

const MobileContainer = (props) => {
  return (
    <div
      className={
        'w-full relative flex items-center justify-center' +
        (props.classnames ? ` ${props?.classnames}` : '')
      }
      data-aos={props.isFadeUp ? 'fade-up' : ''}
    >
      {props.children}
    </div>
  );
};

export default function Home() {
  const whyReason = [
    {
      title: 'AC Re represents you rather than a single insurance company',
      content:
        'you can trust you’ll be receiving unbiased information and recommendations.',
    },
    {
      title: 'We help you identify your risks and manage them',
      content: `By offering a customized insurance and risk management program,\n 
      where we design the policies, negotiate the terms with insurance companies\n  
      and help you find the most appropriate cover perfectly tailored to\n   
      your unique needs at fair prices.`,
    },
    {
      title: 'AC Re also supports you by giving you technical advice',
      content:
        'the technical advice can be very useful if you need to make a claim.',
    },
  ];
  const coreValue = [
    {
      title: 'PROFESSIONALISM',
      description: 'Professional Service',
      img: professionImgUrl,
    },
    {
      title: 'GLOBAL PERSPECTIVES',
      description: 'Forward-Thinking',
      img: globalNightImgUrl,
    },
    {
      title: 'ESG',
      description: 'Sustainable Future',
      img: esgImgUrl,
    },
  ];

  return (
    <>
      <section
        className="lg:inline-flex w-screen h-screen flex-row hidden"
        id="banner-laptop"
      >
        <div className="w-full w-[42%] h-full flex justify-center items-center">
          <div className="h-80 space-y-16" data-aos="fade-up">
            <h1 className="font-extrabold">
              AC Re Services
              <br />
              Co., Ltd.
            </h1>
            <p className="text-secondary-lighter">
              We’re enabling a better,
              <br />
              {/* <span className="ml-20"> */}
              more <i>efficient</i> Reinsurance service
              {/* </span> */}
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
        <aside className="w-full w-[58%] h-full relative overflow-hidden">
          <BannerImage url={globalImgUrl} />
          <Button
            title="CONTACT US"
            classnames="absolute right-5 top-8 bg-white"
            isFadeUp
          />
        </aside>
      </section>
      <section
        className="lg:hidden w-screen h-screen pt-24 flex flex-col justify-evenly"
        id="banner-mobile"
        data-aos="fade-up"
      >
        <MobileContainer classnames="overflow-hidden">
          <BannerImage
            url={globalDottedImgUrl}
            classnames="absolute -z-[1] opacity-25"
          />
          <h1 className="text-3xl font-bold w-[180px] ml-16">
            AC Re
            <br />
            Services
            <br />
            Co., Ltd.
          </h1>
        </MobileContainer>
        <MobileContainer classnames="relative px-3 h-2/4 overflow-hidden">
          <BannerImage url={globalImgUrl} />
          <Button
            title="CONTACT US"
            classnames="absolute right-8 top-8 bg-white text-7xl pl-5 pr-5"
            isFadeUp
          />
        </MobileContainer>
        <MobileContainer classnames="px-3 space-x-1.5">
          <p className="text-secondary-lighter">
            We’re enabling a better, more <i>efficient</i> Reinsurance service
          </p>
          <Button
            title="ABOUT"
            classnames="bg-primary text-white text-7xl pl-2 pr-2"
          />
          <Button
            title="SERVICES"
            classnames="bg-primary-light text-white text-7xl pl-2 pr-2"
          />
        </MobileContainer>
      </section>

      <section
        className="lg:inline-flex w-screen h-screen flex-row hidden"
        id="why-laptop"
      >
        <aside className="w-[42%] h-full overflow-hidden">
          <BannerImage url={smileHandShakeImgUrl} />
        </aside>
        <div className="w-[58%] h-full flex flex-col items-center justify-center">
          <div className="h-5/6 w-9/12 flex flex-col justify-evenly">
            <LaptopH2PrelineH3Wrap h2="WHY AC Re">
              <>
                AC Re always acts in the
                <br />
                client’s best interest
              </>
            </LaptopH2PrelineH3Wrap>
            <div className="text-secondary space-y-5">
              {whyReason.map(({ title, content }, i) => (
                <div key={title} className="flex space-x-16" data-aos="fade-up">
                  <div className="">
                    <div
                      className={`flex items-center justify-center order order-${
                        (i + 1) * 25
                      }`}
                    >
                      0{i + 1}
                    </div>
                  </div>
                  <div className="w-9/12">
                    <h4 className="font-semibold">{title}</h4>
                    <h5>{content}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden w-screen py-12 space-y-12" id="why-mobile">
        <MobileContainer classnames="flex-col">
          <BannerImage
            url={globalDottedImgUrl}
            classnames="absolute -z-[1] opacity-25 top-5 bottom-0"
            styles={{
              height: 'auto',
              backgroundPosition: 'top',
            }}
          />
          <h2 className="text-3xl mb-3" data-aos="fade-up">
            WHY AC Re
          </h2>
          <h5 className="text-secondary-light tracking-wide" data-aos="fade-up">
            AC Re always acts in the
            <br />
            client’s best interest
          </h5>
        </MobileContainer>
        <div className="text-secondary space-y-20 px-8 pt-12">
          {whyReason.map(({ title, content }, i) => (
            <div key={title} className="relative" data-aos="fade-up">
              <div className="absolute -z-[1] -left-7 -top-16">
                <div
                  className={`flex items-center justify-center order order-${
                    (i + 1) * 25
                  } mobile`}
                >
                  0{i + 1}
                </div>
              </div>
              <div className="pl-8 space-y-6">
                <h4 className="font-semibold font-subtitle">{title}</h4>
                <h5 className="text-base tracking-wide">{content}</h5>
              </div>
            </div>
          ))}
        </div>
        <MobileContainer classnames="px-3 h-80 overflow-hidden" isFadeUp>
          <BannerImage url={smileHandShakeImgUrl} />
        </MobileContainer>
      </section>

      <section
        className="lg:inline-flex w-screen h-screen flex-row hidden justify-center items-center"
        id="core-value-laptop"
      >
        <div className="h-5/6 w-10/12 flex flex-col justify-evenly relative">
          <div
            className="absolute -z-[1] top-2 -right-20 h-72 w-4/6"
            data-aos="fade-up"
          >
            <BannerImage
              url={globalDottedImgUrl}
              classnames="opacity-25"
              styles={{
                backgroundPosition: 'top',
              }}
            />
          </div>
          <LaptopH2PrelineH3Wrap h2="Our Core Value">
            Professionalism, Global Perspectives and ESG
          </LaptopH2PrelineH3Wrap>
          <div className="flex justify-between h-4/6 pt-10" data-aos="fade-up">
            {coreValue.map(
              ({
                title,
                description,
                img,
                //url, // TODO
              }) => (
                <a
                  className="w-[30%] h-full relative hover-scale-inner-img-effect"
                  key={title}
                  href="javascript:;"
                >
                  <div className="absolute coreValueLine"></div>
                  <div className="w-full h-[76%] overflow-hidden">
                    <BannerImage url={img} classnames="no-scale-effect" />
                  </div>
                  <div className="pt-5 pl-3 pb-11 relative">
                    <h5 className="text-secondary-dark font-bold">{title}</h5>
                    <p className="text-secondary-lightest">{description}</p>
                    <div className="absolute coreArrow"></div>
                  </div>
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="lg:hidden w-screen py-12 space-y-12"
        id="core-value-mobile"
      >
        <MobileContainer classnames="flex-col">
          <BannerImage
            url={globalDottedImgUrl}
            classnames="absolute -z-[1] opacity-25 top-5 bottom-0"
            styles={{
              height: 'auto',
              backgroundPosition: 'top',
            }}
          />
          <h2 className="text-3xl mb-3" data-aos="fade-up">
            Core Value
          </h2>
          <h5 className="text-secondary-light tracking-wide" data-aos="fade-up">
            Professionalism, Global
            <br />
            Perspectives and ESG
          </h5>
        </MobileContainer>
        <div className="flex flex-col text-secondary space-y-12 px-8 pt-10">
          {coreValue.map(
            ({
              title,
              description,
              img,
              //url, // TODO
            }) => (
              <a
                className="w-full relative"
                key={title}
                href="javascript:;"
                data-aos="fade-up"
              >
                <div className="absolute coreValueLine"></div>
                <div className="w-full h-72">
                  <BannerImage url={img} />
                </div>
                <div className="pt-5 pl-3 pb-11 relative">
                  <h5 className="text-secondary-dark font-bold">{title}</h5>
                  <p className="text-secondary-lightest">{description}</p>
                  <div className="absolute coreArrow"></div>
                </div>
              </a>
            ),
          )}
        </div>
      </section>
    </>
  );
}
