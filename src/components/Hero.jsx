import React from "react";
import Button from "./ui/Button";

const Hero = React.forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="flex justify-between min-h-[calc(100vh-8rem)]"
      id="page1"
    >
      {/* Hero Left */}
      <section className="flex flex-col items-start justify-around">
        <div>
          <h1 id="hero-title" className="text-8xl font-bold">
            Astro NFT
          </h1>
          <div id="hero-content" className="ml-10 w-96 mt-10 space-y-8">
            <p>
              Exclusively for Gesesis NFT Holders, our Astro NFT collection is
              the first metaverse wearable created for Everdome.
            </p>
            <Button>Connect your wallet</Button>
          </div>
        </div>

        <div id="hero-stats">
          <h2 className="font-bold text-5xl mb-2">9,999</h2>
          <p>Collection Size</p>
        </div>
      </section>

      {/* Hero Middle */}
      <section className="mt-12">
        <div className="w-80 bg-black h-[calc(100%-20%)]" />
      </section>

      {/* Hero Right */}
      <section className="w-80 mt-20" id="hero-right">
        <p>
          Distinctive, one of a kind metaverse wearabales. Designed to be used
          during your Everdome City experience.
        </p>
      </section>
    </div>
  );
});

Hero.displayName = "Hero";
export default Hero;
