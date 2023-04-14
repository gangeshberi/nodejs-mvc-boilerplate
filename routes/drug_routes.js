const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('drug route')
})

router.get('/:drugId', (req, res) => {
    res.send('single drug route')
})

module.exports = router
