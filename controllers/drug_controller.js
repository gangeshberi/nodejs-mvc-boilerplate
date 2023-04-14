const Drug = require('../models/drug')

function getDrugs() {
    return Drug.findAll()
}

function getDrug() {
    return Drug.findOne()
}

module.exports = {
    getDrugs,
    getDrug
}