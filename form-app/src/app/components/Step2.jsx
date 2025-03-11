"use client";
import React from "react";
import { Input } from "./Input";

export const Step2 = ({ handleChange }) => {
  return (
    <div className="w-full h-fit flex flex-col gap-[12px]">
      <Input
        formName="Email"
        formType="text"
        required={true}
        pattern="[A-Za-z]@gmail.com"
        name="email"
        setInputValue={handleChange}
      />
      <Input
        formName="Phone Number"
        formType="tel"
        required={true}
        name="phone"
        setInputValue={handleChange}
        pattern="[A-Za-z]"
      />
      <Input
        formName="Password"
        formType="password"
        required={true}
        name="password"
        setInputValue={handleChange}
        pattern="[A-Za-z]"
      />
      <Input
        formName="Confirm Password"
        formType="password"
        required={true}
        name="password"
        setInputValue={handleChange}
        pattern="[A-Za-z]"
      />
    </div>
  );
};
