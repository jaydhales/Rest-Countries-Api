import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const info = props.info;
  return (
    <div
      className="card"
      id={info.cca3}
      style={
        props.mode
          ? {}
          : {
              background: "hsl(209, 23%, 22%)",
              boxShadow: 0,
            }
      }
    >
      <Link to="/Details">
        <img
          src={info.flags.png}
          className="showDet"
          alt="Flag of {info.name.common}"
          id={info.area}
        />
      </Link>

      <div className="desc">
        <h3>{info.name.common}</h3>
        <p className="pop">
          Population:{" "}
          <span>{Number(info.population).toLocaleString("en")}</span>
        </p>
        <p>
          Region: <span>{info.region}</span>
        </p>
        <p>
          Capital: <span>{info.capital}</span>
        </p>
      </div>
    </div>
  );
}
