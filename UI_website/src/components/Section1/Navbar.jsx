import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-8 py-5">
      <div className="bg-[#1b1b1b] text-white uppercase px-6 py-3 rounded-full text-[0.8rem] tracking-[0.18em] font-semibold shadow-sm">
        Target Audience
      </div>
      <div className="flex items-center gap-2 text-[#1d1d1d] uppercase text-[0.7rem] tracking-[0.22em] font-medium opacity-80">
        <span className="inline-block h-2 w-2 rounded-full bg-[#1d1d1d]" />
        <span>Digital Banking Platform</span>
      </div>
    </div>
  );
}

export default Navbar;
