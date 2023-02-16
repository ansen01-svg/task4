let { UnauthorizedError } = require('../errors')
let jwt = require('jsonwebtoken')


let authentication = (req,res,next) => {
    let authorization = req.headers.authorization

    if (!authorization || !authorization.startsWith('Bearer')) {
        throw new UnauthorizedError(`Unauthorized user`)
    }

    let token = authorization.split(' ')[1]

    try {
        let verifiedToken = jwt.verify(token, process.env.TOKEN)

        let { id } = verifiedToken

        req.user = { id }
        
        next ()

    } catch (error) {
        throw new UnauthorizedError(`Unauthorized user`)
    }
}


module.exports = authentication