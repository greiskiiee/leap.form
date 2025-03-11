import React from "react";

export const Input = ({ formName, formType, required, pattern }) => {
  return (
    <div className="w-full h-fit box-border flex flex-col justify-center items-start gap-[8px] ">
      <label
        for={formName}
        className="text-[#334155] text-[14px] inter font-[600]"
      >
        {formName}
        {required ? <span className="text-red-600"> *</span> : <span> </span>}
      </label>
      <div className="w-full h-fit box-border p-[12px] border-1 border-gray-300 rounded-[8px]">
        <input
          type={formType}
          id={formType}
          placeholder="Placeholder"
          className="w-full"
          required={required}
          pattern={pattern}
        />
      </div>
    </div>
  );
};
