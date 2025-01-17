import axios from "axios";
import authService from "./authService";

const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL
const headers = await authService.getAuthHeader()

const tagService = {
  getAllTags: async() => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tag/get/all`, {headers:headers})
      return response.data;
    } catch (error) {
      console.error('Get All Tags Failed', error);
      throw error;
    }
  },

  getTagName: async(query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tag/name/${query}`, {headers:headers})
      return response.data;
    } catch (error) {
      console.error('Get Tag Name Failed', error);
      throw error;
    }
  },

  getTagCourses: async(tag_id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/coursetag/courses/${tag_id}/all`, {headers: headers});
      return response.data;
    } catch (error) {
      console.error('Get Courses Failed', error);
      throw error;
    }
  },

}

export default tagService