const fetch = require('node-fetch');

const API_KEY = process.env.OPENWEATHER_API_KEY;

const getForecast = async (req, res) => {
  const { lat, lon, units } = req.query;
  
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
    );
    
    // Log the status and response text for debugging
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Forecast API Error Response:', errorText);
      throw new Error('Forecast API response was not ok: ' + errorText);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Forecast API Error:', error);
    res.status(500).json({ error: 'Failed to fetch forecast data' });
  }
};

module.exports = {
  getForecast
};
