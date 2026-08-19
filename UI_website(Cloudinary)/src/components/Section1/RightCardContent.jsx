import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-8">
      <div className="flex justify-start">
        <h2 className="bg-white/90 text-[#1c1c1c] text-3xl font-semibold rounded-full h-12 w-12 flex justify-center items-center shadow-sm">
          {props.id + 1}
        </h2>
      </div>

      <div>
        <p className="text-[1.15rem] leading-[1.3] text-white mb-8 max-w-[16rem] drop-shadow-md">
          {props.intro}
        </p>

        <div className="flex justify-end">
          <button
            style={{ backgroundColor: props.color }}
            className="inline-flex items-center gap-3 text-white font-medium px-5 py-2 rounded-full text-[0.95rem] shadow-md"
          >
            <span>{props.tag}</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25">
              <i className="ri-arrow-right-line text-base"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
