const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude +'&lon=' + longitude +'&appid=ecb0d2c0704e49eb8509972964b4004e&units=metric';

    request({url, json : true} , (error, { body })=>{        

        if (error){
            callback('Unable to connect to weather service!', undefined);
        } 
        else if (body.error) {
            callback ('Unable to find the location. Please try again!', undefined);
        } 
        else {
            callback (undefined , body.weather[0].description + '. It is currently ' + body.main.temp + ' degrees out. It feels like ' + body.main.feels_like + ' degrees out. The humidity is ' + body.main.humidity + '%.');    
        };
        
    });

}

module.exports = forecast;