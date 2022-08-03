export function getForecast(coords, cb) {
    console.log(coords);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.long}&daily=weathercode&timezone=UTC&current_weather=true`
    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            // let coords = {
            //     lat: result.features[0].geometry.coordinates[0],
            //     long: result.features[0].geometry.coordinates[1]
            // }
            // cb(null, coords)
        }).catch(console.error)

}
