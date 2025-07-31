import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";

const VideoPin = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    if (!isMobile) {
      gsap.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: true,
          pin: true,
        },
      });
    }
  });

  return (
    <div className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
            willChange: "clip-path"
        }}
        className="size-full video-box"
      >
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />

        <div className="abs-center md:scale-100 scale-200">
          <img
            src="/images/circle-text.svg"
            alt="Spin circle"
            className="spin-circle"
          />

          <div className="play-btn">
            <img
              src="/images/play.svg"
              alt="Play icon"
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPin;
