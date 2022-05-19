const mongoose = require('mongoose')
// mongoose.Schema.Types.Boolean.convertToFalse.add('off');
// mongoose.Schema.Types.Boolean.convertToTrue.add('on');
const BugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"title required"]    
        },
    squashed: {
        type: Boolean,
        required: [true,'squashed required']
    },
    description: {
        type: String,
        required: [true, 'description required']
    }
}, {timestamps: true});
module.exports.Bug = mongoose.model("Bug", BugSchema)