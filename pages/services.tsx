import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom'
import servicesData from 'common/services';
import {
  GradientBg,
  BannerImage,
  LaptopH2PrelineH3Wrap,
} from 'components';
import {
  servicesBannerImgUrl,
  services3WindImgUrl,
  services2ShipImgUrl,
} from 'common/imgUrls';
import { HiOutlineCursorClick } from 'react-icons/hi';
import 'photoswipe/dist/photoswipe.css';

export default function Services() {
  return (
    <>
      <section className="h-96 w-screen relative" id="services-banner">
        <GradientBg background="rgba(255,255,255,0.85)" />
        <BannerImage url={servicesBannerImgUrl} />
        <div
          className="absolute top-0 z-2 h-full w-full flex flex-col justify-center items-center space-y-5 service-banner"
          data-aos="fade-up"
        >
          <h1>Services & products</h1>
          <hr className="md:block hidden w-8 text-amber-500" />
          <h3 className="font-light text-secondary text-left w-2/3 indent-8 leading-relaxed">
            AC Re brings industry knowledge, expertise, and insight to design
            programs for your business&apos;s specific risks and needs. As
            strategic advisors, we build long-term partnerships with local and
            regional insurance companies to assure you have the protection you
            need.
          </h3>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-4" id="services-category">
        <div className='col-span-1 md:col-span-2 relative overflow-hidden h-36 md:h-96' id="services-img-ship">
          <GradientBg background="linear-gradient(rgba(255,255,255,0.85), rgb(224,242,248,0.5),rgb(224,242,248,0.1),rgb(224,242,248,0.5), rgb(255,255,255,0.85))" />
          <BannerImage
            url={services2ShipImgUrl}
            styles={{
              backgroundPositionX: '100%',
            }}
          />
        </div>
        <div className='col-span-1 md:col-span-1 overflow-hidden h-48 md:h-96'>
          <PortalClickItem
            index={0}
            titleClassName="top-[11%] left-[10%]"
          />
        </div>
        <div className='col-span-1 md:col-span-1 overflow-hidden h-48 md:h-96'>
          <PortalClickItem
            index={1}
            titleClassName="top-[11%] right-[66%]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className='col-span-1 md:col-span-1 overflow-hidden h-48 md:h-96'>
          <PortalClickItem
            index={2}
            titleClassName="top-[8%] left-8 w-80 items-center"
          />
        </div>
        <div className='col-span-1 md:col-span-1 overflow-hidden h-48 md:h-96'>
        <PortalClickItem
          index={3}
          titleClassName="top-[11%] right-[66%]"
          isOther
        />
        </div>
        <div className='col-span-1 md:col-span-2 relative overflow-hidden h-36 md:h-96' id="services-img-wind">
          <GradientBg background="linear-gradient(rgba(255,255,255,0.85), transparent, transparent, transparent, rgb(255,255,255,0.85))" />
          <BannerImage
            url={services3WindImgUrl}
            styles={{
              backgroundPosition: 'initial',
            }}
          />
        </div>
      </div>
    </>
  );
}

const ProductTitle = (props) => {
  return (
    <div 
      className="text-secondary flex flex-col space-y-4 items-center justify-center px-2 w-full h-full m-2"
      data-aos="fade-up"
      >
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
  const id = servicesData[index].title.split(' ').join('')

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
        id={id}
      >
        <div className="h-3/6 w-9/12 flex flex-col justify-evenly">
          <ProductTitle index={index} />
        </div>
      </div>
      {isOpen && (
        createPortal(
          <>
          <div
            className="fixed inset-0 bg-secondary-lighter opacity-60 z-10"
            onClick={() => setOpen(false)}
          ></div>
          <div 
            className="fixed top-[10%] left-0 md:left-[20%] w-full md:w-[60%] h-[80%] z-20 bg-white shadow-2xl rounded-lg"
            id={`${id}Modal`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <h1
                className="absolute right-6 top-3 px-6 py-6 cursor-pointer text-secondary-lighter hover:text-secondary-light font-thin hover:font-normal z-10"
                onClick={() => setOpen(false)}
              >
                X
              </h1>
              <PortalContent
                index={index}
                titleClassName={titleClassName}
                isOther={isOther}
              />
            </div>
          </div>
        </>,
          document.body
        )
      )}
    </>
  );
};

const PortalContent: FC<{
  index: number;
  titleClassName: string;
  isOther?: boolean;
}> = ({ index, isOther }) => {
  const id = servicesData[index].title.split(' ').join('')
  return (
    <div className="h-[88%] w-[90%] overflow-hidden relative flex">
      <section className="flex flex-col h-full absolute inset-0 space-y-6 items-center">
        <LaptopH2PrelineH3Wrap
          noFadeEffect
          classnames="w-[70%] text-primary-darker"
        >
          {servicesData[index].title}
        </LaptopH2PrelineH3Wrap>
        <hr className="w-full text-primary-darker font-thin" />
        {isOther ? (
          <div className="flex flex-col h-full min-h-fit pt-3 px-[2%] overflow-y-scroll invisible-scrollbar">
            {servicesData[index].category.map((o: any, i) => (
              <div
                className=" h-auto relative hover-scale-inner-img-effect"
                key={i}
                id={`${id}_Content_${i}`}
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
          <div className="w-full h-full flex justify-center items-start overflow-y-scroll invisible-scrollbar">
            <ul className={`w-4/6 h-auto ${index === 2 && 'mt-6'} flex flex-col list-disc space-y-${index === 2 ? '6' : '3'}`}>
              {servicesData[index].category.map(({ title }, i) => {
                return (
                  <li key={i} id={`${id}_Content_${i}`}>
                    {index === 2 
                    ? <h1 className="text-primary-darker font-light leading-relaxed">{title}</h1>
                    : <h3 className="text-primary-darker font-light leading-relaxed">{title}</h3>
                  } 
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
