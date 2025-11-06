const express = require('express');
const users = require('./user.json');        //JSON data file from  /route/user.json
const userModel = require('../models/userModel')
const request = require('request');
const axios = require('axios');
const { route } = require('express/lib/router');
const fs = require('fs');

//Initilize router
const router = express.Router();
const userData = JSON.parse(JSON.stringify(users));

router.get('/users', (req, res) => {
    // console.log(userData.users);
    res.send(userData.users);
});

router.get('/coffee', async (req, res) => {
    function ordeCoffee() {
        return new Promise((resolve, reject) => {
            request('https://api.sampleapis.com/coffee/hot', (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    // console.log(JSON.parse(JSON.stringify(res.body)));
                    resolve(JSON.parse(JSON.stringify(res.body)));
                }
            })
        })
    }

    async function asyncCall() {
        console.log('Calling Async');
        let order1 = await ordeCoffee();
        // console.log('Order1 ', order1);
        res.send(order1)
    }

    await asyncCall();

});

// router.post('/', (req, res) => {
//     // console.log('Post Body ',req.body);
//     const postUser = new userModel({
//         name: req.body.String,
//         id: req.body.Number,
//         email: req.body.String
//     });

//     postUser.save()
//         .then(data => {
//             res.json(data)
//         }).catch(error => {
//             res.json({ message: error })
//         })
// })

//Creating a post request

router.put('/createOrganization', (req, res) => {

    // Read file before appending
    fs.readFileSync("./route")

    const content = {
        organization: {
            "organization": "abc"
        }
    }
    console.log('Wrinting to file - ', content)
    // if (fs.existsSync("./route/organization")) {
    res.send(fs.appendFileSync('./route/organization.json', content, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(502)
            return;
        }
    })
    )
    // }
})



module.exports = router;

