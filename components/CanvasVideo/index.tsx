import React, { useRef, useEffect } from 'react'

export default function CanvasVideo(props) {
    const canvas = useRef(null)
    const video = useRef(null)
    const fps = 60
    let width: number | null = 997
    let height: number | null = 865
    let canvasInterval: number | undefined = undefined

    const drawImage = () => {
        canvas.current.getContext('2d', { alpha: false }).drawImage(video.current, 0, 0, width, height);
    }

    useEffect(() => {
        width = window.innerWidth
        height = window.innerHeight
        canvas.current.width = width
        canvas.current.height = height
        canvasInterval = window.setInterval(() => {
            drawImage()
        }, 1000 / fps)

        video.current.addEventListener('play', () => {
            drawImage()
        },false);
    }, [])

    const onPause = () => {
        clearInterval(canvasInterval);
    }

    const onEnded = () => {
        clearInterval(canvasInterval)
    }

    const onPlay = () => {
        console.log('play')
        clearInterval(canvasInterval)
        canvasInterval = window.setInterval(() => {
          drawImage()
        }, 1000 / fps)
      }

    return (
        <>
            <div className="w-screen relative">
                <canvas 
                    ref={canvas}
                ></canvas>
                <video
                    controls 
                    autoPlay
                    ref={video}
                    src={props.src}
                    preload="auto"
                    playsInline
                    // webkit-playsinline
                    muted
                    className="invisible absolute -z-1 top-0"
                    onPause={onPause}
                    onEnded={onEnded}
                    onPlay={onPlay}
                >
                </video>
            </div>
        </>
    )
}