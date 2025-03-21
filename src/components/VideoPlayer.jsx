import React, { useRef, useState } from 'react'

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgress = () => {
    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(percentage)
  }

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  }

  return (
    <>
      <div className="video-player">
        <video
          src={src}
          ref={videoRef}
          onTimeUpdate={handleProgress}
          className='video'
        ></video>
        <div className="controls">
          <button className='play-pause'>{isPlaying ? "Pause" : "Play"}</button>
          <input 
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className='progress'  
          />
        </div>
      </div>
    </>
  )
}

export default VideoPlayer