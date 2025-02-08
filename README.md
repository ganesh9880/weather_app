# Weather App 🌦️

This Weather App provides current weather information for any location using the **OpenWeatherMap API**. It displays the temperature, weather condition, and suggests actions based on the current weather.

## Features

- Fetches real-time weather data.
- Displays:
  - Location and country.
  - Current temperature (in Celsius).
  - Weather condition with a corresponding image.
  - Personalized suggestions based on the weather.
- User-friendly interface.

## Tech Stack

- **HTML**: Structure of the webpage.
- **CSS**: Styling the app.
- **JavaScript**: Fetching and displaying weather data.
- **OpenWeatherMap API**: Weather data provider.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Open `index.html` in your browser.

## Usage

1. Enter a location in the input field.
2. Click the **"Get Weather"** button.
3. View the weather details, including temperature, condition, and suggestions.

## API Configuration

The app uses the **OpenWeatherMap** API. Replace the `apiKey` in the JavaScript file with your own API key:

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

To get an API key, visit [OpenWeatherMap API](https://openweathermap.org/api).

## Screenshots

### Example Output

![Weather App Screenshot](images/screenshot.png)

## Folder Structure

```
weather-app/
│
├── index.html         # Main HTML file
├── style.css          # CSS file for styling
├── weather.js         # JavaScript file for logic and API calls
├── images/            # Folder containing condition images
└── README.md          # Documentation file
```
