const express = require("express")
const cors = require('cors');
const app = express()
app.use(cors());
const bcrypt = require('bcrypt')
app.use(express.json());
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const serverless = require('serverless-http')
const { profileinfo } = require('../models/profileinfo')
const { generalchat } = require('../models/generalchat')
const { findingfriend } = require('../models/findingfriend')
const { lgbtq } = require('../models/lgbtq')
const { memberintroduction } = require('../models/memberintroduction')
const { mentalhealth } = require('../models/mentalhealth')

module.exports.handler = serverless(app);
const router = express.Router();

app.use(cookieParser())
mongoose.connect('mongodb+srv://RainbowPeeps:RainbowPeeps57@rainbowpeeps.gvhsno1.mongodb.net/test').then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log(err)
})


// const request = require('request');



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

router.use('/', (req, res) => {
    res.send("Hello")
})

router.post('/SignUp', async(req, res) => {
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

router.post('/Profile', async(req, res) => {
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
router.post('/EditProfile', async(req, res) => {
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
router.post('/ProfileInfo', async(req, res) => {
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

router.post('/Login', async(req, res) => {
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

router.post('/GeneralChat', async(req, res) => {
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
router.post('/findingfriend', async(req, res) => {
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
router.post('/lgbtq', async(req, res) => {
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
router.post('/memberintroduction', async(req, res) => {
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
router.post('/mentalhealth', async(req, res) => {
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


router.post('/Introduction', async(req, res) => {
    console.log("inside")
    try {
        const user = await memberintroduction.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/General', async(req, res) => {
    console.log("inside")
    try {
        const user = await generalchat.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/lgbt', async(req, res) => {
    console.log("inside")
    try {
        const user = await lgbtq.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/mentalhelp', async(req, res) => {
    console.log("inside")
    try {
        const user = await mentalhealth.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/Social', async(req, res) => {
    console.log("inside")
    try {
        const user = await findingfriend.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/User', async(req, res) => {
    console.log("inside")
    try {
        const user = await profileinfo.findOne({ _id: req.body.id })

        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

router.post('/UserByEmail', async(req, res) => {
    console.log("inside")
    try {
        const user = await profileinfo.findOne({ email: req.body.email })

        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

router.post('/GTopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await generalchat.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/GSubTopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await generalchat.find({ sub: req.body.id }).sort({
            _id: 1
        })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/ITopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await memberintroduction.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/ISubTopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await memberintroduction.find({ sub: req.body.id }).sort({
            _id: 1
        })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/LTopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await lgbtq.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/LSubTopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await lgbtq.find({ sub: req.body.id }).sort({
            _id: 1
        })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/STopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await findingfriend.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/SSubTopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await findingfriend.find({ sub: req.body.id }).sort({
            _id: 1
        })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/MTopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await mentalhealth.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
router.post('/MSubTopic', async(req, res) => {
    console.log("inside")
    try {
        const user = await mentalhealth.find({ sub: req.body.id }).sort({
            _id: 1
        })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

app.use('/.netlify/functions/api', router)