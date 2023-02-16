let { StatusCodes } = require('http-status-codes')
let CustomError = require('./custom error')


class UnauthorizedError extends CustomError {
    constructor (message) {
        super (message)
        this.statuscode = StatusCodes.UNAUTHORIZED
    }
}


module.exports = UnauthorizedError