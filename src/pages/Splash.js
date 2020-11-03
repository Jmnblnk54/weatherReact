import React from 'react';


function Splash() {
    return (
        <div class="main">
            <div id="header">
                <div id="header-content">
                    <h2>Weather Checker</h2>
                    <p>Enter a city to check the current weather and 5-day forecast:</p>
                <div class="citySearchForm" id="citySearchEnter">
                    <input type="text" id="cityName" name="city" placeholder="City"/>
                    <button id="citySearchBtn"type="submit"><i class="fa fa-search"></i></button>
                </div>
            </div>
        </div>
    

        <br/><br/><br/>
            <div class="container">
                <div class="history">
                    <div id="pastSearches">
                        <div class = "strong"><strong>Previously searched cities:</strong></div>
                    </div>
                <ul id="pastCityList"></ul>
                </div>
            </div>
        </div>
    )
}

export default Splash;