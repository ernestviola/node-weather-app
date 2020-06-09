const request = require('postman-request')
const dotenv = require('dotenv')

dotenv.config()

const forecast = (lat,long,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + process.env.FORECAST_KEY + '&query=' + lat + ',' + long + '&units=f'
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location!')
        } else {
            callback(undefined, {
                weather : response.body.current.weather_descriptions[0]+ '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out there.',
                weatherDescription: response.body.current.weather_descriptions[0],
                currentTemperature: response.body.current.temperature,
                feelsLike: response.body.current.feelslike
            })
        }
    })
}


module.exports = forecast