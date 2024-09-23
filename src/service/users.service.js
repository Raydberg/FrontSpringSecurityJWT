import axios from "axios";
import { API } from "../constants/API";

export const login = async (email, password) => {
    try {
        const resp = await axios.post(`${API}/auth/login`, { email, password });
        return resp.data;
    } catch (error) {
        console.error(error);
    }
};

export const register = async (userData, token) => {
    try {
        const resp = await axios.post(`${API}/auth/register`, userData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const getAllUsers = async (token) => {
    try {
        const resp = await axios.get(`${API}/admin/get-all-users`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const getYourProfile = async (token) => {
    try {
        const resp = await axios.get(`${API}/adminuser/get-profile`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const getUserById = async (userId, token) => {
    try {
        const resp = await axios.get(`${API}/admin/get-users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const deleteUser = async (userId, token) => {
    try {
        const resp = await axios.delete(`${API}/admin/delete/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const updateUser = async (userId, userData, token) => {
    try {
        const resp = await axios.put(`${API}/admin/update/${userId}`, userData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
};

export const isAdmin = () => {
    const role = localStorage.getItem('role');
    return role === 'ADMIN';
};

export const isUser = () => {
    const role = localStorage.getItem('role');
    return role === 'USER';
};

export const adminOnly = () => {
    return isAuthenticated() && isAdmin();
};