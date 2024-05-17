// src/CountryList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://cs464p564-frontend-api.vercel.app/api/countries')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                setError('Error fetching country data.');
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Countries of South America</h1>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>
                        <h2>{country.name || 'No name available'}</h2>
                        <img src={country.flag || 'No flag available'} alt={`Flag of ${country.name}`} style={{ width: '100px' }} />
                        <p>Population: {country.population || 'No population data available'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
