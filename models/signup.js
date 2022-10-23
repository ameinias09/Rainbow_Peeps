const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
});

const signup = mongoose.model("Signup", signupSchema);

module.exports = { signup };