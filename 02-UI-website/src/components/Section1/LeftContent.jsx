import React from "react";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

function LeftContent() {
  return (
    <div className="h-full flex flex-col justify-between w-[38%] pl-2">
      <HeroText />
      <Arrow />
    </div>
  );
}

export default LeftContent;
