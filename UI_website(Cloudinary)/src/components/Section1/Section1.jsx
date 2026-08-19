import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

function Section1(props) {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Content users={props.users} onAddUser={props.onAddUser} />
    </div>
  );
}

export default Section1;
