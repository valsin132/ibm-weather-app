import axios from 'axios';

const API_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:8000';

export const fetchWeatherData = async (cityName) => {
  try {
    const response = await axios.get(`${API_URL}/api/weather/${encodeURIComponent(cityName)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const saveSearch = async (selectedCity) => {
  try {
    const response = await axios.post(`${API_URL}/api/search`, {
      selectedCity,
    });
    return response.data;
  } catch (error) {
    console.error('Error saving search:', error);
    throw error;
  }
};

export const fetchTopCities = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/search/top`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top cities:', error);
    throw error;
  }
};
