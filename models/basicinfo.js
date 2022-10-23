const mongoose = require("mongoose");

const basicinfoSchema = new mongoose.Schema({
    dob: {
        type: Date,
        required: false,
    },
    gender: {
        type: String,
        require: true
    },
    pronoun: {
        type: String,
        require: true
    },
    rorientation: {
        type: String,
        require: true
    },
    sorientation: {
        type: String,
        require: true
    }
});

const basicinfo = mongoose.model("BasicInfo", basicinfoSchema);

module.exports = { basicinfo };