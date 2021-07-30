const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    subjects: {
        type:Array,
    },
    class: {
        type:String,
    },
    socities: {
        type:Array
    }
})
module.exports = mongoose.model('Students', studentSchema)