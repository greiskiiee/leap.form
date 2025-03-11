"use client";
import React from "react";
import { Input } from "./Input";

export const Step3 = ({ handleChange }) => {
  return (
    <div className="w-full h-fit flex flex-col gap-[12px]">
      <Input
        formName="Date of Birth"
        formType="date"
        required={true}
        pattern="[A-Za-z]"
        name="birthDate"
        setInputValue={handleChange}
      />
      <Input
        formName="Profile Image"
        formType="image"
        required={true}
        name="pro"
        setInputValue={handleChange}
        pattern="[A-Za-z]"
      />
    </div>
  );
};
