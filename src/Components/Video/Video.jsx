const Video = ({ id, title, poster, handleVideo, currentDiv }) => {
  return (
    <>
      <video
        className="rounded-[20px] cursor-pointer max-w-[280px] md:max-w-[320px]"
        width="320"
        height="320"
        poster={`./video-posters/${poster}`}
        muted
        loop
        preload="none"
        onClick={handleVideo}
        ref={currentDiv}
      >
        <source src={`./videos/${title}`} type="video/mp4" />
      </video>
    </>
  );
};

export default Video;
