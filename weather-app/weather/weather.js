const request = require('request')


const weatherAPIKey = 'fbf63952e4b488f1cb1193a26035bf3f';


const getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${weatherAPIKey}/${latitude},${longitude}`,
        json: true
      }, (err, response, body) => {
        if(err) {
          callback(`Unable to connect to Forecast.io`)
        }else if(response.statusCode === 400 ){
          callback(`Unable to fetch weather`)
        }else if(!err && response.statusCode === 200) {
          callback(undefined, body.currently)
        }
    })
}


module.exports.getWeather = getWeather
