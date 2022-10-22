import React from 'react';
import { Section, GradientBg, BannerImage, GoogleMap } from 'components';
import { contactBannerImgUrl, globalDottedImgUrl } from 'common/imgUrls';
import {
  FcPhoneAndroid,
  FcDepartment,
  FcPrint,
  FcFeedback,
} from 'react-icons/fc';

export default function Contact() {
  return (
    <>
      <Section classname="h-96">
        <GradientBg background="rgba(255, 247, 237, 0.85)" />
        <BannerImage url={contactBannerImgUrl} />
        <div
          className="absolute h-full w-full flex flex-col justify-center items-center space-y-5"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold">Get in touch with AC Re!</h2>
          <hr className="w-8 text-neutral-500" />
          <h3 className="text-lg w-6/12 text-center leading-loose font-semibold">
            AC Re brings industry knowledge, expertise, and insight to design
            programs for your business&apos;s specific risks and needs. As
            strategic advisors, we build long-term partnerships with local and
            regional insurance companies to assure you have the protection you
            need.
          </h3>
        </div>
      </Section>
      <Section
        classname="h-80 grow flex items-center justify-center"
        data-aos="fade-up"
      >
        <div className="w-full h-3/6 flex justify-evenly items-start">
          <a
            href="https://www.google.com.tw/maps/place/10491%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E9%95%B7%E5%AE%89%E6%9D%B1%E8%B7%AF%E4%BA%8C%E6%AE%B563%E8%99%9F/@25.0485715,121.5315824,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a963cec3cdd7:0xd8de6f134ac1fbc2!8m2!3d25.0485715!4d121.5337711?hl=zh-TW"
            className="flex flex-col space-y-3 items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FcDepartment color="#A0DDFE" fontSize="3rem" />
            <div className="flex flex-col space-y-6 items-center">
              <h3 className="font-bold text-primary-darkest text-xl">
                Address
              </h3>
              <h5 className="text-lg text-secondary-light leading-relaxed text-center">
                9F.-5, No. 63,
                <br /> Sec. 2, Chang&apos;an East Rd.,
                <br />
                Taipei 104097, Taiwan
              </h5>
            </div>
          </a>
          <a
            href="tel:886225080488"
            rel="noopener noreferrer"
            className="flex flex-col space-y-3 items-center"
          >
            <FcPhoneAndroid color="#A0DDFE" fontSize="3rem" />
            <div className="flex flex-col space-y-6 items-center">
              <h3 className="font-bold text-primary-darkest text-xl">Call</h3>
              <h5 className="text-lg text-secondary-light leading-relaxed text-center">
                +886-2-2508-0488
              </h5>
            </div>
          </a>
          <a
            href="mailto:info@ac-re.com.tw"
            rel="noopener noreferrer"
            className="flex flex-col space-y-3 items-center"
          >
            <FcFeedback color="#A0DDFE" fontSize="3rem" />
            <div className="flex flex-col space-y-6 items-center">
              <h3 className="font-bold text-primary-darkest text-xl">Email</h3>
              <h5 className="text-lg text-secondary-light leading-relaxed text-center">
                info@ac-re.com.tw
              </h5>
            </div>
          </a>
          <div className="flex flex-col space-y-3 items-center">
            <FcPrint color="#A0DDFE" fontSize="3rem" />
            <div className="flex flex-col space-y-6 items-center">
              <h3 className="font-bold text-primary-darkest text-xl">Fax</h3>
              <h5 className="text-lg text-secondary-light leading-relaxed text-center">
                +886-2-2508-1348
              </h5>
            </div>
          </div>
        </div>
      </Section>
      <Section
        className="relative flex flex-col justify-evenly items-center space-y-10 h-[55rem]"
        style={{
          background: 'rgba(255, 247, 237, 0.85)',
        }}
      >
        <div className="absolute -z-[1] top-2 -right-20 h-72 w-4/6">
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
          className="h-40 w-full flex flex-col justify-center items-center space-y-10 relative"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-primary-darker">
            Need More Help?
          </h2>
          <hr className="w-8 text-neutral-500" />
          <h5 className="text-xl w-9/12 text-center text-primary-darker">
            Whether you are looking for specific solutions or have a question,{' '}
            <br />
            you can also connect with us via the contact form below.
          </h5>
        </div>
        <div
          className="flex flex-wrap w-4/6 h-96 justify-between items-center"
          data-aos="fade-up"
        >
          <TextInput title="Your Name" required />
          <TextInput title="Company Name" />
          <TextInput title="Email Address" required />
          <TextInput title="Phone Number" />
          <TextInput title="Subject" widthFull />
          <TextInput title="Message" required widthFull typeArea />
          <div className="w-full h-auto flex justify-end items-center mr-8">
            <button className="bg-neutral-500 text-lg px-24 py-3 font-bold">
              Submit
            </button>
          </div>
        </div>
      </Section>
      <Section classname="h-96">
        {/* <GradientBg background="rgba(255, 247, 237, 0.4)" /> */}
        {/* <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=@25.0469492,121.5254558&zoom=16&size=100%x100%&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=YOUR_API_KEY&map_id=YOUR_MAP_ID&signature=YOUR_SIGNATURE" 
                /> */}
        <GoogleMap></GoogleMap>
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
      <p className="text-lg w-[12rem] flex whitespace-nowrap mr-2">
        {props.title}
        {props.required && <span className="text-red">*</span>}
      </p>
      {!props.typeArea && (
        <input
          type="text"
          className="flex grow border-none rounded-lg text-lg"
        />
      )}
      {props.typeArea && (
        <textarea className="flex grow border-none rounded-lg" />
      )}
    </label>
  );
};
