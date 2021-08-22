import React, { useState } from "react";
import logo from "../assets/logos/logo-white.png";
import { styleClass } from "../utils/style_class";
import { SearchInput } from "./utils/SearchInput";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className={styleClass.container}>
      <img src={logo} className={styleClass.home.logo} alt="Particle Silo"/>
      <p className={styleClass.home.headline}>
        Content Aggregator. Personalizable. Shareable.
      </p>
      <p className={styleClass.home.headline}>
        Creativity On Demand! 
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
