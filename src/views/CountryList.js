import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Search from "../components/Search";
import '../styles/countries.css'


const CardList = () => {
  const [keyword, setKeyword] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCountries(res);
        setFilteredCountries(res);
      });
  }, []);

  useEffect(() => {
    const search = countries.filter((country) =>
      country.name.common?.toLowerCase().includes(keyword?.toLowerCase())
    );
    setFilteredCountries(search);
  }, [keyword]);

  return (
    <>
      <div className="container">
        <Search setkeyword={setKeyword} />
        <div className="card-grid country-list">
          {filteredCountries.map((country, index) => (
            <CountryCard
              key={index}
              title={country.name.common}
              capital={country.capital}
              imageUrl={country.flags.svg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
