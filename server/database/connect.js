let mongoose = require('mongoose')

mongoose.set('strictQuery', true);

let connectDb = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDb