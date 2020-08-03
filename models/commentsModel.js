const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comments = new Schema({
   id: String,
   comment: String,
   from: String,
   date: Date
})

module.exports = mongoose.model('Comments', Comments)