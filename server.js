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
        const email = req.body.email
        const user = await profileinfo.findOne({ email: email })
        if (user.password === "123") {
            console.log("User Exists")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

// app.post('/BasicInfo', async(req, res) => {
//     console.log("inside basicinfo")
//     const data_add = new basicinfo(req.body)
//     try {
//         await data_add.save()
//         res.json(data_add)
//     } catch (error) {
//         console.log(error)
//         res.status(500).send(error);
//     }
// })

app.post('/ProfileInfo', async(req, res) => {
    console.log("inside profileinfo")
    const data_add = new profileinfo(req.body)
    try {
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
        if (user.password === password) {
            res.status(201).send()
            console.log("Login Success")
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