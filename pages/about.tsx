import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { IoDiamondOutline, IoEarthOutline } from 'react-icons/io5';
import { BannerImage, LaptopH2PrelineH3Wrap, GradientBg } from 'components';
import {
  aboutBannerImgUrl,
  aboutTeamsImgUrl,
  aboutTeamsDecisionImgUrl,
  aboutBestImgUrl,
  aboutfastGrowImgUrl,
  aboutSuccessfulImgUrl,
  aboutFounderImgUrl,
} from 'common/imgUrls';

export default function About() {
  const teamReason = [
    'Long tenured and international market experienced management team.',
    'Provide excellent holistic solutions incorporating our mutual values which are professionalism, global perspectives, and ESG.',
    'Passionate about providing exceptional customer care and maintaining an impressive dedication to every client, regardless of your business size.',
  ];
  const founder = [
    'Solomon has more than 30 years of experience\nin the risk management and insurance industry.\nHis industry experience includes senior leadership\nroles at Evergreen Group, where he was\nalso a Board Director of the Evergreen Insurance Company,\nBermuda, responsible for all management and operations,\nand President of Central Re.',
    'Previously, Solomon was a senior management of ACR.\nHe led ACR’s rapid expansion in Greater China during a 10-year span\nin which it became one of the largest reinsurers in Asia,\nnegotiating and completing many reinsurance businesses.',
    'He has twice won Risk Manager of the Year 1994(Singapore) and 2002(Tokyo),\nChairman of Risk Management Society of Taiwan,\nand Licenced Master Mariner of Ocean Going ships.\nSolomon earned his EMBA from National Chengchi University.',
  ];

  const goal = [
    {
      title: 'Be The Fatest-Growing',
      img: aboutfastGrowImgUrl,
      style: {
        backgroundPositionX: '85%',
      },
    },
    {
      title: 'Be The Most Successful',
      img: aboutSuccessfulImgUrl,
      style: {
        backgroundPositionX: '54%',
      },
    },
    {
      title: 'Be The Best',
      img: aboutBestImgUrl,
      style: {
        backgroundPositionX: '70%',
      },
      noGradientBg: true,
    },
  ];

  return (
    <>
      <section
        className="lg:flex flex-col w-screen flex-row hidden h-[50rem]"
        id="banner-laptop"
      >
        <section className="w-full h-[20rem] relative" id="banner">
          {/* <GradientBg background="linear-gradient(rgba(255, 255, 255, 0.9), transparent, transparent, rgba(255, 255, 255, 0.9))" /> */}
          <BannerImage url={aboutBannerImgUrl} />
          <div
            className="absolute inset-0 flex flex-col justify-center items-center space-y-5"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold">
              About{' '}
              <span className="border-b-8 border-neutral-300 border-solid leading-4 inline-block">
                AC Re
              </span>
            </h2>
            <hr className="w-full text-white" />
          </div>
        </section>
        <section
          className="w-full grow flex items-center justify-center"
          id="intro-laptop"
          data-aos="fade-up"
        >
          <div className="w-full h-5/6 flex justify-center items-center space-x-24">
            <div className="flex flex-col space-y-6 items-center">
              <BsCalendar3 color="#A0DDFE" fontSize="3rem" />
              <div className="flex flex-col space-y-3 items-center">
                <h3 className="font-bold text-primary-darkest text-xl">
                  Founded in{' '}
                  <span className="border-b-8 border-neutral-300 border-solid leading-[.25rem] inline-block">
                    2021
                  </span>
                </h3>
                <h5 className="text-secondary-light leading-relaxed text-center">
                  AC Re Services Co., Ltd. (AC Re) was
                  <br />
                  founded in 2021 by Solomon Chiu.
                </h5>
              </div>
            </div>
            <div className="flex flex-col space-y-6 items-center">
              <IoDiamondOutline color="#A0DDFE" fontSize="3rem" />
              <div className="flex flex-col space-y-3 items-center">
                <h3 className="font-bold text-primary-darkest text-xl">
                  Innovative and{' '}
                  <span className="border-b-8 border-neutral-300 border-solid leading-[.25rem] inline-block">
                    Forward-Thinking
                  </span>
                </h3>
                <h5 className="text-secondary-light leading-relaxed text-center">
                  AC Re Services is an innovative,
                  <br />
                  forward-thinking insurance broker that
                  <br />
                  takes pride in providing risk management and
                  <br />
                  insurance/reinsurance solutions for
                  <br />
                  direct corporate clients and reinsureds.
                </h5>
              </div>
            </div>
            <div className="flex flex-col space-y-6 items-center">
              <IoEarthOutline color="#A0DDFE" fontSize="3rem" />
              <div className="flex flex-col space-y-3 items-center">
                <h3 className="font-bold text-primary-darkest text-xl">
                  <span className="border-b-8 border-neutral-300 border-solid leading-[.25rem] inline-block">
                    Global
                  </span>{' '}
                  Markets
                </h3>
                <h5 className="text-secondary-light leading-relaxed text-center">
                  We offer a wide range of specialist lines;
                  <br />
                  placed in the global, composite,
                  <br />
                  and Taiwan insurance markets.
                </h5>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section
        className="lg:inline-flex w-screen h-screen flex-col hidden min-h-[612px] overflow-hidden bg-neutral-50"
        id="goal-laptop"
        // style={{
        //   background: 'rgba(255, 247, 237, 0.9)',
        // }}
      >
        {/* <div className="w-full h-32 flex justify-start pl-16 items-center">
          <LaptopH2PrelineH3Wrap
            classnames="border-l-[1rem] border-neutral-200 border-solid pl-4"
          >Our Goal</LaptopH2PrelineH3Wrap>
        </div> */}
        <div className="w-full h-full flex">
          <aside className="grow flex h-full overflow-hidden relative flex-col">
            <div className="flex h-full w-full">
              <div className="flex w-28 h-full relative bg-neutral-100 justify-center">
                <h2
                  className="text-white text-vertical text-orientation-upright text-[10rem] italic font-serif"
                  data-aos="fade-up"
                >
                  <span className="h-24 inline-block">G</span>
                  <span className="h-24 inline-block">o</span>
                  <span className="h-36 inline-block">a</span>
                  <span className="h-36 inline-block">l</span>
                </h2>
              </div>
              <div className="flex grow overflow-hidden">
                {goal.map(
                  ({ title, img, style = {}, noGradientBg = false }) => (
                    <div
                      className="h-full flex grow hover-grow-effect relative overflow-hidden"
                      key={title}
                    >
                      <BannerImage url={img} styles={style} />
                      {!noGradientBg && (
                        <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
                      )}
                      <div className="absolute img-caption-bg-cover top-0 left-0 vertical w-11 bottom-[20%]">
                        <h3
                          className="absolute bottom-4 color-neutral-200 text-base top-8 left-3 text-secondary-DEFAULT text-vertical"
                          data-aos="fade-up"
                        >
                          {title}
                        </h3>
                      </div>
                      <div className="absolute img-caption-bg-cover left-0 right-0 top-0 h-16 horizontal overflow-hidden">
                        <h3 className="absolute text-primary-dark text-xl top-4 left-4 right-4 text-horizontal whitespace-nowrap">
                          {title}
                        </h3>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </aside>
          <div className="w-[30rem] h-full flex flex-col items-center justify-center relative z-[1]">
            <h3 className="text-xl" data-aos="fade-up">
              ... insurance broker in Taiwan,
              <br />
              with clients across the globe.
            </h3>
            {/* <div id="dotted" className='bg-neutral-100 absolute -bottom-48 -right-48 w-96 h-96 rounded-full z-[1]'></div> */}
            {/* <div id="dotted2" className='bg-neutral-200 absolute -bottom-48 right-0 w-80 h-80 rounded-full'></div> */}
            <div
              id="triangleBg"
              className="absolute bg-neutral-100 top-0 bottom-0 left-0 w-20 -z-[1]"
              style={{
                // background: "rgba(255, 247, 237, 0.9)",
                clipPath: 'polygon(0 0, 0% 100%, 100% 50%)',
              }}
            ></div>
            {/* <div id="dotted3" className='bg-neutral-400 absolute -bottom-48 -right-48 w-96 h-96 rounded-full'></div> */}
            {/* <div id="dotted4" className='bg-neutral-200 absolute -bottom-48 -right-48 w-96 h-96 rounded-full'></div> */}
          </div>
        </div>
      </section>
      <div className="h-5"></div>
      <section
        className="lg:inline-flex w-screen h-[45rem] flex-row hidden relative"
        id="team-laptop"
      >
        <div className="absolute inset-0 -z-[1]">
          <GradientBg
            classnames="w-full h-full"
            background="linear-gradient(rgba(255, 247, 237, 0.9), transparent)"
          />
          <BannerImage
            url={aboutTeamsImgUrl}
            styles={{
              backgroundPositionY: 'bottom',
              backgroundPositionX: '45%',
            }}
          />
        </div>
        <aside
          className="w-[30rem] h-full overflow-hidden relative flex justify-center items-center"
          // style={{
          //   clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)'
          // }}
        >
          <div
            className="w-full h-[8.1rem] -mt-[100%] ml-5 bg-white overflow-hidden px-6 shadow-md"
            data-aos="fade-up"
          >
            <BannerImage
              url={aboutTeamsDecisionImgUrl}
              classnames="bg-white bg-contain"
            />
          </div>
        </aside>
        <div
          className="grow h-full flex flex-col items-center justify-center pl-22"
          style={{
            backgroundColor: 'rgba(255, 247, 237,0.8)',
            clipPath: 'polygon(5% 0, 100% 0%, 100% 100%, 5% 100%, 0% 50%)',
          }}
        >
          <div className="h-5/6 w-9/12 flex flex-col justify-evenly">
            <div className="text-secondary space-y-12">
              <LaptopH2PrelineH3Wrap classnames="text-3xl">
                Highly Experienced Senior Management Team
              </LaptopH2PrelineH3Wrap>
              {teamReason.map((content, i) => (
                <div
                  key={content}
                  className="flex space-x-16"
                  data-aos="fade-up"
                >
                  <div className="">
                    <div
                      className={`flex items-center justify-center order order-${
                        (i + 1) * 25
                      }`}
                    >
                      0{i + 1}
                    </div>
                  </div>
                  <div className="w-10/12 space-y-2">
                    <h5 className="text-xl">{content}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="h-5"></div>
      <section
        className="lg:inline-flex w-screen h-[60rem] flex-row hidden"
        id="leader-laptop"
      >
        <aside
          className="w-[55rem] bg-primary-darker h-full overflow-hidden relative flex flex-col justify-center items-center space-y-10"
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
          }}
        >
          <div
            className="overflow-hidden rounded-lg w-36 h-36 z-[1]"
            style={{
              clipPath: 'circle(50% at 50% 50%)',
            }}
            data-aos="fade-up"
          >
            <BannerImage url={aboutFounderImgUrl} />
          </div>
          <div
            className="border-l-8 border-solid border-white pl-2"
            data-aos="fade-up"
          >
            <h3 className="text-white font-semibold">Solomon Chiu</h3>
            <h5 className="text-white">Chairman</h5>
          </div>
        </aside>
        <div className="h-full grow flex flex-col items-center justify-center">
          <div className="h-4/6 w-9/12 flex flex-col justify-evenly space-y-5">
            <LaptopH2PrelineH3Wrap classnames="text-3xl">
              Our Founder
            </LaptopH2PrelineH3Wrap>
            <div className="text-secondary space-y-5">
              {founder.map((content, i) => (
                <div key={i} className="flex space-x-16" data-aos="fade-up">
                  <h5 className="text-xl leading-relaxed indent-8">
                    {content}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
