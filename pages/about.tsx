import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { IoDiamondOutline, IoEarthOutline } from 'react-icons/io5';
import { BannerImage, LaptopH2PrelineH3Wrap, GradientBg } from 'components';
import {
  aboutBannerImgUrl,
  aboutTeamsImgUrl,
  aboutBestImgUrl,
  aboutfastGrowImgUrl,
  aboutSuccessfulImgUrl,
  aboutFounderImgUrl,
} from 'common/imgUrls';

export default function About() {
  const teamReason = [
    {
      title: 'Highly Experienced Senior Management Team',
      content:
        'Long tenured and international market experienced management team.',
    },
    {
      title: 'Our Mutual Values',
      content:
        'Provide excellent holistic solutions incorporating our mutual values which are professionalism, global perspectives, and ESG.',
    },
    {
      title: 'Customized Services',
      content:
        'Our team is passionate about providing exceptional customer care and maintaining an impressive dedication to every client, regardless of your business size.',
    },
  ];
  const founder = [
    'Our founder Solomon has more than 30 years of experience\nin the risk management and insurance industry.\nHis industry experience includes senior leadership\nroles at Evergreen Group, where he was\nalso a Board Director of the Evergreen Insurance Company,\nBermuda, responsible for all management and operations,\nand President of Central Re.',
    'Previously, Solomon was a senior management of ACR.\nHe led ACR’s rapid expansion in Greater China during a 10-year span\nin which it became one of the largest reinsurers in Asia,\nnegotiating and completing many reinsurance businesses.',
    'He has twice won Risk Manager of the Year 1994(Singapore) and 2002(Tokyo),\nChairman of Risk Management Society of Taiwan,\nand Licenced Master Mariner of Ocean Going ships.\nSolomon earned his EMBA from National Chengchi University.',
  ];

  const goal = [
    {
      title: 'Be The Best',
      img: aboutBestImgUrl,
      style: {
        backgroundPositionX: '78%',
      },
    },
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
    },
  ];

  return (
    <>
      <section
        className="lg:flex flex-col w-screen flex-row hidden h-screen min-h-[612px]"
        id="banner-laptop"
      >
        <section className="w-full h-[20rem] relative" id="banner">
          <GradientBg background="linear-gradient(rgba(255, 255, 255, 0.9), transparent, transparent, rgba(255, 255, 255, 0.9))" />
          <BannerImage url={aboutBannerImgUrl} />
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
                <h3 className="font-bold text-primary-darkest text-lg">
                  Founded in 2021
                </h3>
                <h5 className="text-sm text-secondary-light leading-relaxed text-center">
                  AC Re Services Co., Ltd. (AC Re) was
                  <br />
                  founded in 2021 by Solomon Chiu.
                </h5>
              </div>
            </div>
            <div className="flex flex-col space-y-6 items-center">
              <IoDiamondOutline color="#A0DDFE" fontSize="3rem" />
              <div className="flex flex-col space-y-3 items-center">
                <h3 className="font-bold text-primary-darkest text-lg">
                  Innovative and Forward-Thinking
                </h3>
                <h5 className="text-sm text-secondary-light leading-relaxed text-center">
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
                <h3 className="font-bold text-primary-darkest text-lg">
                  Global Markets
                </h3>
                <h5 className="text-sm text-secondary-light leading-relaxed text-center">
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
        className="lg:inline-flex w-screen h-screen flex-row hidden min-h-[612px]"
        id="goal-laptop"
        style={{
          background: 'linear-gradient(rgb(255, 247, 237)',
        }}
      >
        <aside className="w-[70%] flex h-full overflow-hidden relative flex-col">
          <div className="w-full h-32 flex justify-start pl-16 items-center">
            <LaptopH2PrelineH3Wrap>Our Goal</LaptopH2PrelineH3Wrap>
          </div>
          <div className="w-full flex grow overflow-hidden" data-aos="fade-up">
            {goal.map(({ title, img, style = {} }) => (
              <div
                className="h-full flex grow hover-grow-effect relative"
                key={title}
              >
                <BannerImage url={img} styles={style} />
                <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
                <div className="absolute img-caption-bg-cover top-0 left-0 vertical w-11 bottom-[20%]">
                  <h3 className="absolute bottom-4 color-neutral-200 text-base top-3 left-3 text-secondary-DEFAULT text-vertical">
                    {title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </aside>
        <div className="w-[30%] h-full flex flex-col items-center justify-center">
          <h3 className="text-base" data-aos="fade-up">
            ... insurance broker in Taiwan,
            <br />
            with clients across the globe.
          </h3>
        </div>
      </section>

      <section
        className="lg:inline-flex w-screen h-screen flex-row hidden min-h-[612px]"
        id="team-laptop"
      >
        <div className="w-[42%] h-full flex flex-col items-center justify-center pl-22">
          <div className="h-5/6 w-9/12 flex flex-col justify-evenly">
            <div className="text-secondary space-y-5">
              {teamReason.map(({ title, content }, i) => (
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
                  <div className="w-10/12 space-y-2">
                    <h4 className="font-semibold font-subtitle">{title}</h4>
                    <h5 className="text-sm">{content}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="w-[58%] h-full overflow-hidden relative">
          <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent)" />
          <BannerImage
            url={aboutTeamsImgUrl}
            styles={{
              backgroundPosition: 'bottom',
            }}
          />
        </aside>
      </section>
      <section
        className="lg:inline-flex w-screen h-screen flex-row hidden min-h-[612px]"
        id="leader-laptop"
      >
        <aside className="w-[42%] h-full overflow-hidden relative">
          <GradientBg background="rgba(255, 247, 237, 0.9)" />
          <BannerImage url={aboutFounderImgUrl} />
          <div className="absolute overflow-hidden rounded-lg top-[30%] left-[55%] right-[5%] bottom-[30%] z-[1]">
            <BannerImage url={aboutFounderImgUrl} />
          </div>
        </aside>
        <div className="w-[58%] h-full flex flex-col items-center justify-center">
          <div className="h-5/6 w-9/12 flex flex-col justify-evenly">
            <LaptopH2PrelineH3Wrap>Solomon Chiu</LaptopH2PrelineH3Wrap>
            <div className="text-secondary space-y-5">
              {founder.map((content, i) => (
                <div key={i} className="flex space-x-16" data-aos="fade-up">
                  <h5 className="text-base leading-relaxed">{content}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
