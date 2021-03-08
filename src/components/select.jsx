import React from "react";

const Select = ({ items, label, type, ...rest }) => {
  return (
    <div className="input-group">
      <div className="input-group-append">
        <label className="mt-2 ml-4 mr-2" htmlFor="inputGroupSelect02">
          {type}
        </label>
      </div>
      <select
        name={type}
        {...rest}
        key={"select" + type}
        style={{ width: 120 }}
        className="custom-select"
        id="inputGroupSelect02"
      >
        {items.map((item) => (
          <option value={item.onProperty + "," + item.timeRange}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
