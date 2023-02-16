let mongoose = require('mongoose')


let jokeSchema = new mongoose.Schema({
    Question: { type: String } ,
    Answer: { type: String },
    Rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 10,
    },
});


module.exports = mongoose.model('Joke', jokeSchema);