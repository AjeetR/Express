const express = require('express');
const app = express();
const userRouter = require('./route/users')
const mongoos = require('mongoose');
require('dotenv/config');

//Body Parser is used in POST request
//Represents the type of data which is used in this project
const bodyParser = require('body-parser');
app.use(bodyParser.json());


//Routes
app.get('/', (req, res) => {
    res.send('This is home page')
})

//Middleware 
//Here the users are routing from /route/users.js
app.use('/users', userRouter);

// app.use('/users/createOrganization',userRouter)


//Mongo DB connection
// mongoos.connect(process.env.DB_CONNECTION, () => {
//     console.log('Connected to DB !')
// })


//listner
app.listen(3000)