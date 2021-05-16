import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchInput = ({ name, placeholder, value, onChange}) => {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-3 p-8">
      <input
        type="text"
        className="w-11/12 px-3 text-2xl py-3 placeholder-blueGray-300 text-gray-50 border-0 border-b-2 border-opacity-40 bg-white bg-opacity-0 focus:border-red-400 focus:outline-none "
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-xl z-10 h-full leading-snug text-center text-base items-center justify-center py-3 w-8"/>
    </div>
  );
};
