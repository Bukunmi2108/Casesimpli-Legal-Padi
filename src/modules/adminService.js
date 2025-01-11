import axios from "axios";
import authService from "./authService";

const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL
const headers = authService.getAuthHeader()

const adminService = {
  createEditor: async(editorData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/editor/create`, editorData, {headers:headers});
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

  createAdmin: async(adminData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/create`, adminData, {headers: headers});
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

}

export default adminService