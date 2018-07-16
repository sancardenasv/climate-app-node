const axios = require('axios');

const getClimate = async(lat, lng) => {
    // http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b
    const appid = 'f369635965b00ad16ced5da4da4b9f3b';
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${appid}`;

    let resp = await axios.get(weatherApi);

    if (resp.data.cod !== 200) {
        throw new Error(`Error in service: ${resp.data.message}`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClimate
}