const express = require("express")
const cors = require('cors');
const app = express()
app.use(cors());
const bcrypt = require('bcrypt')
app.use(express.json());
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const { signup } = require('./models/signup')
const { basicinfo } = require('./models/basicinfo')
const { profileinfo } = require('./models/profileinfo')

app.use(cookieParser())
mongoose.connect('mongodb+srv://SDJava:SDJava09@projectrp.6herpzj.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log(err)
})


app.post('/SignUp', async(req, res) => {
    console.log("inside")
    try {
        console.log(req.body)
        const email = req.body.email
        const user = await profileinfo.findOne({ email: email })
        if (user != null) {
            console.log("User Exists")
            return res.status(400).send({ data: "User Already Exist" })
        }
        return res.status(200).send({ data: "Success" })
    } catch (error) {
        console.log(error)
    }
})

app.post('/Profile', async(req, res) => {
    console.log("inside")
    try {
        const user = await profileinfo.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

app.post('/ProfileInfo', async(req, res) => {
    console.log("inside profileinfo")
    const data_add = new profileinfo(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        res.json(data_add)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

app.post('/Login', async(req, res) => {
    try {
        console.log("inside")
        const email = req.body.email
        const password = req.body.password
        const user = await profileinfo.findOne({ email: email })
        console.log(user.password)
        console.log(password)
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            console.log("Login Success")
            res.status(201).send()

        } else {
            console.log("Invalid Password")
            res.status(400).send()
        }
    } catch (error) {
        console.log("Invalid Email")
        res.status(400).send()
    }
})
app.listen(3000)