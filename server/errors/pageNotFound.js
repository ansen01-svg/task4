let { StatusCodes } = require('http-status-codes')
let CustomError = require('./custom error')


class NotFound extends CustomError {
    constructor (message) {
        super (message)
        this.statuscode = StatusCodes.NOT_FOUND
    }
}


module.exports = NotFound