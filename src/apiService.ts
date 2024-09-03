// src/apiService.ts

import axios from 'axios';

const API_BASE_URL = 'https://us-central1-edu-verse-21096.cloudfunctions.net';

export const fetchTeachers = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/getUsers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching teachers:', error);
    throw error;
  }
};

export const fetchStudents = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/getUsers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};
