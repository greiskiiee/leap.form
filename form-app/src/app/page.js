"use client";

import { Button } from "./components/Button";
import { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";

export default function Home() {
  let [count, setCount] = useState(0);
  const [isFilled, setPage] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phone: "d",
    email: "d",
    birthDate: "d",
    pro: "d",
    password: "d",
    confirmpass: "d",
  });

  const handleBtnPrev = () => {
    if (count == 1) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  const handleBtnNext = () => {
    if (count >= 2) {
      return;
    }

    if (Object.values(formData).some((val) => val.trim() === "")) {
      console.log("Fill the form");
    } else {
      if (!/^[A-Za-z]+$/.test(formData.firstName)) {
        console.log("First name cannot contain special characters or numbers.");
      }

      if (!/^[A-Za-z]+$/.test(formData.lastName)) {
        console.log("First name cannot contain special characters or numbers.");
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        console.log("Please provide a valid email address.");
      }

      if (!/^\+?\d{8}$/.test(formData.email)) {
        console.log("Please provide a valid phone number.");
      }

      if (formData.password.length < 6) {
        console.log("Password length must be at least 6 characters");
      }

      if (formData.password !== formData.confirmpass) {
        console.log("Password does not match.");
      }
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(formData);

  const CurrentPage = [Step1, Step2, Step3][count];
  return (
    <form
      className="w-screen h-screen flex justify-center items-center bg-[#F4F4F4]"
      // onSubmit={handleChange}
    >
      <div className="w-[480px] h-fit min-h-[655px] p-[32px] box-border flex flex-col justify-between items-center bg-white rounded-[8px] gap-[28px]">
        {/* header*/}
        <div className="w-full h-fit flex flex-col justify-center items-start gap-[8px]">
          <img src="MainLogo.png" className="w-[60px] h-[60px]" />
          <p className="text-[#202124] font-[600] text-[26px] inter">
            Join Us! 😎
          </p>
          <p className="text-[#8E8E8E] text-[18px] ">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="w-full h-fit min-h-[404px] flex flex-col justify-between items-center gap-[28px]">
          {/* form container */}
          <CurrentPage handleChange={handleChange} />

          {/* button container */}
          <div className="w-full h-fit">
            <Button
              handleBtnNext={handleBtnNext}
              handleBtnPrev={handleBtnPrev}
              count={count + 1}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
