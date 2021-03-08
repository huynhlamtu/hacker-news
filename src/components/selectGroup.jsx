import React, { Component } from "react";
import Select from "./select";

const SelectGroup = ({ filterList, onSelectChange }) => {
  return (
    <div key="filters" className="d-flex p-2 ml-3 filters">
      {filterList.map((filterItem) => (
        <div key={filterItem._id} className="items">
          <Select
            _id={filterItem._id}
            items={filterItem.options}
            type={filterItem.type}
            onChange={onSelectChange}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectGroup;
