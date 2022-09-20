import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { IoDiamondOutline, IoEarthOutline } from 'react-icons/io5';
import { BannerImage, LaptopH2PrelineH3Wrap, GradientBg } from 'components';
import { aboutBannerImgUrl, aboutTeamsImgUrl } from 'common/imgUrls';

export default function About() {
  const teamReason = [
    {
      title: 'Experienced Management Team',
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

  return (
    <>
      <section
        className="lg:flex flex-col w-screen flex-row hidden h-screen"
        id="banner-laptop"
      >
        <section className="w-full h-[26rem] relative">
          <GradientBg background="linear-gradient(to right, white, white, #fff7ed, transparent, transparent)" />
          <BannerImage url={aboutBannerImgUrl} />
          <h1 className="absolute bottom-12 p-12 left-[12%] font-bold text-primary-darkGray text-6xl color-primary-dark">
            About
            <br />
            AC Re
          </h1>
        </section>
        <section className="w-full grow flex items-center">
          <div className="w-full h-3/6 flex justify-center items-start space-x-24">
            <div className="flex flex-col space-y-6 items-center">
              <BsCalendar3 color="#A0DDFE" fontSize="3rem" />
              <div className="flex flex-col space-y-3 items-center">
                <h3
                  className="font-bold text-primary-darkest"
                  style={{
                    fontSize: '1.35rem',
                  }}
                >
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
                <h3
                  className="font-bold text-primary-darkest"
                  style={{
                    fontSize: '1.35rem',
                  }}
                >
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
                <h3
                  className="font-bold text-primary-darkest"
                  style={{
                    fontSize: '1.35rem',
                  }}
                >
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
        className="lg:inline-flex w-screen flex-row hidden"
        id="why-laptop"
      >
        <aside className="w-[42%] h-screen overflow-hidden relative">
          <GradientBg background="linear-gradient(white, transparent)" />
          <BannerImage
            url={aboutTeamsImgUrl}
            style={{
              backgroundPosition: 'bottom',
            }}
          />
        </aside>
        <div className="w-[58%] h-screen flex flex-col items-center justify-center">
          <div className="h-4/6 w-9/12 flex flex-col justify-evenly">
            <LaptopH2PrelineH3Wrap h2="About Our Team">
              Highly Experienced
              <br />
              Senior Management Team
            </LaptopH2PrelineH3Wrap>
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
    </>
  );
}
