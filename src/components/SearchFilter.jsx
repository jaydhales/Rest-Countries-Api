import React from "react";

export default function SearchFilter(props) {
  const customStyle = props.mode
    ? {}
    : {
        background: "hsl(209, 23%, 22%)",
        color: "hsl(0, 0%, 98%)",
      };

  return (
    <div className="search-filter">
      <div className="search-div" style={customStyle}>
        <i className="fas fa-search"></i>

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country..."
          style={customStyle}
          value={props.searchValue}
          onChange={props.handleSearch}
        />
      </div>

      <div className="filter-div" style={customStyle}>
        <input
          list="filters"
          id="filter"
          placeholder="Filter by Region"
          style={customStyle}
          value={props.filterValue}
          onChange={props.regionFilter}
          onKeyUp={props.regionFilter}
        />
        <datalist id="filters">
          <option value="">All region</option>
          <option value="Africa"></option>
          <option value="Americas"></option>
          <option value="Asia"></option>
          <option value="Europe"></option>
          <option value="Oceania"></option>
        </datalist>
      </div>
    </div>
  );
}
