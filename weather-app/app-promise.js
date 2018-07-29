const yargs = require("yargs");
const axios = require('axios');


const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: `address to fetch weather for`,
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;


const key = "AIzaSyAhpzXoagZMwMvQvPingSNd4wI0tOcSTkU";
const encodedAddress = encodeURIComponent(argv.address);
const geoURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;
const weatherAPIKey = 'fbf63952e4b488f1cb1193a26035bf3f';


axios.get(geoURL).then((response)=> {
    if(response.data.status === "ZERO_RESULTS") {
        throw new Error('Unable to find that address')
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/${weatherAPIKey}/${latitude},${longitude}`
    return axios.get(weatherURL).then(response => {
        var temp = response.data.currently.temperature;
        var actualTemp = response.data.currently.apparentTemperature;
        console.log(`Temperature:${temp}, Feels Like:${actualTemp}`)
    })
}).catch((err) => {
    if(err.code === "ENOTFOUND"){
        console.log(`Unable to connect to api server`)
    }else{
        console.log(err.message)
    }
})
