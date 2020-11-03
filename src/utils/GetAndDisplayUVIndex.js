import React from 'react';
import $ from "jquery";

function GetAndDisplayUVIndex(lon, lat){
    let queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=c53c7a5db8feb576c94526d1ba37eee7&lat="+lat+"&lon="+lon;
    
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        let uvIndex = response.value
        let currentUV = $("<div></div>").text("UV Index: ")
        let spanEl = $("<span></span>").text(uvIndex);
  
        let uvBackground = (uvIndex<=2) ? "uvLow": 
        (uvIndex<=5 && uvIndex>2)? "uvModerate": 
        (uvIndex<=7 && uvIndex>5)? "uvHigh": 
        (uvIndex<=10 &&uvIndex>7)? "uvVeryHigh": "uvExtreme";
  
        spanEl.attr("class", uvBackground);
  
        currentUV.append(spanEl);
        $("#currentCard-stats").append(currentUV);
    });
  
  };

export default GetAndDisplayUVIndex;