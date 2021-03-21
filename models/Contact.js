const mongoose = require('mongoose')


//creation schema
const {Schema} = mongoose

const contactSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    mail : {
        type: String,
        required: true,
        unique: true
    },
    phone: Number

})
module.exports = contact = mongoose.model("contact",contactSchema)