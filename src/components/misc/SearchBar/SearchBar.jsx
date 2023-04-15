import React, { useState } from "react";
import Input from "../../../assets/Forms/Input";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  //const [search, setSearch] = useState(true);
  return (
    <div className="SearchBar">
      <NavLink className="d-flex" to="/products/search">
        <Input type="text" placeholder="Buscar..."></Input>
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </NavLink>
    </div>
  );
};

export default SearchBar;
