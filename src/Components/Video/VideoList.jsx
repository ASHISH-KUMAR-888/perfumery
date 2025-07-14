import { useEffect, useRef, useState } from "react";
import Video from "./Video";

const VideoList = () => {
  const videos = [
    { title: "6.mp4", poster: "1.jpg" },
    { title: "4.mp4", poster: "2.jpg" },
    { title: "1.mp4", poster: "3.jpg" },
    { title: "3.mp4", poster: "4.jpg" },
    { title: "7.mp4", poster: "5.jpg" },
    { title: "2.mp4", poster: "6.jpg" },
    { title: "5.mp4", poster: "7.jpg" },
  ];

  const videoDiv = useRef(null);

  let currentDiv = useRef(null);

  const [videoChecker, setVideoChecker] = useState(false);

  const handleVideo = (e) => {
    const currentVideo = e.currentTarget;

    if (currentVideo.paused) {
      currentVideo.play();
      setVideoChecker(true);
    } else {
      currentVideo.pause();
      setVideoChecker(false);
    }
  };

  const handleSound = (e) => {
    const videoContainer = e.currentTarget.closest("div"); // Get the closest div
    const video = videoContainer.querySelector("video"); // Find the video inside that div

    if (!video) return;

    video.muted = !video.muted;

    // Optional: Toggle icon based on mute state
    const icon = e.currentTarget;
    icon.classList.toggle("fa-volume-high", !video.muted);
    icon.classList.toggle("fa-volume-xmark", video.muted);
  };

  useEffect(() => {
    const videosElement = videoDiv.current?.querySelectorAll("video");

    const observer = new IntersectionObserver(
      (data) => {
        data.forEach((d) => {
          const vid = d.target;

          if (d.isIntersecting) {
            vid.play();
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videosElement.forEach((data) => {
      return observer.observe(data);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="px-[25px] md:px-[35px]">
        <div
          className="flex justify-start items-center gap-x-[20px] gap-y-[90px] pb-[30px] mt-[120px] overflow-auto video-con md:gap-x-[50px] lg:flex lg:justify-center lg:items-center lg:flex-wrap"
          ref={videoDiv}
        >
          {videos.map((d, i) => {
            return (
              <div key={i} className=" relative">
                <i
                  className={`fa-solid fa-volume-xmark text-[#d2b070] text-[24px] cursor-pointer absolute right-[20px] bottom-[50px] z-[80]`}
                  onClick={handleSound}
                ></i>
                <Video
                  id={i}
                  title={d.title}
                  poster={d.poster}
                  handleVideo={handleVideo}
                  currentDiv={currentDiv}
                />
                ;
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VideoList;
