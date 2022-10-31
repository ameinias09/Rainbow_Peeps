const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const findingfriendSchema = new mongoose.Schema({
    post: {
        type: String,
        required: true
    },
    author: {
        type: String,
        require: true
    },
    topic: {
        type: Boolean,
        require: true
    },
    sub: {
        type: String,
        require: true
    },
    like: {
        type: Array,
        required: false
    },
    love: {
        type: Array,
        require: true
    },
    wow: {
        type: Array,
        require: true
    },
    angry: {
        type: Array,
        require: true
    },
    sad: {
        type: Array,
        require: true
    }
});
const findingfriend = mongoose.model("FindingFriend", findingfriendSchema);

module.exports = { findingfriend };