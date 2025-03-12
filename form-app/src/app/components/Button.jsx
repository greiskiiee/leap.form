"use client";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

export const Button = ({ handleBtnNext, handleBtnPrev, count }) => {
  return (
    <div className="w-full h-fit ">
      {count == 1 ? (
        <div className="w-full h-fit flex justify-between items-center gap-[4px]">
          <button
            type="submit"
            onClick={handleBtnNext}
            className="w-full h-fit box-border py-[10px] px-[12px] bg-[#121316] rounded-[6px] text-white flex justify-center items-center gap-[4px] inter text-[16px]"
          >
            Continue {count}/3
            <MdOutlineNavigateNext color="white" size={24} />
          </button>
        </div>
      ) : (
        <div className="w-full h-fit flex justify-between items-center box-border gap-[4px]">
          <button
            onClick={handleBtnPrev}
            className="w-1/3 h-[44px] box-border py-[10px] px-[12px] bg-[#fff] rounded-[6px] border-1 border-gray-300 text-black flex justify-center items-center gap-[4px] inter text-[16px]"
          >
            <MdOutlineArrowBackIos color="black" />
            Back
          </button>
          <button
            type="submit"
            onClick={handleBtnNext}
            className="w-2/3 h-fit box-border py-[10px] px-[12px] bg-[#121316] rounded-[6px] text-white flex justify-center items-center inter text-[16px] "
          >
            Continue {count}/3
            <MdOutlineNavigateNext color="white" size={24} />
          </button>
        </div>
      )}
    </div>
  );
};
