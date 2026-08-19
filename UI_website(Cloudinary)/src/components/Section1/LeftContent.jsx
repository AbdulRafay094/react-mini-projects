import React from "react";
import HeroText from "./HeroText";
import Arrow from "./Arrow";
import AddCardForm from "./AddCardForm";

function LeftContent(props) {
  return (
    <div className="h-full flex flex-col justify-between w-[38%] pl-2">
      <HeroText />
      <div className="space-y-5">
        <AddCardForm onAddUser={props.onAddUser} />
        <Arrow />
      </div>
    </div>
  );
}

export default LeftContent;
