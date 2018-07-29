var request = require('request');

const key = "AIzaSyAhpzXoagZMwMvQvPingSNd4wI0tOcSTkU";


var geocodeAddress = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request(
            {
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
            json: true
            },
            (err, response, body) => {
                    if(body.status === `OK`){
                        resolve({
                            address: body.results[0].formatted_address,
                            latitude: body.results[0].geometry.location.lat,
                            longitude: body.results[0].geometry.location.lng
                        })
                    }
                    else if(err) reject(`Unable to connect to google services`)
                    else if(body.status === `ZERO_RESULTS`) reject(`Unable to find that address`)
                })
    }
    
        
  )
}

geocodeAddress('Thousand Oaks, CA').then(location => {
    console.log(location)
}, (err) => {
    console.log(err)
})