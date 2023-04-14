const express = require('express')
const app = express()
const drugs = require('./api/routes/drug_routes')

const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const first = (req, res, next) => {
    console.log('---------------------- first ----------------------')
    // res.send('<h1 style="color: red"> This is a first test method! </h1>')
    next()
}

const second = (req, res, next) => {
    console.log('---------------------- second ---------------------')
    // res.send('<h1 style="color: blue"> This is a second test method! </h1>')
    next()
}

const third = (req, res) => {
    console.log('---------------------- third ----------------------', req.params)
    res.send('<h1 style="color: green"> This is a third test method! </h1>')
}

app
    .route('/test/:testId')
    .get([first, second, third])

// app.get('/test', [first, second, third])

app.use('/drugs', drugs)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
