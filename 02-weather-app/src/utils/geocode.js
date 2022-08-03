export function getGeocode(address, cb) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ`
    fetch(url)
        .then(response => response.json())
        .then(result => {
            let coords = {
                lat: result.features[0].geometry.coordinates[0],
                long: result.features[0].geometry.coordinates[1]
            }
            cb(null, coords)
        }).catch(console.error)
}
