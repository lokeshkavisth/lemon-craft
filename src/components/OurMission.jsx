import React from "react";
import cycler from "../assets/cycler.png";

function OurMission({ ref }) {
  return (
    <section
      ref={ref}
      className="min-h-screen grid items-end py-20 relative"
      id="page2"
    >
      <div className="w-80 space-y-4">
        <img src={cycler} alt="some image description" />
        <p>
          Interweaving scrintific accuracy, high quality visuallizations and
          engaging storytellig to pioneer the uncharted metaverse frontier
        </p>
      </div>
    </section>
  );
}

export default OurMission;
