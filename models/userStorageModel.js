const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserStorage = new Schema({
    userId: String,
    favs: Array,    
})

module.exports = mongoose.model('UserStorage', UserStorage)