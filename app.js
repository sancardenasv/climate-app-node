const location = require('./location/location');
const climate = require('./climate/climate');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Location address to check weather from',
        demand: true
    }
}).argv;

let getInfo = async(address) => {
    let coords = await location.getLocation(address);
    let temp = await climate.getClimate(coords.lat, coords.lng);

    return `The climate in ${coords.location} is ${temp}°C`
}

getInfo(argv.address).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});