import React from "react";
import { Link } from "react-router-dom";
import '../styles/countries.css'


const CountryCard = ({ title, capital, imageUrl }) => {
  return (
    <>
      <div className="card">
        <img src={imageUrl} alt={title} className="country-image" />

        <div className="card-alt">
          <div className="card-content">
            <span> <h3>{title}</h3> </span>
            <span>  <b>Capital: </b> {capital} </span>
          </div>

          <div>
            <Link
              to={{
                pathname: "./country-detail",
                search: `?title=${title}`,
              }}
            >
              <button>Country Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
