import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1752170080622-18196de87763?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#8cc7ff",
      intro:
        "Prime customers, that have access to bank credit and are satisfied with the current product",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#92bafe",
      intro:
        "Prime customers, that have access to bank credit and are not satisfied with the current service",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#d9d95e",
      intro:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag: "Underbanked",
    },
  ];
  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  );
}

export default App;
