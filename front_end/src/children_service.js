import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Assuming Ballerina API is running on this URL

// Get all children
export const getAllChildren = () => {
    return axios.get(`${API_URL}/children`);
};

// Get child by ID
export const getChildById = (id) => {
    return axios.get(`${API_URL}/child/${id}`);
};

// Create a new child
export const createChild = (childData) => {
    return axios.post(`${API_URL}/child`, childData);
};

// Update child
export const updateChild = (id, childData) => {
    return axios.put(`${API_URL}/child/${id}`, childData);
};

// Delete child
export const deleteChild = (id) => {
    return axios.delete(`${API_URL}/child/${id}`);
};
