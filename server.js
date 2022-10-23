const express = require("express")
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose')
const { signup } = require('./models/signup')

mongoose.connect('mongodb+srv://SDJava:SDJava09@projectrp.6herpzj.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log(err)
})


app.post('/SignUp', async(req, res) => {
    console.log("inside")
    const data_add = new signup(req.body)
    try {
        await data_add.save()
        res.json(data_add)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})


app.listen(3000)