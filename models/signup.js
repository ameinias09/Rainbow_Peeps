const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const signup = mongoose.model("Signup", signupSchema);

module.exports = { signup };