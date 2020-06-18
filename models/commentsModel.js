const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comments = new Schema({
   id: String,
   comment: String,
   from: String
})

module.exports = mongoose.model('Comments', Comments)