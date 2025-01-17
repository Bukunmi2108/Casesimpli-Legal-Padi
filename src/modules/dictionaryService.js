import axios from "axios";
import authService from "./authService";

const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL

const dictionaryService = {
  getDefinition: async(query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/dictionary/?q=${query}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get Definition', error);
      throw error;
    }
  },

  getTerms: async(query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/dictionary/term/?q=${query}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get terms', error);
      throw error;
    }
  },

  getRandomWord: async() => {
    try {
      const response = await axios.get(`${API_BASE_URL}/dictionary/random`);
      return response.data;
    } catch (error) {
      console.error('Failed to get word', error);
      throw error;
    }
  },
}


export default dictionaryService;