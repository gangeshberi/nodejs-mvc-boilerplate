/**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {fuction} next - next function
 * @param {int} id - id to validate
 */
function paramValidator(req, res, next, id) {
  if (Number.isInteger(Number(id))) {
    next();
  } else {
    res.send(`
                <body style="background-color: black">
                    <h2 style="color: red"> Enter a valid id!! </h2>
                </body>
            `);
  }
}

module.exports = paramValidator;
