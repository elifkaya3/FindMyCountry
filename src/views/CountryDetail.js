import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CountryDetailCard from "../components/CountryDetailCard";

const CountryDetail = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const selectedItem = res.find((item) => item.name.common === title);
        setSelectedItem(selectedItem);
        console.log("-",selectedItem.name)
      });
  }, []);

  return (
    <div>
      {selectedItem &&
        <CountryDetailCard
            title={selectedItem.name?.common}
            capital={selectedItem.capital}
            population={selectedItem.population}
            languages={selectedItem.languages}
            imageUrl={selectedItem.flags?.svg}
            official={selectedItem.name?.official}
            region={selectedItem.region}
            timezones={selectedItem.timezones}
        />
      }
    </div>
  );
};

export default CountryDetail;
