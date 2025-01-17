import axios from "axios";
import authService from "./authService";

const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL
const headers = await authService.getAuthHeader()

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

  getEditors: async() => {
    try {
      const response = await axios.get(`${API_BASE_URL}/editor/get/all`, {headers: headers});
      return response.data;
    } catch (error) {
      console.error('Editors failed:', error);
      throw error;
    }
  },

  getAdmins: async() => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/get/all`, {headers: headers});
      return response.data;
    } catch (error) {
      console.error('Admins failed:', error);
      throw error;
    }
  },

}

export default adminService