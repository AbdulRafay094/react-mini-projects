import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Content(props) {
  return (
    <div className="flex items-center gap-10 h-[88vh] px-8 py-6">
      <LeftContent onAddUser={props.onAddUser} />
      <RightContent users={props.users} />
    </div>
  );
}

export default Content;
