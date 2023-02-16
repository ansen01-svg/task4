let Joke = require('../schemas');


let getAllJokes = async(req, res) => {
    let jokes = await Joke.find({});

    res.status(200).json({ msg :'Your jokes collection', data: jokes });
}

let addJoke = async (req, res) => {
    await Joke.create(req.body);

    res.status(201).json({ msg : 'Joke added to your collection' });
}

let editJoke = async(req, res) => {
    let { Rating } = req.body;

    let joke = await Joke.findOne({ _id: req.params.id });
    
    joke.Rating = Rating
    await joke.save();

    res.status(201).json({ msg : 'Your rated this joke' })
}

let deleteJoke = async(req, res) => {
    await Joke.deleteOne({ _id : req.params.id })

    res.status(201).json({ msg: 'Joke deleted' })
}


module.exports = { getAllJokes, addJoke, editJoke, deleteJoke };