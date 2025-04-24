"use client";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

// IoPlay, IoPause, 

// Global variable to track the currently playing video
let currentlyPlaying: HTMLVideoElement | null = null;

export default function VideoPlayer({
  link,
  className,


}: {
  link: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const handleVideoEnd = () => {
      setIsPlaying(false);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  useEffect(() => {
    const handleStopOtherVideos = (event: CustomEvent) => {
      if (event.detail !== videoRef.current) {
        setIsPlaying(false);
      }
    };

    window.addEventListener(
      "stopOtherVideos",
      handleStopOtherVideos as EventListener
    );

    return () => {
      window.removeEventListener(
        "stopOtherVideos",
        handleStopOtherVideos as EventListener
      );
    };
  }, []);

  const handlePlayPause = async () => {
    if (!videoRef.current) return;

    try {
      if (currentlyPlaying && currentlyPlaying !== videoRef.current) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
        currentlyPlaying.muted = false;
      }

      if (isPlaying) {
        videoRef.current.pause();
        currentlyPlaying = null;
      } else {
        await videoRef.current.play();
        currentlyPlaying = videoRef.current;

        // Notify other components to update their play buttons
        window.dispatchEvent(
          new CustomEvent("stopOtherVideos", { detail: videoRef.current })
        );
      }

      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error playing video:", error);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progressPercentage =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progressPercentage);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newTime = (offsetX / rect.width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <section
      className={cn(
        "relative w-[30em] h-[28em] overflow-hidden rounded-[10px] ",
        className
      )}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onClick={handlePlayPause}
        onTimeUpdate={handleProgress}
        loop
        muted
        autoPlay
      >
        <source src={link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button */}
      {/* <div className="absolute top-5 right-5 w-16 h-16 rounded-full flex items-center justify-center transform bg-white/80 p-3">
        <button
          onClick={handlePlayPause}
          className="size-full flex items-center justify-center text-white text-2xl bg-[#350F5A]/20 rounded-full "
        >
          {isPlaying ? (
            <IoPause className="text-black" />
          ) : (
            <IoPlay className="text-black" />
          )}
        </button>
      </div> */}

      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-50 flex items-center justify-between">
          {/* Progress Bar */}
          <div
            ref={progressRef}
            className="relative flex-grow mx-3 h-2 bg-white/50 rounded-full cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="absolute top-0 left-0 h-2 bg-tcolor rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Volume Controls */}
          <button onClick={handleMute} className="text-white text-2xl mx-2">
            {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
          </button>
        </div>
      )}
    </section>
  );
}
