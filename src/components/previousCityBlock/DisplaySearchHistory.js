import React from 'react';
import $ from "jquery";




//create and display previous cities searched
function DisplaySearchHistory(){
    $("#pastCityList").empty();
    if("weatherSearchHistory" in localStorage){
        let jsonStr = localStorage.getItem("weatherSearchHistory");
        let cityArr = JSON.parse(jsonStr);
        for (const city in cityArr){
            let liEl = $("<li></li>");
            let aEl =$("<a></a>");
            let capCity = cityArr[city].name.split("");
            capCity[0] = capCity[0].toUpperCase();
            capCity = capCity.join("");
            aEl.text(capCity);
            aEl.attr("href", "#");
            aEl.attr("id", cityArr[city].name);
            aEl.css("text-decoration", "none");
            aEl.addClass("searchedCity");
            liEl.prepend(aEl);        
            liEl.attr("style", "list-style: none;");
            $("#pastCityList").prepend(liEl);
        };
    } else{
        $("#pastCityList").text("Use the Search function to get started")
    };
};


export default DisplaySearchHistory;