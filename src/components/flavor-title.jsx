import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

export const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });

    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: 'power4.inOut',
        scrollTrigger: {
            trigger: '.flavor-section',
            start: "top 30%"
        }
    })

    gsap.to('.flavor-text-scroll', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        scrollTrigger: {
            trigger: ".flavor-section",
            start: "top 10%",
        }
    })

    gsap.from(secondTextSplit.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '.flavor-section',
            start: "top 1%"
        }
    })
  });

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We Have 6</h1>
      </div>

      <div
        className="flavor-text-scroll"
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
      >
        <div className="bg-mid-brown px-2 pb-2 2xl:pt-0">
          <h2 className="text-milk">Freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delicious flavors</h1>
      </div>
    </div>
  );
};
