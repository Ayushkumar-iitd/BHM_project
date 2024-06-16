// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getDashboard } from '../services/api';

const Dashboard = ({ token }) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchDashboard = async () => {
            const response = await getDashboard(token);
            if (response.message) {
                setMessage(response.message);
            }
        };
        fetchDashboard();
    }, [token]);

    return (
        <div>
            <h2>Dashboard</h2>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Dashboard;

