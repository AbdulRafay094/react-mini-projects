import React from "react";
import RightCard from "./RightCard";

function RightContent(props) {
  return (
    <div
      id="right"
      className="h-full flex items-center rounded-[2.5rem] overflow-x-auto flex-nowrap gap-8 p-4 w-[62%]"
    >
      {props.users.map((item, index) => (
        <RightCard
          key={index}
          id={index}
          color={item.color}
          img={item.img}
          tag={item.tag}
          intro={item.intro}
        />
      ))}
    </div>
  );
}

export default RightContent;
