document.getElementById('getWeatherBtn').addEventListener('click', function() {
  const location = document.getElementById('locationInput').value;

  if (location === "") {
    alert("Please enter a location");
    return;
  }

  const apiKey = "b4045475bdbbabe433f44fdd3dd4d3b0";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        document.getElementById('weatherResult').innerHTML = `<p>Error: ${data.message}</p>`;
        return;
      }

      const temp = data.main.temp;
      const condition = data.weather[0].description.toLowerCase();
      let conditionImage = "";
      let suggestion = "";

      if (condition.includes("sunny")) {
        conditionImage = "images/sunny.jpg";
        suggestion = "It's a sunny day! Wear sunglasses and stay hydrated.";
      } else if (condition.includes("clouds")) {
        conditionImage = "images/cloudy.jpg";
        suggestion = "It's cloudy. You might want to carry a light jacket.";
      } else if (condition.includes("rain")) {
        conditionImage = "images/rainy.jpg";
        suggestion = "It's raining. Don't forget your umbrella!";
      } else if (condition.includes("snow")) {
        conditionImage = "images/snow.jpg";
        suggestion = "It's snowy. Dress warmly and watch out for slippery roads.";
      } else if (condition.includes("mist") || condition.includes("fog")) {
        conditionImage = "images/mist.jpg";
        suggestion = "It's misty outside. Drive carefully and keep your lights on.";
      } else {
        conditionImage = "images/default.jpg";
        suggestion = "Weather is unpredictable! Stay prepared for anything.";
      }

      document.getElementById('weatherResult').innerHTML = `
        <p><strong>Location:</strong> ${data.name}, ${data.sys.country}</p>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <img src="${conditionImage}" alt="${data.weather[0].description}">
        <p><strong>Suggestion:</strong> ${suggestion}</p>
      `;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = `<p>Unable to fetch weather data. Please try again.</p>`;
    });
});
