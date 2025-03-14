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
        minLength={2}
        setInputValue={handleChange}
        error={true}
        errMsg="First name cannot contain special characters or numbers."
      />
      <Input
        formName="Last name"
        formType="text"
        required={true}
        name="lastName"
        minLength={1}
        setInputValue={handleChange}
        pattern="[A-Za-z]"
        errMsg="First name cannot contain special characters or numbers."
      />
      <Input
        formName="Username"
        formType="text"
        required={true}
        name="userName"
        minLength={4}
        setInputValue={handleChange}
        pattern="[A-Za-z]"
      />
    </div>
  );
};
