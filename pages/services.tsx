import React from 'react';
import servicesData from 'common/services';
import {
  Section,
  GradientBg,
  BannerImage,
  LaptopH2PrelineH3Wrap,
} from 'components';
import { servicesBannerImgUrl, globalDottedImgUrl } from 'common/imgUrls';

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

export default function Services() {
  const handleUiData = (oriData) => {
    let data: any = [];
    oriData.forEach((o, i) => {
      if (i === 0) {
        data.push(hide);
        data.push(hide);
      }

      if ((i - 2) % 3 === 0) {
        data.push(empty1);
        data.push(empty2);
      }
      data.push(o);
    });
    return data;
  };

  return (
    <>
      <Section classname="h-[20rem] relative">
        <>
          <GradientBg background="linear-gradient(rgba(255, 255, 255, 0.9), transparent, transparent, rgba(255, 255, 255, 0.9))" />
          <BannerImage url={servicesBannerImgUrl} />
        </>
      </Section>
      <Section classname="min-h-screen h-auto w-screen overflow-hidden py-[5%] space-y-2 relative">
        <LaptopH2PrelineH3Wrap classnames="absolute top-28 left-[10%]">
          Marine
        </LaptopH2PrelineH3Wrap>
        <div
          className="w-[120%] h-auto -ml-[10%] -mr-[10%] flex flex-wrap"
          data-aos="fade-up"
        >
          {handleUiData(servicesData.Marine).map(({ title, img }, i) => {
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
          })}
        </div>
      </Section>

      <Section classname="min-h-screen h-auto w-screen overflow-hidden py-[5%] space-y-2 relative">
        <LaptopH2PrelineH3Wrap classnames="absolute top-28 left-8">
          Property & Casualty
        </LaptopH2PrelineH3Wrap>
        <div
          className="w-[120%] h-auto -ml-[10%] -mr-[10%] flex flex-wrap"
          data-aos="fade-up"
        >
          {handleUiData(servicesData.PropertyCasualty).map(
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
                  style={{
                    background: !img ? 'rgb(155,220,235)' : '',
                  }}
                >
                  {img && <BannerImage url={img} />}
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
      </Section>

      <Section classname="h-[20rem] w-screen overflow-hidden py-[5%] space-y-2 relative">
        <LaptopH2PrelineH3Wrap classnames="absolute top-27 left-8 w-80">
          Reinsurance and Alternative Risk Transfer
        </LaptopH2PrelineH3Wrap>
        <div
          className="w-[120%] h-auto -ml-[10%] -mr-[10%] flex flex-wrap"
          data-aos="fade-up"
        >
          {handleUiData(servicesData.ReinsuranceAlternativeRiskTransfer).map(
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
      </Section>
      <section
        className="lg:inline-flex w-screen h-[50rem] flex-row hidden justify-center items-center min-h-fit"
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
          <LaptopH2PrelineH3Wrap>
            Other Services & Products
          </LaptopH2PrelineH3Wrap>
          <div
            className="flex justify-between h-5/6 min-h-fit pt-6"
            data-aos="fade-up"
          >
            {[
              servicesData.CaptiveInsurance,
              servicesData.RiskConsulting,
              servicesData.ClaimsManagement,
            ].map(
              (
                {
                  title,
                  mainTitle,
                  img,
                  //url, // TODO
                },
                i,
              ) => (
                <a
                  className="w-[30%] h-auto relative hover-scale-inner-img-effect"
                  key={i}
                  href="javascript:;"
                >
                  <div className="absolute"></div>
                  <div className="w-full h-[35%] overflow-hidden rounded-xl">
                    <BannerImage
                      url={img || servicesBannerImgUrl}
                      classnames="no-scale-effect"
                    />
                  </div>
                  <div className="pt-5 pl-3 pr-3 pb-11 h-auto relative space-y-6">
                    <h5 className="text-secondary-dark font-bold text-base">
                      {mainTitle}
                    </h5>
                    <p className="text-secondary-light text-[.9rem] text-justify indent-8">
                      {title}
                    </p>
                  </div>
                </a>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}

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
