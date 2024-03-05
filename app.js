const express = require('express')
const addDays = require("date-fns/addDays")
const app = express()

app.listen(3000)

app.get('/', (request, response) => {
    let currnetDate = new Date()
    let after100Days = addDays(new Date(),100)
    let sendResult = `${after100Days.getDays()/${after100Days.getMonth()+1}/${after100Days.getFullYear()}}`
    response.send(sendResult)
})

module.exports = app ;
