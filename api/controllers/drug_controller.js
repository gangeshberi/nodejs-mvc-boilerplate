const Drug = require('../models/drug')

const getDrugs = function(req, res) {
    return Drug
            .findAll()
            .then(drugs => res.send(drugs))
            .catch(err => res.send(err)); // important to catch the error
}

const getDrug = function(req, res) {
    const drugId = Number(req.params.drugId);
    
    return Drug
            .findOne(drugId)
            .then(drug => res.send(drug))
            .catch(err => res.send(err)); // important to catch the error
}

module.exports = {
    getDrugs,
    getDrug
}
