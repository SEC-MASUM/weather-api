const API_KEY = "7c4bb91b425af8fdcb75bbfe224e4ad9";

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  console.log(data);
};
