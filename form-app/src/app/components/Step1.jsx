"use client";
import React from "react";
import { Input } from "./Input";

export const Step1 = ({ handleChange }) => {
  return (
    <div className="w-full h-fit flex flex-col gap-[12px]">
      <Input
        formName="First name"
        formType="text"
        required={true}
        pattern="[A-Za-z]"
        name="firstName"
        setInputValue={handleChange}
      />
      <Input
        formName="Last name"
        formType="text"
        required={true}
        name="lastName"
        setInputValue={handleChange}
        pattern="[A-Za-z]"
      />
      <Input
        formName="Username"
        formType="text"
        required={true}
        name="userName"
        setInputValue={handleChange}
        pattern="[A-Za-z]"
      />
    </div>
  );
};
