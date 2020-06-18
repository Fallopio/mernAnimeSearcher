const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserStorage = new Schema({
    user: String,
    favs: Array,
    favsIds: Array
})

module.exports = mongoose.model('UserStorage', UserStorage)