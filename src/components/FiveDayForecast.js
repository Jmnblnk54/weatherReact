import React from 'react';
import $ from "jquery";
import DisplaySearchHistory from "./previousCityBlock/DisplaySearchHistory";
import RenderRecentCitySearch from "./previousCityBlock/RenderRecentCitySearch";
import FormatDate from "./FormatDate"

//format current date
let now = new Date("December 25, 2020");
console.log(now.getDate());
function DisplayForecastWeather(forecastData){
  
  let forecastArr = forecastData.list;
  let j = 0;

  //loop over returned data for img, temp, date, humidity
  for (let i =0; i<40; i+=8){
      let imgSrc = "http://openweathermap.org/img/wn/"+forecastArr[i].weather[0].icon+"@2x.png";

      let forecastImg = $("<img>");

      forecastImg.attr("src", imgSrc);
      forecastImg.css("margin", "0 auto");
      forecastImg.css("display", "block");

      let formattedDate = new Date(FormatDate(forecastArr[i].dt_txt)).toDateString();
      
      let forecastDateDiv = $("<div></div>").css("font-weight", "bold");
      forecastDateDiv.text(formattedDate)

      let roundedTemp = Math.round(parseInt(forecastArr[i].main.temp));
      let forecastTemp = $("<div></div>").text("Temp: "+ roundedTemp+"F");

      let forecastHumidity = $("<div></div>").text("Humidity: "+ forecastArr[i].main.humidity+"%");

      let forecastChild = "#forcast-"+j;
      
      $(forecastChild).empty();

      $(forecastChild).append(forecastDateDiv);
      $(forecastChild).append(forecastImg);
      $(forecastChild).append(forecastTemp);
      $(forecastChild).append(forecastHumidity);
      $(forecastChild).css("text-align", "center");
      $(forecastChild).css("margin-bottom", "10px");

      j++;
  };

};


//create and render weather cards
function RenderWeatherCards(){
  
    let flexContainerEl = $("<div></div>").attr("class", "flex-container");
  
    let weatherSectionEl = $("<section></section>").attr("class", "cityCurrentWeather");
    let weatherCardEl = $("<div></div>").attr("class", "currentWeatherCard");
    let citySpanEl = $("<span></span>").attr("id", "currentCard-cityName");
    let innerFlex1El = $("<div></div>").attr("class", "flex-container");
    let weatherImgDivEl= $("<div></div>").attr("id", "currentCard-img").attr("class", "flex-child");
    let weatherStatsDivEl = $("<div></div>").attr("id","currentCard-stats").attr("class", "flex-child");
  
    innerFlex1El.append(weatherImgDivEl);
    innerFlex1El.append(weatherStatsDivEl);
    weatherCardEl.append(citySpanEl);
    weatherCardEl.append(innerFlex1El);
    weatherSectionEl.append(weatherCardEl);
    flexContainerEl.append(weatherSectionEl);
  
    let forecastSectionEl = $("<section></section").attr("class", "cityForcastWeather");
    let forecastCardEl = $("<div></div>").attr("class", "forcastWeatherCard");
    let forecastDivEl = $("<div></div>").text("5 Day Forecast").attr("class", "forcastBanner");
    let innerFlexEl2 = $("<div></div>").attr("class", "flex-container");
    innerFlexEl2.attr("id", "forcastChildGroup")
    let forecastChild1El = $("<div></div>").attr("id", "forcast-0").attr("class", "forcast-child flex-child");
    let forecastChild2El = $("<div></div>").attr("id", "forcast-1").attr("class", "forcast-child flex-child");
    let forecastChild3El = $("<div></div>").attr("id", "forcast-2").attr("class", "forcast-child flex-child");
    let forecastChild4El = $("<div></div>").attr("id", "forcast-3").attr("class", "forcast-child flex-child");
    let forecastChild5El = $("<div></div>").attr("id", "forcast-4").attr("class", "forcast-child flex-child");

    innerFlexEl2.append(forecastChild1El);
    innerFlexEl2.append(forecastChild2El);
    innerFlexEl2.append(forecastChild3El);
    innerFlexEl2.append(forecastChild4El);
    innerFlexEl2.append(forecastChild5El);
    forecastCardEl.append(forecastDivEl).append(innerFlexEl2);
    forecastSectionEl.append(forecastCardEl);
    flexContainerEl.append(forecastSectionEl)

    $(".main").append(flexContainerEl)

};

DisplaySearchHistory();

if("weatherSearchHistory" in localStorage){
    RenderWeatherCards();
    RenderRecentCitySearch();
};

export{
    RenderWeatherCards,
    DisplayForecastWeather
};