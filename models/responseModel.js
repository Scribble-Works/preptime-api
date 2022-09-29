const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    },
    dataMatrix: {
        type: Array
    },
    metaData: {
        type: Object,
        required: true
    },
    questions: {
        type: Array,
        required: true
    },
    sheet_id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    responses: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('responses', responseSchema)