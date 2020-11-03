import React from "react";
import $ from "jquery";
import GetAndDisplayUVIndex from "../../utils/GetAndDisplayUVIndex";
import FormatDate from "../FormatDate";

function CurrentWeather() {
  return (
    //Display current weather
    function displayCurrentWeather(currentData) {
      $("#currentCard-img").empty();
      $("#currentCard-stats").empty();

      let imgSrc =
        "https://openweathermap.org/img/wn/" +
        currentData.weather[0].icon +
        "@2x.png";

      let currentImg = $("<img id='currentIcon'>");
      currentImg.attr("src", imgSrc);

      let roundedTemp = currentData.main.temp;
      roundedTemp = Math.round(parseInt(roundedTemp));
      console.log(roundedTemp);
      let currentTemp = $("<div></div>").text(`Temperature: ${roundedTemp}F`);

      let currentHumidity = $("<div></div>").text(
        "Humidity: " + currentData.main.humidity + "%"
      );

      let currentWind = $("<div></div>").text(
        "Wind Speed: " + currentData.wind.speed + " mph"
      );

      GetAndDisplayUVIndex(currentData.coord.lon, currentData.coord.lat);

      let currentDate = new Date();
      currentDate = FormatDate(currentDate);

      $("#currentCard-cityName").text(currentData.name + " - " + currentDate);
      $("#currentCard-img").append(currentImg);
      $("#currentCard-img").css("text-align", "center");
      $("#currentCard-stats").append(currentTemp);
      $("#currentCard-stats").append(currentHumidity);
      $("#currentCard-stats").append(currentWind);
    }
  );
}

export default CurrentWeather;
