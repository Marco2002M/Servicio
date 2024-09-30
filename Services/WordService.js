import axios from 'axios';

const URL_BASE = "http://192.168.1.75:8080/words"; // Cambia localhost por la dirección IP de tu máquina

class WordService {
    // Método para obtener todas las palabras
    findAll() {
        return axios.get(URL_BASE);
    }

    // Método para crear una nueva palabra
    async createWord(wordData) {
        try {
            const response = await axios.post(URL_BASE, wordData);
            return response.data; // Retorna la data de la respuesta
        } catch (error) {
            console.error("Error al añadir la palabra al diccionario:", error);
            throw error; // Propagar el error para manejarlo más arriba
        }
    }
}

export default new WordService();
