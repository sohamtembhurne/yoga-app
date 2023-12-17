const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    age: {
        type: 'Number',
        required: true
    },
    mobile: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true
    },
    month:{
        type: 'String',
        required: true
    },
    shift: {
        type: 'String',
        required: true
    }  
},{timestamps: true})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel;