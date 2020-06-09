const request = require('postman-request')
const dotenv = require('dotenv')

dotenv.config()

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + process.env.GEOCODE_KEY + '&limit=1'

    request({url:url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location of ' + response.body.query[0], undefined)
        } else {
            features = response.body.features[0]
            const lat = features.center[1]
            const long = features.center[0]
            callback(undefined,
                {
                    lat: lat, 
                    long: long, 
                    location: features.place_name
                })
        }
    })
}

module.exports = geocode