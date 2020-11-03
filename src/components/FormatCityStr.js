import React from 'react';
import StateCheck from "./StateCheck";


//format the city
function FormatCityStr(str){
    let cityName = str;

    cityName=cityName.split("").join("");
    cityName=cityName.toLowerCase();
    cityName= StateCheck(cityName);

    return cityName;
};

export default FormatCityStr;