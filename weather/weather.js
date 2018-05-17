const request = require('request');


var getWeather = (latitude, longitude, callback) => {

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    request({
        url: `https://api.darksky.net/forecast/335c3c44ec326c01494e63de97aee45e/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {

        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch weather.');
        }
    });
};


module.exports.getWeather = getWeather;


