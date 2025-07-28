import React, { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonial = () => {
  const videoRef = useRef([]);

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .second-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const vidPinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true
      },
    });

    vidPinTl.from(".testimonials-section .vd-card", {
      yPercent: 150,
      ease: "power1.inOut",
      stagger: 0.2
    });
  });

  return (
    <div className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => {
              if (videoRef.current) {
                videoRef.current[index].play();
              }
            }}
            onMouseLeave={() => {
              if (videoRef.current) {
                videoRef.current[index].pause();
              }
            }}
          >
            <video
              ref={(el) => (videoRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
