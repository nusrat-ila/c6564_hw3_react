import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CountryList.module.css';

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
        <div className={styles.countryListContainer}>
            <h1>Countries of South America</h1>
            <ul className={styles.countryList}>
                {countries.map((country, index) => (
                    <li key={index} className={styles.countryItem}>
                        <h2>{country.name || 'No name available'}</h2>
                        <img src={country.flag_png} alt={country.flag_alt} style={{ width: '100px', height: '60px', border: '1px solid #ccc' }} />
                        <p>Population: {country.population || 'No population data available'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
