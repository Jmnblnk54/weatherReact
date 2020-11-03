import React from 'react';
import FormatCityStr from "../FormatCityStr";
import GetWeatherData from "../utils/WeatherApi";



//show recently search history from local storage
function RenderRecentCitySearch(){
    if("weatherSearchHistory" in localStorage){
        let jsonStr = localStorage.getItem("weatherSearchHistory");
        let cityArr = JSON.parse(jsonStr);
        let city = cityArr[0].name;
        city = FormatCityStr(city);
        GetWeatherData(city);
    };
};

export default RenderRecentCitySearch;