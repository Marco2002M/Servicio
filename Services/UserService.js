// src/services/UserService.js
import axios from 'axios';

// Cambia la URL_BASE según la dirección de tu backend
const URL_BASE = "http://192.168.1.75:8080/users"; // Cambia localhost por la dirección IP de tu máquina
 // Asegúrate de cambiar localhost si lo subes a la nube

 class UserService {
    findAll() {
        return axios.get(URL_BASE);
    }


    login(userCredentials) {
        return axios.post(`${URL_BASE}/login`, userCredentials);
    }


    create(user) {
        return axios.post(URL_BASE, user);
    }

    // Nuevo método para verificar si el correo electrónico ya existe
    async emailExists(email) {
        try {
            const response = await axios.get(`${URL_BASE}/exists`, {
                params: { email }
            });
            return response.data.exists; // Asegúrate de que tu API devuelva esta propiedad
        } catch (error) {
            throw error; // Propagar el error
        }
    }
}

export default new UserService();