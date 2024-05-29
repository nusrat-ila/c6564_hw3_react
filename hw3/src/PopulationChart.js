import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from './PopulationChart.module.css';

const PopulationChart = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://cs464p564-frontend-api.vercel.app/api/countries')
            .then(response => {
                const chartData = response.data.map(country => ({
                    name: country.name || 'Unknown',
                    population: country.population || 0,
                }));
                setData(chartData);
            })
            .catch(error => {
                setError('Error fetching population data.');
            });
    }, []);

    if (error) {
        return <div className={styles.populationChartContainer}>{error}</div>;
    }

    return (
        <div className={styles.populationChartContainer}>
            <h1 className={styles.chartTitle}>Population of South American Countries</h1>
            <div className={styles.chartWrapper}>
            <BarChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="population" fill="#8884d8" />
            </BarChart>
            </div>
        </div>
    );
};

export default PopulationChart;
