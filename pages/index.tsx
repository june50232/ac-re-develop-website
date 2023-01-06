import React from 'react';
import {
  BannerImage,
  GradientBg,
  LaptopH2PrelineH3Wrap,
  // MobileContainer,
} from 'components';
import {
  homeOceanBanner,
  globalDottedImgUrl,
  smileHandShakeImgUrl,
  globalImgUrl,
  esgImgUrl,
  professionImgUrl,
} from 'common/imgUrls';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Home() {
  const whyReason = [
    {
      title: 'AC Re always acts in the client’s best interest',
      content:
        'AC Re represents you rather than a single insurance company,\n you can trust you’ll be receiving unbiased information and recommendations.',
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
        'The technical advice can be very useful if you need to make a claim.',
    },
  ];
  const coreValue = [
    {
      title: 'Professionalism',
      description: 'Professional Service',
      img: professionImgUrl,
    },
    {
      title: 'Global Perspectives',
      description: 'Forward-Thinking',
      img: globalImgUrl,
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
        className="flex w-screen h-80 flex-row overflow-hidden relative mb-2"
        id="banner-laptop-mobile"
      >
        <GradientBg background="rgba(255, 247, 237, 0.7)" />
        <BannerImage
          url={homeOceanBanner}
          classnames="bg-fixed"
          noHoverEffect
        />
        <h1 className="absolute flex items-center justify-center inset-0 font-semibold text-xl">
          <FaQuoteLeft
            color="#ffffff"
            fontSize="1.5rem"
            style={{
              marginRight: '1rem',
            }}
          />
          We bring industry knowledge, expertise, and insight for clients
          <FaQuoteRight
            color="#ffffff"
            fontSize="1.5rem"
            style={{
              marginLeft: '1rem',
            }}
          />
        </h1>
      </section>
      <section
        className="md:inline-flex w-screen h-[32rem] flex-row hidden pl-2"
        id="why-laptop"
      >
        <aside className="w-[20%] h-full overflow-hidden relative">
          <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
          <BannerImage url={smileHandShakeImgUrl} />
          {/* <GradientBg
            classnames="left-0 right-[92%]"
            background="rgba(255, 247, 237, 0.7)"
          /> */}
        </aside>
        <div
          className="w-[80%] h-full flex flex-col items-center justify-center"
          // style={{ background: 'azure' }}
        >
          <div className="h-5/6 w-11/12 flex flex-col justify-center space-y-10">
            <LaptopH2PrelineH3Wrap>Why AC Re</LaptopH2PrelineH3Wrap>
            <div className="text-secondary space-y-5">
              {whyReason.map(({ title, content }, i) => (
                <div key={title} className="flex space-x-10" data-aos="fade-up">
                  <div className="">
                    <div
                      className={`flex items-center justify-center order order-${
                        (i + 1) * 25
                      }`}
                    >
                      0{i + 1}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <h5 className="text-lg font-light text-secondary leading-relaxed">
                      {content}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section
        className="lg:hidden w-screen py-12 space-y-12 min-h-fit"
        id="why-mobile"
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
            WHY AC Re
          </h2>
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
       */}
      <section
        className="md:inline-flex w-screen h-[32rem] flex-row hidden justify-around items-center min-h-fit overflow-hidden relative"
        id="core-value-laptop"
      >
        <div className="h-5/6 w-11/12 flex flex-col justify-evenly relative">
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
          <LaptopH2PrelineH3Wrap>Our Core Value</LaptopH2PrelineH3Wrap>
          <div
            className="flex justify-between h-4/6 min-h-fit"
            data-aos="fade-up"
          >
            {coreValue.map(({ title, description, img }) => (
              <div
                key={title}
                className="flex flex-col w-[32%] h-full relative hover-scale-inner-img-effect"
              >
                <div className="absolute coreValueLine"></div>
                <div className="w-full h-[70%] overflow-hidden">
                  <BannerImage url={img} />
                </div>
                <div className="relative grow bg-primary-darker flex flex-col justify-evenly pb-2">
                  <h5 className="text-white font-bold text-xl pl-2">{title}</h5>
                  <div className="flex justify-between items-center pr-3">
                    <p className="text-white text-base pl-2">{description}</p>
                    <div className="coreArrow"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 
      <section
        className="lg:hidden w-screen py-12 space-y-12 min-h-fit"
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
      */}
    </>
  );
}
