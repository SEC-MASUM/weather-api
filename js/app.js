const API_KEY = "7c4bb91b425af8fdcb75bbfe224e4ad9";

const searchTemperature = () => {
  document.getElementById("error-message").style.display = "none";
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    city || "Dhaka"
  }&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => displayTemperature(data));
};

searchTemperature();

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (data) => {
  // document.getElementById("city-name").value = "";
  console.log(data);
  if (data.cod !== 200) {
    const city = document.getElementById("city-name").value;
    errorMessage(`"${city}" ${data.message}`);
    document.getElementById("city-name").value = "";
  } else {
    setInnerText("city", data.name);
    setInnerText("temperature", data.main.temp);
    setInnerText("feels-like", data.main.feels_like);
    setInnerText("condition", data.weather[0].main);
    setInnerText(
      "condition-description",
      data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1)
    );
    // Set weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute("src", iconUrl);
    // console.log(data);

    // Clear
    document.getElementById("city-name").value = "";
  }
};

const errorMessage = (errorText) => {
  // console.log(data.message.toUpperCase());
  setInnerText("error-message", errorText);
  document.getElementById("error-message").style.display = "block";
};
