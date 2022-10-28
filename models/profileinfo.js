const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const profileinfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    dob: {
        type: Date,
        required: false
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
    },
    about: {
        type: String,
        required: false
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

profileinfoSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
})

const profileinfo = mongoose.model("ProfileInfo", profileinfoSchema);

module.exports = { profileinfo };