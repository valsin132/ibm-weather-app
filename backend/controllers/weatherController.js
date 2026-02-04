import axios from 'axios';

const OPEN_WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

export const getWeatherByCity = async (req, res) => {
  const { city } = req.params;

  if (!city) {
    return res.status(400).json({ message: 'City is required' });
  }

  try {
    const [weatherResponse, hourlyResponse] = await Promise.all([
      axios.get(`${OPEN_WEATHER_BASE_URL}/weather`, {
        params: {
          q: city,
          appid: OPEN_WEATHER_API_KEY,
          units: 'metric',
        },
      }),
      axios.get(`${OPEN_WEATHER_BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: OPEN_WEATHER_API_KEY,
          units: 'metric',
        },
      }),
    ]);

    res.status(200).json({
      weatherData: weatherResponse.data,
      weatherDataHourly: hourlyResponse.data,
    });
  } catch (err) {
    console.error('Error fetching weather:', err.response?.data || err.message);
    res.status(500).json({ message: 'Failed to fetch weather data' });
  }
};
