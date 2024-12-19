var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Batiment = new Schema({
    nomB : String,
    emailB : String,
    ageB : Number
})
module.exports = mongoose.model('batiments', Batiment)