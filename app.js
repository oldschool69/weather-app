const request = require('request');
// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;


// geocode.geocodedAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


request({
    url: `https://api.darksky.net/forecast/335c3c44ec326c01494e63de97aee45e/22.8525381,-47.0462387`,
    json: true
}, (error, response, body) => {

    //console.log('body ', body);
    console.log('statusCode ', response.statusCode);

    if(!error && response.statusCode === 200){
        console.log("temperature: ", body.currently.temperature);
    }else{
        console.log('Unable to fetch weather.');
    }
});

