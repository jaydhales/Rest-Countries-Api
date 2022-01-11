import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details.jsx";
import("./App.css");

function App() {
  const [initCountries, setInitCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [details, setDetails] = useState([]);
  const [mode, setMode] = useState(true);
  const [searchValue, setSearch] = useState("");
  const [filterValue, setFilter] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((result) => {
        setInitCountries(result);
        setCountries(result);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("click", showDetails);

    return () => {
      window.removeEventListener("click", showDetails);
    };
  });

  function changeMode(event) {
    event.preventDefault();
    setMode(!mode);
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function regionFilter(e) {
    e.preventDefault();
    setFilter(e.target.value);
  }

  useEffect(() => {
    searchValue === "" && filterValue === ""
      ? setCountries(initCountries)
      : setCountries(
          initCountries.filter(
            (info) =>
              info.name.common
                .toLowerCase()
                .startsWith(searchValue.toLowerCase()) &&
              info.region.toLowerCase().startsWith(filterValue.toLowerCase())
          )
        );
  }, [searchValue, filterValue]);

  function showDetails(e) {
    e.preventDefault();
    e.target.className === "showDet" &&
      setDetails(
        initCountries.filter((info) => info.area.toString() === e.target.id)
      );
  }

  return (
    <div
      className="App"
      style={
        mode
          ? {}
          : {
              background: "hsl(207, 26%, 17%)",
              color: "hsl(0, 0%, 98%)",
            }
      }
    >
      <Header changeMode={changeMode} mode={mode} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Section
              countries={countries}
              mode={mode}
              handleSearch={handleSearch}
              regionFilter={regionFilter}
              searchValue={searchValue}
              filterValue={filterValue}
              showDetails={showDetails}
            />
          </Route>
          <Route path="/details" exact>
            <Details details={details} mode={mode} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
