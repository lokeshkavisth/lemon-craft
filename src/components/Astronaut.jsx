import React from "react";
import astro from "../assets/vp9.webm";

const Astronaut = React.forwardRef((_, ref) => {
  return (
    <div
      className="w-72 absolute top-[21rem] right-96 transition-transform ease duration-75"
      style={{ perspective: "800px" }}
    >
      <video ref={ref} src={astro} autoPlay loop muted type="video/webm" />
    </div>
  );
});

Astronaut.displayName = "Astronaut";

export default Astronaut;
