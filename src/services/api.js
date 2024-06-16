// src/services/api.js
const apiUrl = process.env.REACT_APP_API_URL;

export const registerUser = async (userData) => {
    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    return response.json();
};

export const loginUser = async (userData) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    return response.json();
};

export const getDashboard = async (token) => {
    const response = await fetch(`${apiUrl}/dashboard`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.json();
};
