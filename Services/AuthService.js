// AuthService.js
import axios from 'axios';

const API_URL = 'http://192.168.1.75:8080/users'; // Cambia esto por la URL de tu API

const AuthService = {
    login: async (email, password) => {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password,
        });
        return response;
    },
};

export default AuthService;
