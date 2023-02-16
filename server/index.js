require('dotenv').config();
require('express-async-errors');

let express = require('express');
let cors = require('cors');
let app = express();

let connectDb = require('./database/connect');
let router = require('./routes');

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use('/apis/v1/jokes', router);

let port = process.env.PORT || 5001

let start = async() => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening at port ${port}...`))        
    } catch (error) {
        console.log(error)
    }   
}

start();