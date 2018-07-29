const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require('./weather/weather');


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



geocode.geocodeAddress(argv.a, (err, res) => {
  if (err) console.log(err);
  else {
    console.log(res.address);
    weather.getWeather(res.latitude, res.longitude, (err, res)=> {
      if(err) console.log(err)
      else{
        console.log(`Current Temp: ${res.temperature}`)
        console.log(`Feels like: ${res.apparentTemperature}`)
      }
    })
  }
});


