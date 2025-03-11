"use client";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { use, useState } from "react";
import { Step1 } from "./components/Step1";
import { handleClientScriptLoad } from "next/script";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";

export default function Home() {
  let [count, setCount] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    birthDate: "",
    pro: "",
  });

  const handleBtnPrev = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleBtnNext = () => {
    if (count >= 3) {
      return;
    }

    setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData);

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
          {count == 1 ? <Step1 handleChange={handleChange} /> : null}
          {count == 2 ? <Step2 handleChange={handleChange} /> : null}
          {count == 3 ? <Step3 handleChange={handleChange} /> : null}
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
