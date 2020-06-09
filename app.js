const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(process.argv[2])
if (process.argv[2]) {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            return console.log(error)
        }
        forecast(data.lat,data.long, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData.weather)
        })
    })
} else {
    console.log('Please provide a location')
}