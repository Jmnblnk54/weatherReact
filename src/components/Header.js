import React from 'react';
import $ from "jquery";

//listen for click on search button and run 
$('document').ready(function(){
    $("#citySearchBtn").Onclick(function(event){
      event.preventDefault();
    
      let userinput = $("#cityName").val();
    
      city = formatCityStr(userinput);
      if("weatherSearchHistory" in localStorage){
          getWeatherData(city)
      }else{
          renderWeatherCards();
          getWeatherData(city);
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