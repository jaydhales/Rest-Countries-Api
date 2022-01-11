import React from "react";
import { Link } from "react-router-dom/";

function Details(props) {
  const info = props.details[0];
  console.log(info);
  return (
    <aside>
      <Link
        to="/"
        className="back-btn"
        style={
          props.mode
            ? {}
            : {
                background: "rgb(43, 57, 69)",
                color: "white",
              }
        }
      >
        <i className="fa fa-arrow-left"></i> Back
      </Link>

      {props.details.length === 0 ? (
        <p
          style={{
            fontSize: 30,
            margin: 30,
          }}
        >
          Error, Please go back
        </p>
      ) : (
        <div className="detail-div">
          <img src={info.flags.png} className="detail-img" alt="" />

          <div className="detail-desc">
            <h3>{info.name.common}</h3>

            <div className="desc-div">
              <div className="main-desc">
                <p>
                  Native Name:{" "}
                  <span>
                    {Object.values(info.name.nativeName).map((i) => i.official)}
                  </span>
                </p>
                <p>
                  Population: <span>{info.population.toLocaleString()}</span>
                </p>
                <p>
                  Region: <span>{info.region}</span>
                </p>
                <p>
                  Sub Region: <span>{info.subregion}</span>
                </p>
                <p>
                  Capital: <span>{info.capital.map((i) => i)}</span>
                </p>
              </div>

              <div className="other-desc">
                <p>
                  Top Level Domain: <span>{info.tld.join(", ")}</span>
                </p>
                <p>
                  Currencies:{" "}
                  <span>
                    {Object.values(info.currencies).map(
                      (i) => `${i.name} (${i.symbol}) `
                    )}
                  </span>
                </p>
                <p>
                  Languages:{" "}
                  <span>{Object.values(info.languages).join(", ")}</span>
                </p>
              </div>
            </div>

            <p>
              Border Countries:{" "}
              <span>
                {info.borders && Object.values(info.borders).join(", ")}
              </span>
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Details;
