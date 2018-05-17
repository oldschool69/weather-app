const request = require('request');

//API Key Dark Sky 335c3c44ec326c01494e63de97aee45e

//Dark Sky API usage sample:
//https://api.darksky.net/forecast/335c3c44ec326c01494e63de97aee45e/22.8525381,-47.0462387

var geocodedAddress = (address, callback) => {

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers.');
        }else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find that address.');
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};


//module.exports.geocodedAddress = geocodedAddress; //possivel exportar assim tb

module.exports = {
    geocodedAddress
};