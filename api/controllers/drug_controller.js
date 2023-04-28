const Drug = require('../models/drug_model');

function getDrugs(req, res) {
  return Drug
    .findAll()
    .then((drugs) => res.send(drugs))
    .catch((err) => res.send(err));
}

function getDrug(req, res) {
  const drugId = Number(req.params.drugId);

  return Drug
    .findOne(drugId)
    .then((drug) => res.send(drug))
    .catch((err) => res.send(err));
}

module.exports = {
  getDrugs,
  getDrug,
};
