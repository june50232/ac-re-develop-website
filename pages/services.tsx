import React, { FC } from 'react';
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
import { Gallery, Item } from 'react-photoswipe-gallery';

export default function Services() {
  return (
    <>
      <Section classname="h-96">
        <GradientBg background="rgba(255,255,255,0.85)" />
        <BannerImage url={servicesBannerImgUrl} />
        <div
          className="absolute h-full w-full flex flex-col justify-center items-center space-y-5"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-bold">Our Services & Products</h2>
          <hr className="w-8 text-neutral-500" />
          <h3 className="text-base font-normal w-6/12 text-center leading-relaxed">
            AC Re brings industry knowledge, expertise, and insight to design
            programs for your business&apos;s specific risks and needs. As
            strategic advisors, we build long-term partnerships with local and
            regional insurance companies to assure you have the protection you
            need.
          </h3>
        </div>
      </Section>
      <Gallery
        options={{
          bgOpacity: 0.5,
          wheelToZoom: false,
          pinchToClose: false,
          closeOnVerticalDrag: false,
        }}
      >
        <>
          <Section classname="h-[30rem]">
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
          </Section>

          <Section classname="h-[30rem]">
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
          </Section>
        </>
      </Gallery>
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
        <h4 className="font-semibold font-subtitle text-center mr-2 text-3xl">
          {servicesData[props.index].title}
        </h4>
        <HiOutlineCursorClick color="#DCEFFC" fontSize="3rem" />
      </div>
      <hr className="w-8 text-primary-light" />
    </div>
  );
};

const PortalClickItem = ({ index, width, titleClassName, isOther }: any) => {
  return (
    <>
      {
        <Item
          content={
            <Portal
              index={index}
              titleClassName={titleClassName}
              isOther={isOther}
            />
          }
        >
          {({ ref, open }) => (
            <div
              className={`w-${width} h-full flex flex-col items-center justify-center cursor-pointer`}
              style={{ border: '1px dotted #DCEFFC' }}
              onClick={open}
              ref={ref as any}
            >
              <div className="h-3/6 w-9/12 flex flex-col justify-evenly">
                <ProductTitle index={index} />
              </div>
            </div>
          )}
        </Item>
      }
    </>
  );
};

const Portal: FC<{
  index: number;
  titleClassName: string;
  isOther?: boolean;
}> = ({ index, isOther }) => {
  return (
    <div className="w-full h-full shadow-2xl overflow-hidden relative">
      <GradientBg background="rgba(235,233,232,0.9)" />
      {!!servicesData[index].bgImg && (
        <BannerImage
          url={servicesData[index].bgImg}
          styles={servicesData[index].bgImgStyle || {}}
        />
      )}
      <section className="lg:flex flex-col w-screen hidden h-full overflow-y-scroll absolute inset-0 py-[2%] space-y-6 items-center">
        <LaptopH2PrelineH3Wrap
          noFadeEffect
          classnames="w-[70%] text-primary-darker"
        >
          {servicesData[index].title}
        </LaptopH2PrelineH3Wrap>
        <hr className="w-full text-primary-darker" />
        {isOther ? (
          <div className="flex justify-evenly h-full min-h-fit pt-3 px-[2%]">
            {servicesData[index].category.map((o: any, i) => (
              <div
                className="w-[30%] h-auto relative hover-scale-inner-img-effect"
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
          <div className="w-full h-full flex justify-center items-start">
            <ul className="w-4/6 h-auto flex flex-col list-disc space-y-3">
              {servicesData[index].category.map(({ title }, i) => {
                return (
                  <li
                    key={i}
                    className="font-semibold text-primary-darker text-lg"
                  >
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
