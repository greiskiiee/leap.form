"use client";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { use, useState } from "react";

export default function Home() {
  let [count, setCount] = useState(1);

  const handleBtnPrev = () => {
    setCount(count--);
  };

  const handleBtnNext = () => {
    if (count >= 3) {
      return;
    }
    setCount(count++);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F4F4F4]">
      <div className="w-[480px] h-[655px] p-[32px] box-border flex flex-col justify-between items-center bg-white rounded-[8px]">
        {/* form container */}
        <div className="w-full h-fit flex flex-col gap-[28px] justify-center items-center">
          <div className="w-full h-fit flex flex-col justify-center items-start gap-[8px]">
            <img src="MainLogo.png" className="w-[60px] h-[60px]" />
            <p className="text-[#202124] font-[600] text-[26px] inter">
              Join Us!😎
            </p>
            <p className="text-[#8E8E8E] text-[18px] ">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="w-full h-fit flex flex-col gap-[12px]">
            <Input
              formName="First name"
              formType="text"
              required={true}
              pattern="[A-Za-z]"
            />
            <Input
              formName="Last name"
              formType="text"
              required={true}
              pattern="[A-Za-z]"
            />
            <Input
              formName="Username"
              formType="text"
              required={false}
              pattern="[A-Za-z]"
            />
          </div>
        </div>

        {/* button container */}
        <div className="w-full h-fit">
          <Button
            handleBtnNext={handleBtnNext}
            handleBtnPrev={handleBtnPrev}
            count={count}
          />
        </div>
      </div>
    </div>
  );
}
