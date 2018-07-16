const axios = require('axios');

const getLocation = async(address) => {
    let encodedUrl = encodeURI(address)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`Nothing found for requested location: ${address}`);
    }
    let formattedAddress = resp.data.results[0].formatted_address;
    let location = resp.data.results[0].geometry.location;

    return {
        location: formattedAddress,
        lat: location.lat,
        lng: location.lng
    }

}

module.exports = {
    getLocation
}