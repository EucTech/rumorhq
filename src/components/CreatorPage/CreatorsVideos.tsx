import React from "react";
import { Fade } from "react-awesome-reveal";
import VideoPlayer from "./VideoPlayer";

const CreatorsVideos = () => {
  return (
    <section className="w-[98%] sm:w-[90%] mx-auto rounded-3xl mb-10 py-20 px-5 sm:px-10 flex flex-col gap-5 items-center justify-center bg-[#F3F3F3]">
       {/* <Zoom
          delay={100}
          duration={1000}
          damping={0.5}
          fraction={0.1}
          triggerOnce
          className="flex items-center justify-center"
        >
      <h1 className=" text-tcolor-5 text-center text-[35px] md:text-[50px] font-ebold leading-[1.1]">
        Here s what our students say about us
      </h1>
      </Zoom>

      <Zoom
          delay={200}
          duration={1000}
          damping={0.5}
          fraction={0.1}
          triggerOnce
          className="flex items-center justify-center"
        >
      <p className=" w-full md:w-[90%] lg:w-[55%] mb-6 text-tcolor-1 text-[20px] font-eregular text-center">
        At LangCub, we make language learning fun, effective, and tailored to
        you. Discover why thousands of learners trust us to help them achieve
        fluency
      </p>
      </Zoom> */}

      <div className="overflow-hidden grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full items-center justify-center gap-5">
        <Fade
          direction="up"
          delay={100}
          duration={1000}
          damping={0.5}
          fraction={0.1}
          triggerOnce
          className="flex items-center justify-center"
        >
          <VideoPlayer
            link="https://videos.pexels.com/video-files/5200349/5200349-uhd_2560_1440_25fps.mp4"
            className=" w-[100%]"
          />
        </Fade>
        <Fade
          direction="up"
          delay={400}
          duration={1000}
          damping={0.5}
          fraction={0.1}
          triggerOnce
          className="flex items-center justify-center"
        >
          <VideoPlayer
            link="https://videos.pexels.com/video-files/5904770/5904770-uhd_1440_2560_24fps.mp4"
            className="w-[100%]"
          />
        </Fade>

        <Fade
          direction="up"
          delay={600}
          duration={1000}
          damping={0.5}
          fraction={0.1}
          triggerOnce
          className="flex items-center justify-center"
        >
          <VideoPlayer
            link="https://videos.pexels.com/video-files/4961923/4961923-uhd_1440_2560_25fps.mp4"
            className="w-[100%]"
          />
        </Fade>
        <Fade
          direction="up"
          delay={800}
          duration={1000}
          damping={0.5}
          fraction={0.1}
          triggerOnce
          className="flex items-center justify-center"
        >
          <VideoPlayer
            link="https://videos.pexels.com/video-files/4961923/4961923-uhd_1440_2560_25fps.mp4"
            className="w-[100%]"
          />
        </Fade>
      </div>
    </section>
  );
};

export default CreatorsVideos;
