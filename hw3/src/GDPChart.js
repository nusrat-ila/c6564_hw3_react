import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Cell, Legend, Text } from 'recharts';
import styles from './GDPChart.module.css';

const GDPChart = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#6A5ACD', '#32CD32', '#FFD700', '#DC143C', '#8A2BE2'];

    useEffect(() => {
        axios.get('https://cs464p564-frontend-api.vercel.app/api/countries')
            .then(response => {
                const gdpData = response.data.map(country => ({
                    name: country.name || 'Unknown',
                    gdp: country.gdp_billions || 0,
                }));
                setData(gdpData);
            })
            .catch(error => {
                console.error('Error fetching GDP data:', error);
                setError('Error fetching GDP data.');
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.gdpChartContainer}>
            <h1 className={styles.chartTitle}>GDP of South American Countries (in Billions USD)</h1>
            <div className={styles.chartWrapper}>
                <PieChart width={800} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="gdp"
                        nameKey="name"
                        label={({ name, gdp }) => `${name}: ${gdp}B`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend formatter={(value) => <span style={{ color: '#FFD700' }}>{value}</span>} />
                </PieChart>
            </div>
        </div>
    );
};

export default GDPChart;
