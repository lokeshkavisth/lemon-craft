import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ className, ...props }) {
  return (
    <button
      className={twMerge(
        "px-8 py-3 bg-black text-white font-semibold text-sm",
        className
      )}
      {...props}
    />
  );
}

export default Button;
