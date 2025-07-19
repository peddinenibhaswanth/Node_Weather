const request = require('request');
require('dotenv').config();


const openWeatherMap = {
    BASE_URL: process.env.OPEN_WEATHER_BASE_URL,
    SECRET_KEY: process.env.OPEN_WEATHER_SECRET_KEY,
}

const weatherData = (address, callback) => {
    const url = `${openWeatherMap.BASE_URL}${encodeURIComponent(address)}&appid=${openWeatherMap.SECRET_KEY}&units=metric`;
    request({ url, json: true }, (error, response) => {
        if(error){
            callback(true, "Unable to connect to weather service!" + error);
        }
        callback(false, response?.body);
    })
}

module.exports = weatherData;