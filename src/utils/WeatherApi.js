import React from 'react';
import $ from "jquery";
import {displayCurrentWeather} from "../components/CurrentWeather/CurrentWeather";
import DisplayForecastWeather from "../components/FiveDayForecast";


//ajax call for weather
function GetWeatherData(cityStr){
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityStr+"&appid=c53c7a5db8feb576c94526d1ba37eee7&units=imperial"

    $.ajax({
        url:queryURL,
        method: "GET"        
    }).then(function(response){
        displayCurrentWeather(response);
    })

    let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+cityStr+"&appid=c53c7a5db8feb576c94526d1ba37eee7&units=imperial"

    $.ajax({
        url:forecastQueryURL,
        method:"GET"
    }).then(function(response){
        DisplayForecastWeather(response);
    });
};

export default GetWeatherData;