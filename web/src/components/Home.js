import React, { useState } from "react";
import logo from "../assets/logos/logo-white.png";
import { SearchInput } from "./utils/SearchInput";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="w-1/3 mx-auto">
      <img src={logo} className="object-scale-down" />
      <p className="text-gray-50 text-3xl text-center">
        The best Science Communication materials for your next outreach
        activities!
      </p>
      <SearchInput
        name="search"
        value={searchQuery}
        placeholder="Search"
        onChange={onSearchInput}
      />
    </div>
  );
};
