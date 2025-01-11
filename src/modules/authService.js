import axios from 'axios';

const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL

const authService = {
  login: async (email, password) => {
    authService.logout()
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, { email, password });
      localStorage.setItem('token', response.data.access_token); // Store token in local storage
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  register: async (userData) => {
    authService.logout()
    try {
      const response = await axios.post(`${API_BASE_URL}/user/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  getAuthHeader: () => {
    const token = authService.getToken();
    return {Authorization: `Bearer ${token}`}
  },

  // Helper function to set Authorization header in requests
  setAuthToken: (config) => {
    const token = authService.getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },

  getRole: async () => {
    const headers = authService.getAuthHeader();

    try{
      const response = await axios.get(`${API_BASE_URL}/user/role`,
      {headers: headers}
      )
      return response.data
    } catch (error) {
      return error
    }
  },
};

export default authService;