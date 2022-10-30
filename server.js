const express = require("express")
const cors = require('cors');
const app = express()
app.use(cors());
const bcrypt = require('bcrypt')
app.use(express.json());
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const { profileinfo } = require('./models/profileinfo')
const { generalchat } = require('./models/generalchat')
const { findingfriend } = require('./models/findingfriend')
const { lgbtq } = require('./models/lgbtq')
const { memberintroduction } = require('./models/memberintroduction')
const { mentalhealth } = require('./models/mentalhealth')

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
        await profileinfo.updateOne({ _id: req.body.id }, {
            $set: {
                pfp: req.body.pfp
            }
        })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/EditProfile', async(req, res) => {
    console.log("inside")
    try {
        const user = await profileinfo.findOne({ _id: req.body.id })
        await profileinfo.updateOne({ _id: req.body.id }, {
            $set: {
                name: req.body.name,
                dob: req.body.dob,
                gender: req.body.gender,
                pronouns: req.body.pronouns,
                rorientation: req.body.rorientation,
                sorientation: req.body.sorientation,
                about: req.body.about,
                personality: req.body.personality,
                interest: req.body.interest,
                favmusic: req.body.favmusic,
                favmovie: req.body.favmovie,
                favseries: req.body.favseries,
                favbook: req.body.favbook,
            }
        })
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

app.post('/GeneralChat', async(req, res) => {
    console.log("inside general chat")
    const data_add = new generalchat(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        res.json(data_add)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})
app.post('/findingfriend', async(req, res) => {
    console.log("inside")
    const data_add = new findingfriend(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        res.json(data_add)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})
app.post('/lgbtq', async(req, res) => {
    console.log("inside ")
    const data_add = new lgbtq(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        res.json(data_add)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})
app.post('/memberintroduction', async(req, res) => {
    console.log("inside ")
    const data_add = new memberintroduction(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        res.json(data_add)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})
app.post('/mentalhealth', async(req, res) => {
    console.log("inside ")
    const data_add = new mentalhealth(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        res.json(data_add)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})


app.post('/Introduction', async(req, res) => {
    console.log("inside")
    try {
        const user = await memberintroduction.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/General', async(req, res) => {
    console.log("inside")
    try {
        const user = await generalchat.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/lgbt', async(req, res) => {
    console.log("inside")
    try {
        const user = await lgbtq.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/mentalhelp', async(req, res) => {
    console.log("inside")
    try {
        const user = await mentalhealth.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/Social', async(req, res) => {
    console.log("inside")
    try {
        const user = await findingfriend.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

app.listen(3000)