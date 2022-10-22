import React, { FC } from 'react';
import servicesData from 'common/services';
import {
  Section,
  GradientBg,
  BannerImage,
  LaptopH2PrelineH3Wrap,
} from 'components';
import { servicesBannerImgUrl } from 'common/imgUrls';
import { HiOutlineCursorClick } from 'react-icons/hi';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

const BLOCK_TYPE = {
  NONE1: 'none1',
  NONE2: 'none2',
  HIDE: 'hide',
};
const { NONE1, NONE2, HIDE } = BLOCK_TYPE;

const empty1 = {
  title: NONE1,
  img: '',
};
const empty2 = {
  title: NONE2,
  img: '',
};
const hide = {
  title: HIDE,
  img: '',
};

const handleUiData = (oriData, page) => {
  let data: any = [];
  const pageSize = 11;
  const start = page * pageSize;
  const end = (page + 1) * pageSize - 1;
  oriData.forEach((o, i) => {
    if (i < start || i > end) return;

    const index = i % pageSize;

    if (index === 0) {
      data.push(hide);
      data.push(hide);
    }

    if ((index - 2) % 3 === 0) {
      data.push(empty1);
      data.push(empty2);
    }
    data.push(o);
  });
  return data;
};

export default function Services() {
  return (
    <>
      <div className="h-[5.5rem] w-screen bg-white" />
      <Section classname="h-96" data-aos="fade-up">
        <GradientBg background="rgba(255,255,255,0.85)" />
        <BannerImage url={servicesBannerImgUrl} />
        <div
          className="absolute h-full w-full flex flex-col justify-center items-center space-y-5"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-bold">Our Services & Products</h2>
          <hr className="w-8 text-neutral-500" />
          <h3 className="text-sm w-6/12 text-center leading-loose">
            AC Re Services Co., Ltd. bring industry knowledge, expertise, and
            insight to design programs for your business&apos;s specific risks
            and needs. As strategic advisors, we build long-term partnerships
            with local and regional insurance companies to assure you have the
            protection you need.
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
              <GradientBg background="linear-gradient(rgb(224,242,248), transparent, transparent, transparent, rgba(224,242,248,0.9))" />
              <BannerImage url={servicesBannerImgUrl} />
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
              <BannerImage url={servicesBannerImgUrl} />
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
        <h4 className="font-semibold font-subtitle text-center mr-2">
          {servicesData[props.index].title}
        </h4>
        <HiOutlineCursorClick color="#DCEFFC" fontSize="1.5rem" />
      </div>
      <hr className="w-8 text-primary-light" />
      <h5 className="text-sm text-center">
        {servicesData[props.index].description}
      </h5>
    </div>
  );
};

const PortalClickItem = ({ index, width, titleClassName, isOther }: any) => {
  return (
    <>
      {Array(Math.floor(servicesData[index].category.length / 14) + 1)
        .fill(null)
        .map((o, i) => (
          <Item
            content={
              <Portal
                index={index}
                page={i}
                titleClassName={titleClassName}
                isOther={isOther}
              />
            }
            key={i}
          >
            {i === 0
              ? ({ ref, open }) => (
                  <div
                    className={`w-${width} h-full flex flex-col items-center justify-center cursor-pointer`}
                    style={{ border: '1px dotted #DCEFFC' }}
                    onClick={open}
                    ref={ref as any}
                  >
                    <div className="h-3/6 w-9/12 flex flex-col justify-evenly">
                      <ProductTitle index={index} />
                      {o}
                    </div>
                  </div>
                )
              : ({ ref }) => <div ref={ref as any}></div>}
          </Item>
        ))}
    </>
  );
};

const Portal: FC<{
  index: number;
  page: number;
  titleClassName: string;
  isOther?: boolean;
}> = ({ index, page, titleClassName, isOther }) => {
  return (
    <div className="bg-white w-full h-[80%] mt-[5%] shadow-2xl overflow-hidden">
      <section className="lg:flex w-screen hidden h-full overflow-y-scroll relative py-[2%] space-y-2 relative items-start">
        <LaptopH2PrelineH3Wrap
          noFadeEffect
          classnames={`absolute ${titleClassName}`}
        >
          {servicesData[index].title}
        </LaptopH2PrelineH3Wrap>
        {isOther ? (
          <div className="flex justify-evenly h-full min-h-fit pt-12 px-[2%]">
            {servicesData[index].category.map((o: any, i) => (
              <div
                className="w-[30%] h-auto relative hover-scale-inner-img-effect"
                key={i}
              >
                <div className="w-full h-[35%] overflow-hidden rounded-xl relative">
                  <BannerImage
                    url={o.img || servicesBannerImgUrl}
                    classnames="no-scale-effect"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <h5 className="px-3 py-5 text-center text-secondary-DEFAULT font-semibold">
                      {o.title}
                    </h5>
                  </div>
                </div>
                <div className="pt-5 pl-3 pr-3 pb-11 h-auto relative space-y-6">
                  <p className="text-secondary-light text-xs indent-8 leading-loose">
                    {o.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-[120%] h-auto -ml-[10%] -mr-[10%] flex flex-wrap overflow-y-scroll">
            {handleUiData(servicesData[index].category, page).map(
              ({ title, img }, i) => {
                if (title === NONE1)
                  return <EmptyBlock key={i} color="rgb(228,244,250)" />;
                else if (title === NONE2)
                  return <EmptyBlock key={i} color="rgb(228,244,250)" />;
                else if (title === HIDE) return <HideBlock key={i} />;

                return (
                  <div
                    key={i}
                    className="flex w-[19%] h-[6rem] rounded-3xl relative overflow-hidden ml-2 mt-2"
                  >
                    <BannerImage url={img || servicesBannerImgUrl} />
                    <div
                      className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      <h5 className="px-3 py-5 text-center text-secondary-DEFAULT text-sm font-semibold">
                        {title}
                      </h5>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        )}
      </section>
    </div>
  );
};

const EmptyBlock = (props) => {
  return (
    <div
      className="flex w-[19%] h-[6rem] rounded-3xl relative overflow-hidden ml-2 mt-2"
      style={{
        background: props.color,
      }}
    />
  );
};
const HideBlock = () => {
  return (
    <div className="flex w-[19%] h-[6rem] rounded-3xl relative overflow-hidden ml-2 mt-2" />
  );
};
