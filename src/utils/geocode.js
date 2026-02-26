const request = require('request');

const geocode = (address, callback) => {
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + encodeURIComponent(address) + '&limit=1&appid=ecb0d2c0704e49eb8509972964b4004e';

    request({ url, json : true}, (error, { body }) =>{
         if (error){
            callback('Unable to connect to location service!', undefined);   
        }
        else if (body.length === 0 ){
           callback('Unable to find the location. Try again!', undefined);                                           
        }
        else{
            callback(undefined, {
                latitude : body[0].lat,
                longitude : body[0].lon,
                location : body[0].name
            });
        }        
    }); 
}

module.exports = geocode;