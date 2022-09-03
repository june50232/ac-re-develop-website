import React, { useRef } from 'react'

export default function CanvasVideo(props) {
    const canvas = useRef(null)
    const video = useRef(null)
    const fps = 60
    const width = 1280
    const height = 720
    let canvasInterval: number | undefined = undefined

    const drawImage = () => {
        canvas.getContext('2d', { alpha: false }).drawImage(video, 0, 0, width, height);
    }

    canvasInterval = window.setInterval(() => {
        drawImage()
    }, 1000 / fps)

    const onPause = () => {
        clearInterval(canvasInterval);
    }

    const onOpended = () => {
        clearInterval(canvasInterval)
    }

    const onPlay = () => {
        clearInterval(canvasInterval)
        canvasInterval = window.setInterval(() => {
          drawImage()
        }, 1000 / fps)
      }

    return (
        <>
            <canvas 
                ref={canvas}
                width="1280" 
                height="720"
            ></canvas>
            <video
                ref={video}
                src={props.src}
                preload="auto"
                autoplay
                playsinline
                webkit-playsinline
                muted
                hidden
                onpause={onPause}
                onopended={onOpended}
                onplay={onPlay}
            >
            </video>
        </>
    )
}