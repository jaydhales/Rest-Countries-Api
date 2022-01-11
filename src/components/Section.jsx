import React from "react";
import SearchFilter from "./SearchFilter.jsx";
import Card from "./Card.jsx";

export default function Section(props) {
  const countries = props.countries;
  return (
    <section>
      <SearchFilter
        mode={props.mode}
        handleSearch={props.handleSearch}
        regionFilter={props.regionFilter}
        searchValue={props.searchValue}
        filterValue={props.filterValue}
        showDetails={props.showDetails}
      />
      <main>
        {countries.map((info) => (
          <Card
            info={info}
            key={info.cca3}
            changeMode={props.changeMode}
            mode={props.mode}
          />
        ))}
      </main>
    </section>
  );
}
