const mongoose = require("mongoose");

const profileinfoSchema = new mongoose.Schema({
    about: {
        type: String,
        required: false,
    },
    personality: {
        type: String,
        require: true
    },
    interest: {
        type: String,
        require: true
    },
    favmusic: {
        type: String,
        require: true
    },
    favmovie: {
        type: String,
        require: true
    },
    favseries: {
        type: String,
        require: true
    },
    favbook: {
        type: String,
        require: true
    }
});

const profileinfo = mongoose.model("ProfileInfo", profileinfoSchema);

module.exports = { profileinfo };