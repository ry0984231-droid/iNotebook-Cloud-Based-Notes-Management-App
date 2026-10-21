const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    Date: {
        type: Date,
        default: Date.now
    },
})
const Notes = mongoose.model("notes", noteSchema);
module.exports = Notes;
