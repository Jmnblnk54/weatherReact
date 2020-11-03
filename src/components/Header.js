import React from 'react';
import $ from "jquery";
import {DisplaySearchHistory} from "./previousCityBlock/DisplaySearchHistory";
import FormatCityStr from "./FormatCityStr";
import GetWeatherData from "../utils/WeatherApi";
import {RenderWeatherCards} from "./FiveDayForecast";

let city;
//add searched city to local storage
function updateSearchHistory(city){
  let cityArr = [];
  let isSearchedBefore = false;
  let cityObj = {name:city};

  if("weatherSearchHistory" in localStorage){
      let jsonStr = localStorage.getItem("weatherSearchHistory");
      cityArr = JSON.parse(jsonStr);

      for (let i = 0; i<cityArr.length; i++){
          if(cityArr[i].name===city){
              isSearchedBefore =true;
          }
      }

      if(isSearchedBefore === false){
          cityArr.unshift(cityObj);
      }

      if(cityArr.length>10){
          cityArr.length=10;
      };

      localStorage.setItem("weatherSearchHistory", JSON.stringify(cityArr));
  };

  if(localStorage.getItem("weatherSearchHistory")===null){
      cityArr.push(cityObj);
      localStorage.setItem("weatherSearchHistory", JSON.stringify(cityArr));
  };
  
  DisplaySearchHistory();
};

//listen for click on search button and run 
$('document').ready(function(){
    $("#citySearchBtn").Onclick(function(event){
      event.preventDefault();
    
      let userinput = $("#cityName").val();
    
      city = FormatCityStr(userinput);
      if("weatherSearchHistory" in localStorage){
          GetWeatherData(city)
      }else{
          RenderWeatherCards();
          GetWeatherData(city);
      }
      updateSearchHistory(userinput);
    })
    $("#citySearchEnter").on("keypress", function(e){
      if(e.which == 13){
        $("#citySearchBtn").Onclick();
      }
    });
  });
  

function Header() {
    return (
        <header>
            <h2>Check the Weather</h2>
        </header>
    )
}

export default Header;