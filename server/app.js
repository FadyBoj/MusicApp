require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./connect/db');
const cookieParser = require('cookie-parser');

//Routes
const usersRoute = require('./routes/users-route');
const spotifyApi = require('./routes/spotify-api');
//middleware
const errorAsyncHandler = require('./middleware/error-async-handler');

app.use(express.json())
app.use(cors());
app.use(cookieParser());

app.use('/users',usersRoute)
app.use('/spotify-api',spotifyApi);

app.use(errorAsyncHandler);

const port = 8000

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_SECRET)
        app.listen(port,() =>{
            console.log(`Server is running on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

//error middleware


start()