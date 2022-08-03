import { getGeocode } from './utils/geocode.js'
import { getForecast } from './utils/forecast.js'

const txtAddress = document.querySelector("#txt-address")
const btnShow = document.querySelector("#btn-show")

btnShow.addEventListener("click", () => {
    getGeocode(txtAddress.value, (err, coords) => {
        getForecast(coords, (err, summary) => {
            console.log(summary);
        })
    })
})