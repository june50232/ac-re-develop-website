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
          <h2 className="text-xl font-family-bold">Services & products</h2>
          <hr className="w-8 text-neutral-500" />
          <h3 className="text-lg font-light text-center leading-relaxed">
            AC Re brings industry knowledge, expertise, and insight to design
            programs for your business&apos;s specific
            <br />
            risks and needs. As strategic advisors, we build long-term
            partnerships with local and regional insurance
            <br />
            companies to assure you have the protection you need.
          </h3>
        </div>
      </Section>
      <section className="md:flex w-screen hidden overflow-hidden h-[16rem] static">
        <aside className="w-4/12 h-full overflow-hidden relative">
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
          width="4/12"
          titleClassName="top-[11%] left-[10%]"
        />
        <PortalClickItem
          index={1}
          width="4/12"
          titleClassName="top-[11%] right-[66%]"
        />
      </section>
      <section className="md:flex w-screen hidden overflow-hidden h-[18rem]">
        <PortalClickItem
          index={2}
          width="[30%]"
          titleClassName="top-[8%] left-8 w-80 items-center"
        />
        <PortalClickItem index={3} width="[30%]" isOther />
        <aside className="w-[40%] h-full overflow-hidden relative">
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
        <h4 className="font-semibold font-subtitle text-center mr-2 text-xl">
          {servicesData[props.index].title}
        </h4>
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
        className={`w-${width} h-full flex flex-col items-center justify-center cursor-pointer`}
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
              <div
                className="absolute right-0 top-0 px-5 py-3 cursor-pointer text-xl text-secondary-lighter font-normal font-thin"
                onClick={() => setOpen(false)}
              >
                X
              </div>
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
                    {o.title}
                  </li>
                </ul>
                <div className="pt-5 pl-3 pr-3 pb-11 h-auto relative space-y-6">
                  <p className="text-primary-darker indent-8 leading-loose">
                    {o.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-start overflow-y-scroll">
            <ul className="w-4/6 h-auto flex flex-col list-disc space-y-3">
              {servicesData[index].category.map(({ title }, i) => {
                return (
                  <li key={i} className="text-primary-darker">
                    {title}
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
