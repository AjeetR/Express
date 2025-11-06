import express from 'express';
import bodyParser from 'body-parser';

import userRouter from './route/users.js';

const app = express();
const PORT = 5000;
app.use(bodyParser.json());  //This is to show that we are using JSON Data in this applicatin 

app.use('/', userRouter);

// app.get('/',(req, res) => res.send('Hello !'))

app.listen(PORT, console.log(`server is running on http://localhost:${PORT}`));

