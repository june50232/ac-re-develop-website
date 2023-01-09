import React, { FC, useEffect, useState } from 'react';
import servicesData from 'common/services';
import {
  Section,
  GradientBg,
  BannerImage,
  LaptopH2PrelineH3Wrap,
} from 'components';
import {
  servicesBannerImgUrl,
  services2WindImgUrl,
  services2ShipImgUrl,
} from 'common/imgUrls';
import { HiOutlineCursorClick } from 'react-icons/hi';
import 'photoswipe/dist/photoswipe.css';

export default function Services() {
  return (
    <>
      <Section classname="h-96">
        <GradientBg background="rgba(255,255,255,0.85)" />
        <BannerImage url={servicesBannerImgUrl} />
        <div
          className="absolute h-full w-full flex flex-col justify-center items-center space-y-5 service-banner"
          data-aos="fade-up"
        >
          <h1>Services & products</h1>
          <hr className="w-8 text-amber-500" />
          <h3 className="font-light text-secondary text-left w-2/3 indent-8 leading-relaxed">
            AC Re brings industry knowledge, expertise, and insight to design
            programs for your business&apos;s specific risks and needs. As
            strategic advisors, we build long-term partnerships with local and
            regional insurance companies to assure you have the protection you
            need.
          </h3>
        </div>
      </Section>
      <section className="md:flex w-screen hidden overflow-hidden h-[18rem] static">
        <aside className="flex w-6/12 h-full overflow-hidden relative">
          <GradientBg background="linear-gradient(rgba(255,255,255,0.85), rgb(224,242,248,0.5),rgb(224,242,248,0.1),rgb(224,242,248,0.5), rgb(255,255,255,0.85))" />
          <BannerImage
            url={services2ShipImgUrl}
            styles={{
              backgroundPositionX: '100%',
            }}
          />
        </aside>
        <PortalClickItem
          index={0}
          width="3/12"
          titleClassName="top-[11%] left-[10%]"
        />
        <PortalClickItem
          index={1}
          width="2/12"
          titleClassName="top-[11%] right-[66%]"
        />
      </section>
      <section className="flex md:flex w-screen hidden overflow-hidden h-[18rem] static">
        <aside className="flex w-6/12 h-full overflow-hidden relative">
          <PortalClickItem
            index={2}
            width="7/12"
            titleClassName="top-[8%] left-8 w-80 items-center"
          />
           <PortalClickItem index={3} width="5/12" isOther />
        </aside>
        <aside className="w-6/12 h-full overflow-hidden relative flex">
          <GradientBg background="linear-gradient(rgb(224,242,248), transparent, transparent, transparent, rgba(224,242,248,0.9))" />
          <BannerImage url={services2WindImgUrl} />
        </aside>
      </section>
    </>
  );
}

const ProductTitle = (props) => {
  return (
    <div className="text-secondary flex flex-col space-y-4 items-center justify-center px-2 w-full h-full m-2">
      <div className="flex items-center">
        <h2 className="tracking-wide text-center mr-2">
          {servicesData[props.index].title}
        </h2>
        <HiOutlineCursorClick color="#DCEFFC" fontSize="3rem" />
      </div>
      <hr className="w-8 text-primary-light" />
    </div>
  );
};

const PortalClickItem = ({ index, width, titleClassName, isOther }: any) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`w-${width} h-full flex grow items-center justify-center cursor-pointer`}
        style={{ border: '1px dotted #DCEFFC' }}
        onClick={() => setOpen(!isOpen)}
      >
        <div className="h-3/6 w-9/12 flex flex-col justify-evenly">
          <ProductTitle index={index} />
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-secondary-lighter opacity-60 z-10"
            onClick={() => setOpen(false)}
          ></div>
          <div className="fixed top-[10%] left-[20%] w-[60%] h-[80%] z-20 bg-white shadow-2xl">
            <div className="relative w-full h-full flex items-center justify-center">
              <h1
                className="absolute right-6 top-3 px-6 py-6 cursor-pointer text-secondary-lighter hover:text-secondary-light font-thin hover:font-normal z-10"
                onClick={() => setOpen(false)}
              >
                X
              </h1>
              <Portal
                index={index}
                titleClassName={titleClassName}
                isOther={isOther}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

const Portal: FC<{
  index: number;
  titleClassName: string;
  isOther?: boolean;
}> = ({ index, isOther }) => {
  return (
    <div className="h-[88%] w-[90%] overflow-hidden relative flex">
      <section className="md:flex flex-col hidden h-full absolute inset-0 space-y-6 items-center">
        <LaptopH2PrelineH3Wrap
          noFadeEffect
          classnames="w-[70%] text-primary-darker"
        >
          {servicesData[index].title}
        </LaptopH2PrelineH3Wrap>
        <hr className="w-full text-primary-darker font-thin" />
        {isOther ? (
          <div className="flex flex-col h-full min-h-fit pt-3 px-[2%] overflow-y-scroll">
            {servicesData[index].category.map((o: any, i) => (
              <div
                className=" h-auto relative hover-scale-inner-img-effect"
                key={i}
              >
                <ul className="list-disc ml-6">
                  <li className="text-primary-darker font-semibold text-lg">
                    <h2>{o.title}</h2>
                  </li>
                </ul>
                <div className="pt-5 pl-3 pr-3 pb-11 h-auto relative space-y-6">
                  <h3 className="text-primary-darker font-light indent-8 leading-loose">
                    {o.description}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-start overflow-y-scroll">
            <ul className="w-4/6 h-auto flex flex-col list-disc space-y-3">
              {servicesData[index].category.map(({ title }, i) => {
                return (
                  <li key={i}>
                    <h3 className="text-primary-darker font-light leading-relaxed">{title}</h3>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};
