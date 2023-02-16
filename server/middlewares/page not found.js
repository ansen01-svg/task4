let { StatusCodes } = require('http-status-codes')


let pageNotFound = (req,res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ msg : `Page not found` })
}


module.exports = pageNotFound