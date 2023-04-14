const express = require('express')
const { getDrugs, getDrug } = require('../controllers/drug_controller')
const router = express.Router()


router.get('/', getDrugs)

router.get('/:drugId', getDrug)


module.exports = router
