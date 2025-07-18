import axios from 'axios';

const API = import.meta.env.VITE_API_URL

export const fetchUserData = async (userId) => {
    try {
        const response = await axios.get(`${API}/api/auth/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        throw error;
    }
};