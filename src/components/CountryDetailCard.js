import React from 'react';
import '../styles/countryCardDetail.css'


const CountryCardDetail = ({ title,capital,languages,population, imageUrl, official, region, timezones }) => {
 
    return (
      <div className="country-detail">
        <div>
            <img src={imageUrl} alt={title} className='countryImg'/>
        </div>
        
        <div className='card-right'>
            <div className="card-content">
            <span><h3>{title}</h3></span> 
                <span><b>Capital: </b>{capital}</span> 
                <span><b>Languages: </b>{languages && Object.values(languages).join(', ')}</span> 
                <span><b>Population: </b>{population?.toLocaleString()}</span>
                <span><b>Official Name: </b>{official}</span>
                <span><b>Region: </b>{region}</span>
                <span><b>Timezones: </b>{timezones}</span>
            </div>
        </div>
      </div>
    );
  };

  export default CountryCardDetail;