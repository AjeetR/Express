const { response } = require('express');
const { resolve, reject } = require('promise');
const request = require('request');

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

async function asyncCall(){
    console.log('Calling Async');
    let order1 = await ordeCoffee();
    console.log('Order1 ', order1);
}

asyncCall();

// request('https://api.sampleapis.com/coffee/hot', (err, res) => {
//     if (err) { return console.log(err); } else {
//         console.log(JSON.parse(JSON.stringify(res.body)));
//     }
// });

// const axios = require('axios');
// // const res = require('express/lib/response');
// function orderCoffee(url1) {
//     axios.get(url1)
//         .then(response => {
//             return (response.data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// let url1 = 'https://api.sampleapis.com/coffee/hot';
// let orders = async () => {
//     let order1 = await orderCoffee(url1);
//     console.log(order1);
// }
// orders().then(data => {
//     console.log(orders);
// }).catch(err => {
//     console.log(err)
// })