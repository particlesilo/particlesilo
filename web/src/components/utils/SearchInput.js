import React from "react";

export const SearchInput = ({ name, placeholder, value, onChange}) => {
  return (
    <div className="mb-3 pt-0">
      <input
        type="text"
        className="px-3 py-4 placeholder-blueGray-300 text-gray-50 border-b-2 bg-white bg-opacity-0 focus:border-red-400 "
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
