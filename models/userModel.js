const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    user: String,
    pw: String,
})

module.exports = mongoose.model('User', User)