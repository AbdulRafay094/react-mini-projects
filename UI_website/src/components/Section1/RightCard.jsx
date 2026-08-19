import React from "react";
import RightCardContent from "./RightCardContent";

function RightCard(props) {
  return (
    <div className="h-[72vh] min-w-[20rem] shrink-0 overflow-hidden relative rounded-4xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-[#d8d5cf]">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
      <RightCardContent
        color={props.color}
        id={props.id}
        tag={props.tag}
        intro={props.intro}
      />
    </div>
  );
}

export default RightCard;
