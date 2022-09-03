import { CanvasVideo } from 'components';
import React from 'react'

export default function Main() {
  return (
    <>
      <section>
        <div className="relative">
          <CanvasVideo
            src="https://acre-website.s3.ap-northeast-1.amazonaws.com/videos/ocean-video.mp4"
          />
          <div
            className="absolute text-5xl text-white top-1/3 w-screen text-center"
          >
            <h1>Welcome to <span
              className="text-5xl inline-block align-top text-left"
              style={{
                borderBottom: '3px double white',
                lineHeight: '1.1em'
              }}
            >Asia Capital Reinsurance <br/>Service Corportation Limited.</span></h1>
          </div>
        </div>
      </section>
    </>
  );
}
