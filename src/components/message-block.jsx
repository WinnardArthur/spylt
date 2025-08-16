import { useGSAP } from "@gsap/react";
import gsap, { SplitText, ScrollSmoother } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MessageBlock = () => {
  useGSAP(() => {
    const firstMessageSplit = SplitText.create(".first-message", {
      type: "words",
    });

    const secondMessageSplit = SplitText.create(".second-message", {
      type: "words",
    });

    const paraSplit = SplitText.create("p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMessageSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        scrub: true,
        start: "top 80%",
        end: "30% center",
      },
    });

    gsap.to(secondMessageSplit.words, {
      color: "#faeade",
      stagger: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    let anim = gsap.to(".msg-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      duration: 1,
      paused: true,
    });

    gsap.to(".msg-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    const paraAnim = gsap.from(paraSplit.lines, {
      stagger: 0.05,
      yPercent: 310,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      paused: true,
    });

    ScrollTrigger.create({
      trigger: ".message-content p",
      start: "top 70%",
      onEnter: () => paraAnim.play(),
    });

    ScrollTrigger.create({
      trigger: ".message-content p",
      start: "top bottom",
      onLeaveBack: () => paraAnim.pause(0),
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>

            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p className="">
                Rev up your ebullient spirit and feed the adventure of life with
                SPYLT, where you're one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageBlock;
