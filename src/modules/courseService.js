import axios from "axios";
import authService from "./authService";

const API_BASE_URL = "http://localhost:8000/api/v1"; // backend's URL
const headers = await authService.getAuthHeader()

const courseService = {
  createCourse: async(data) => {
    try{
      const response = await axios.post(`${API_BASE_URL}/course/create`, data, {headers: headers})
      return response.data
    } catch(error) {
      console.log('Course Creation failed')
      throw error
    }
  },

  getACourse: async(course_uid) => {
    try{
      const response = await axios.get(`${API_BASE_URL}/course/get/${course_uid}`, {headers: headers})
      return response.data
    } catch (error) {
      throw error
    }

  },

  getAllCourses: async() => {
    try{
      const response = await axios.get(`${API_BASE_URL}/course/get/all`, {headers: headers})
      return response.data
    } catch (error) {
      throw error
    }

  },

  getAllUserCourses: async() => {
    try{
      const response = await axios.get(`${API_BASE_URL}/user/editor/profile`, {headers: headers})
      return response.data
    } catch (error) {
      throw error
    }

  },

  getCourseTags: async(course_uid) => {
    try{
      const response = await axios.get(`${API_BASE_URL}/coursetag/tags/${course_uid}/all`, {headers: headers})
      return response.data
    } catch (error) {
      throw error
    }
  },

  watchUrlToEmbedUrl: (watchUrl) => {
    const regex = /v=([^&]+)/; 
    const match = watchUrl.match(regex);
  
    if (match && match[1]) {
      const embedURL = `https://www.youtube.com/embed/${match[1]}`
      return embedURL; 
    } else {
      return null; 
    }
  },

  bookmarkCourse: {},

  checkIfLiked: async(course_uid) => {
    try{
      const response = await axios.get(`${API_BASE_URL}/like/${course_uid}`, {headers: headers})
      return response.data
    } catch (error) {
      throw error
    }
  },

  likeCourse: async(course_uid) => {
    try{
      const response = await axios.post(`${API_BASE_URL}/like/${course_uid}`,{} ,{headers: headers})
      return response.data
    } catch (error) {
      throw error
    }
  },

  unLikeCourse: async(course_uid) => {
    try{
      const response = await axios.delete(`${API_BASE_URL}/like/${course_uid}`,{headers: headers})
      return response.data
    } catch (error) {
      throw error
    }
  },
}

export default courseService;