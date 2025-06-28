# SkyCast

🌟 A clean, minimalistic weather app with real-time data, 5-day forecast, and responsive design, powered by the OpenWeather API.

## Features

- Real-time weather: temperature, humidity, wind speed, pressure, and "feels like"
- 5-day forecast with 3-hour intervals
- Auto dark/light theme based on system settings
- Fully responsive for desktop, tablet, and mobile
- City + country code search and browser geolocation
- Unit switch: Metric (°C, km/h) ↔ Imperial (°F, mph)
- Detailed wind info, sunrise & sunset times
- Express backend with OpenWeather API proxy

## Quick Start

```bash
# Clone repository
git clone https://github.com/ApurvaJayswal/FUTURE_FS_02.git

# Install dependencies
cd FUTURE_FS_02 && npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your OpenWeather API key

# Start the server
npm start

# SkyCast is now running on http://localhost:3000
```

## Notice

clim8 currently uses OpenWeather API v2.5 for weather data and v1.0 for geocoding. Future updates to the OpenWeather API may introduce changes that affect compatibility. If newer API versions are released, updating the endpoints and data handling logic may be required.

## Acknowledgments

- Weather data: [OpenWeather](https://openweathermap.org/)
- Weather icons: [basmilius/weather-icons](https://github.com/basmilius/weather-icons)
