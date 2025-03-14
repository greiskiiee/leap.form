import React from "react";

export const Input = ({
  formName,
  formType,
  required,
  pattern,
  name,
  setInputValue,
  minLength,
  error,
  errMsg,
}) => {
  return (
    <div className="w-full h-fit box-border flex flex-col justify-between items-start gap-1">
      <label
        htmlFor={formName}
        className="text-[#334155] text-[14px] inter font-[600]"
      >
        {formName}
        {required ? <span className="text-red-600"> *</span> : <span> </span>}
      </label>
      {formType !== "image" ? (
        <div className="w-full h-fit">
          <div
            className="w-full h-fit box-border p-[12px] border-1 border-gray-300 rounded-[8px] focus:border-[#0CA5E9]"
            style={{ borderColor: error && "#FF0000" }}
          >
            <input
              onChange={setInputValue}
              type={formType}
              id={name}
              name={name}
              placeholder="Placeholder"
              className="w-full outline-0 "
              required={required}
              pattern={pattern}
              minLength={minLength}
            />
          </div>
          {error ? <p className="text-red-500 text-[14px]">{errMsg}</p> : null}
        </div>
      ) : (
        <div className="w-full h-fit">
          <div className="w-full h-fit box-border p-[12px] bg-gray-50 rounded-[8px]">
            <input
              onChange={setInputValue}
              type={formType}
              id={name}
              name={name}
              placeholder="Placeholder"
              className="w-full h-[180px] min-h-[80px] flex flex-col justify-center items-center outline-0 border-0 rounded-[6px]"
              required={required}
              pattern={pattern}
              minLength={minLength}
            />
          </div>
        </div>
      )}
    </div>
  );
};
