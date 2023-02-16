let { StatusCodes } = require('http-status-codes')
let { CustomError } = require('../errors')


let errorHandler = async (err,req,res) => {

    let errors = {
        statusCode : err.statuscode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg : err.message || `Internal server error`
    }

    if (err instanceof CustomError) {
        return res.status(err.statuscode).json({msg : err.message})
    }

    // if (err.name === 'ValidationError') {
    //     errors.msg = Object.values(err.errors)
    //         .map((item) => item.message)
    //         .join(',')
    //     errors.statusCode = 400
    // }


    // if (err.code && err.code === 11000) {
    //     errors.msg = `Duplicate value entered for ${Object.keys(
    //     err.keyValue
    // )} field, please choose another value`
    //     errors.statusCode = 400
    // }


    // if (err.name === 'CastError') {
    //     errors.msg = `No item found with id : ${err.value}`
    //     errors.statusCode = 404
    // }

    return res.status(errors.statusCode).json({msg : errors.msg})
}


module.exports = errorHandler