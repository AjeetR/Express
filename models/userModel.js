const mongoos = require('mongoose');

const userSchema = mongoos.Schema({
    users: {
        name: String,
        id: Number,
        email : String
    },
    department : {
        name : String,
        id : Number
    },
    date : {
        date : Date
    }
})

module.exports = mongoos.model('Users', userSchema);