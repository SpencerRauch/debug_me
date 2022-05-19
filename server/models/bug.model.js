const mongoose = require('mongoose')

const BugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"title required"]    
        },
    description: {
        type: String,
        required: [true, 'description required']
    }
}, {timestamps: true});
module.exports.Bug = mongoose.model("Bug", BugSchema)