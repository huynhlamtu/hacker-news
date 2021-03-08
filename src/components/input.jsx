import React from "react";

const Input = ({ onChange, searchPlaceholder, value }) => {
  return (
    <input
      value={value}
      className="form-control"
      type="text"
      placeholder={searchPlaceholder}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default Input;
