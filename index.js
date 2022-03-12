require('dotenv').config()
const axios = require ('axios')
// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const APPID = process.env.APPID
// const LANGUAGE = process.env.LANGUAGE
// const UNITS = process.env.UNITS

const { PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS, Q } = process.env

//const url = PROTOCOL + '://'
const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

//IO-Bound
//CPU-Bound
axios.get(url)
.then(res => {
    console.log(res.data)
    return res.data
})
.then (res => {
    console.log (res.cnt)
    return res
})
.then (res => {
    //return res.list
    return res['list']
})
.then (res => {
    for (let previsao of res){
        console.log (`
            ${new Date (+previsao.dt * 1000).toLocaleString()},
            Min: ${previsao.main.temp_min}\u00B0C,
            Max: ${previsao.main.temp_max}\u00B0C,
            Hum: ${previsao.main.humidity}%,
            ${previsao.weather[0].description}
        `)
    }
})
.then(res => {
    //exibir a quantidade de previsões que têm percepção humana
    //de temperatura acima de 30 graus
})




1

