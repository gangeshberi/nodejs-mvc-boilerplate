const express = require('express')
const app = express()
const drugs = require('./routes/drug_routes')

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

app.param("testId", (req, res, next, id) => {
    if(Number.isInteger(Number(id))) {
        next()
    } else {
        res.send('\
            <body style="background-color: black"> \
                <h1 style="color: red"> Enter a valid id!! </h1> \
            </body> \
        ')
    }
})

// app.get('/test', [first, second, third])

app.use('/drugs', drugs)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
