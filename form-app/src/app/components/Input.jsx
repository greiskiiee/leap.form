import React from "react";

export const Input = ({
  formName,
  formType,
  required,
  pattern,
  name,
  setInputValue,
}) => {
  return (
    <div className="w-full h-[68px] box-border flex flex-col justify-between items-start">
      <label
        htmlFor={formName}
        className="text-[#334155] text-[14px] inter font-[600]"
      >
        {formName}
        {required ? <span className="text-red-600"> *</span> : <span> </span>}
      </label>
      <div className="w-full h-fit box-border p-[12px] border-1 border-gray-300 rounded-[8px]">
        <input
          onChange={setInputValue}
          type={formType}
          id={formType}
          name={name}
          placeholder="Placeholder"
          className="w-full outline-0"
          required={required}
          pattern={pattern}
        />
      </div>
    </div>
  );
};
