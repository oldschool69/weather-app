const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


geocode.geocodedAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        //console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        //pass latitude and longitude
        //callback de retorno de erro e resultado
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {

            if(errorMessage){
                console.log("Error: ", errorMessage);
            }else{
                //console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});

