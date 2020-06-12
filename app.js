const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(process.argv[2])
if (process.argv[2]) {
    geocode(process.argv[2], (error, {lat, long, location} = {} ) => {
        if (error) {
            return console.log(error)
        }
        forecast(lat,long, (error, {weather} = {} ) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(weather)
        })
    })
} else {
    console.log('Please provide a location')
}