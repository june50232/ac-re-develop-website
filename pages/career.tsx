import React from 'react';
import {
  Section,
  GradientBg,
  BannerImage,
  LaptopH2PrelineH3Wrap,
} from 'components';
import {
  careerTeamImgUrl,
  globalDottedImgUrl,
  careerCareImgUrl,
} from 'common/imgUrls';

export default function Career() {
  return (
    <>
      <Section
        classname="h-80"
        style={{
          background: 'rgba(255, 247, 237, 0.85)',
        }}
      >
        <div
          className="h-full w-full flex flex-col justify-center items-center space-y-5"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold">Join us!</h2>
          <hr className="w-8 text-neutral-500" />
          <h3 className="text-base w-full text-center leading-relaxed text-secondary font-normal">
            AC Re has been continually expanding by adding new talent.
            <br />
            We&apos;re looking for motivated individuals who would like to
            <br />
            grow within a dynamic and friendly environment.
            <br />
            We welcome diverse talents in every aspect to make up a prosperous
            team.
          </h3>
        </div>
      </Section>
      <Section classname="h-[30rem]">
        <aside className="w-[42%] h-full overflow-hidden relative rounded-br-3xl">
          <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
          <BannerImage url={careerTeamImgUrl} />
        </aside>
        <div
          className="w-[58%] h-full flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <div className="h-3/6 w-10/12 flex flex-col justify-evenly space-y-10">
            <LaptopH2PrelineH3Wrap>Our Team</LaptopH2PrelineH3Wrap>
            <div
              className="text-secondary space-y-5 text-base indent-8 leading-relaxed"
              data-aos="fade-up"
            >
              We are a united team full of highly talented and enthusiastic
              people. We appreciate the uniqueness of each individual and the
              values they bring. AC Re is committed to creating a workspace and
              culture that makes our employees feel safe and comfortable while
              continuing to grow with the company.
            </div>
          </div>
        </div>
      </Section>

      <Section classname="h-[30rem]">
        <div
          className="w-[58%] h-full flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <div className="h-3/6 w-9/12 flex flex-col justify-evenly space-y-10">
            <LaptopH2PrelineH3Wrap>What we care about</LaptopH2PrelineH3Wrap>
            <div
              className="text-secondary space-y-5 text-base indent-8 leading-relaxed"
              data-aos="fade-up"
            >
              The foundation of our success is integrity, diversity, and
              client-driven. We encourage individuals to express different
              perspectives and we worship teamworking. Using our professionalism
              and expertise, we are dedicated to servicing our clients across
              all industries and providing best solutions for them. Our goal is
              to go beyond traditional insurance brokers and make positive
              impacts across the industry.
            </div>
          </div>
        </div>
        <aside className="w-[42%] h-full overflow-hidden relative rounded-tl-3xl">
          <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
          <BannerImage url={careerCareImgUrl} />
        </aside>
      </Section>

      <Section
        className="relative flex flex-col justify-evenly items-center space-y-5 h-[56rem]"
        style={{
          background: 'rgba(255, 247, 237, 0.85)',
        }}
      >
        <div
          className="absolute -z-[1] top-2 -right-20 h-72 w-4/6"
          data-aos="fade-up"
        >
          <BannerImage
            url={globalDottedImgUrl}
            classnames="opacity-10"
            styles={{
              backgroundPosition: 'top',
            }}
            noHoverEffect
          />
        </div>
        <div
          className="h-50 w-full flex flex-col justify-center items-center space-y-10 relative"
          data-aos="fade-up"
        >
          <h5 className="text-2xl text-center text-primary-darker">
            If you&apos;re interested in joining our team,
            <br />
            then please get in touch with us via{' '}
            <a
              href="mailto:info@ac-re.com.tw"
              rel="noopener noreferrer"
              className="text-primary-darkGray"
            >
              info@ac-re.com.tw
            </a>
            ,
            <br />
            or by completing the{' '}
            <span className="border-b-8 border-neutral-300 border-solid leading-4 inline-block">
              Employment application form
            </span>{' '}
            below.
          </h5>
        </div>
        <hr className="w-8 text-neutral-500" data-aos="fade-up" />
        <h5
          className="text-xl text-center text-primary-darker"
          data-aos="fade-up"
        >
          Thank you for expressing your interest in joining AC Re.
          <br />
          Please complete the details below and upload your CV.
        </h5>
        <div
          className="flex flex-wrap w-4/6 h-96 justify-between items-center"
          data-aos="fade-up"
        >
          <TextInput
            title="Title"
            required
            placeholder="Mr., Miss, Ms., Mrs."
          />
          <TextInput title="Name" required />
          <TextInput title="Phone" required />
          <TextInput title="Email" required />
          <TextInput title="Type of role you’d like to apply" widthFull />
          <TextInput title="Cover Letter (choose a file)" widthFull />
          <TextInput title="CV upload (choose a file)" required widthFull />
          <div className="w-full h-auto flex justify-end items-center mr-8">
            <button className="bg-neutral-500 text-lg px-24 py-3 font-bold">
              Submit
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}

const TextInput = (props) => {
  return (
    <label
      className={[
        'flex h-auto justify-center items-center mr-8',
        props.widthFull ? 'w-full' : 'w-[44%]',
      ].join(' ')}
    >
      <p
        className={[
          'text-lg w-[12rem] flex whitespace-nowrap mr-2',
          props.widthFull ? 'w-[18rem]' : 'w-16',
        ].join(' ')}
      >
        {props.title}
        {props.required && <span className="text-red">*</span>}
      </p>
      {!props.typeArea && (
        <input
          type="text"
          className="flex grow border-none rounded-lg text-lg"
          placeholder={props.placeholder}
        />
      )}
      {props.typeArea && (
        <textarea className="flex grow border-none rounded-lg" />
      )}
    </label>
  );
};
