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

app.get('/', (req, res) => {
    res.send("Hello")
})

app.post('/SignUp', async(req, res) => {

    try {
        console.log(req.body)
        const email = req.body.email
        const user = await profileinfo.findOne({ email: email })
        if (user != null) {
            return res.status(400).send({ data: "User Already Exist" })
        }
        return res.status(200).send({ data: "Success" })
    } catch (error) {
        console.log(error)
    }
})

app.post('/Profile', async(req, res) => {

    try {
        const user = await profileinfo.findOne({ _id: req.body.id })

        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

app.post('/ProfilePfp', async(req, res) => {

    try {
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
app.post('/changePassword', async(req, res) => {
    try {

        const oldPassword = req.body.oldPassword
        const user = await profileinfo.findOne({ _id: req.body.id })

        const isMatch = await bcrypt.compare(oldPassword, user.password)
        if (isMatch) {
            await profileinfo.updateOne({ _id: req.body.id }, {
                $set: {
                    password: await bcrypt.hash(req.body.newPassword, 12),

                }
            })
            res.status(200).send(user)
        } else {
            console.log("Error")
            res.status(400).send()
        }

    } catch (error) {
        res.status(400).send()
    }
})
app.post('/editFollower', async(req, res) => {
    try {



        await profileinfo.updateOne({ _id: req.body.id }, {
            $set: {
                followers: req.body.followers

            }
        })
        res.status(200).send({ data: "Success" })



    } catch (error) {
        console.log("Error")
        res.status(400).send()
    }
})
app.post('/UserPost', async(req, res) => {
    try {
        const user = await profileinfo.findOne({ _id: req.body.author })
        await profileinfo.updateOne({ _id: req.body.author }, {
            $push: {
                posts: req.body.post
            }
        })
        res.status(200).send(user)

    } catch (error) {
        console.log("Error")
        res.status(400).send()
    }
})
app.post('/NotificationPost', async(req, res) => {
    try {

        await profileinfo.updateOne({ _id: req.body.id }, {
            $push: {
                notification: req.body.post
            }
        })
        res.status(200).send(user)

    } catch (error) {
        console.log("Error")
        res.status(400).send()
    }
})

app.post('/ProfileInfo', async(req, res) => {
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

        const email = req.body.email
        const password = req.body.password
        const user = await profileinfo.findOne({ email: email })
        console.log(user.password)
        console.log(password)
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {


            res.status(201).send()

        } else {

            res.status(400).send()
        }
    } catch (error) {

        res.status(400).send()
    }
})

app.post('/GeneralChat', async(req, res) => {

    const data_add = new generalchat(req.body)
    try {
        console.log(data_add)
        await data_add.save()

        try {
            const user = await generalchat.findOne({ author: req.body.author, }).sort({ _id: -1 })

            res.status(200).send(user)
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})
app.post('/findingfriend', async(req, res) => {

    const data_add = new findingfriend(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        try {
            const user = await generalchat.findOne({ author: req.body.author, }).sort({ _id: -1 })

            res.status(200).send(user)
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})
app.post('/lgbtq', async(req, res) => {

    const data_add = new lgbtq(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        try {
            const user = await generalchat.findOne({ author: req.body.author, }).sort({ _id: -1 })

            res.status(200).send(user)
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})
app.post('/memberintroduction', async(req, res) => {

    const data_add = new memberintroduction(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        res.status(200).send(data_add)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
    // try {
    //     const user = await generalchat.findOne({ author: req.body.author }).sort({ _id: -1 })
    //     console.log(user)
    //     res.status(200).send(user)
    // } catch (error) {
    //     console.log(error)
    //     res.status(400).send(error);
    // }
})
app.post('/mentalhealth', async(req, res) => {

    const data_add = new mentalhealth(req.body)
    try {
        console.log(data_add)
        await data_add.save()
        try {
            const user = await generalchat.findOne({ author: req.body.author, }).sort({ _id: -1 })

            res.status(200).send(user)
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})


app.post('/Introduction', async(req, res) => {

    try {
        const user = await memberintroduction.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/General', async(req, res) => {

    try {
        const user = await generalchat.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/lgbt', async(req, res) => {

    try {
        const user = await lgbtq.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/mentalhelp', async(req, res) => {

    try {
        const user = await mentalhealth.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/Social', async(req, res) => {

    try {
        const user = await findingfriend.find({ topic: true })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/User', async(req, res) => {

    try {
        const user = await profileinfo.findOne({ _id: req.body.id })

        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

app.post('/UserByEmail', async(req, res) => {

    try {
        const user = await profileinfo.findOne({ email: req.body.email })

        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

app.post('/GTopic', async(req, res) => {

    try {
        const user = await generalchat.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/GSubTopic', async(req, res) => {

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
app.post('/ITopic', async(req, res) => {

    try {
        const user = await memberintroduction.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/ISubTopic', async(req, res) => {

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
app.post('/LTopic', async(req, res) => {

    try {
        const user = await lgbtq.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/LSubTopic', async(req, res) => {

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
app.post('/STopic', async(req, res) => {

    try {
        const user = await findingfriend.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/SSubTopic', async(req, res) => {

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
app.post('/MTopic', async(req, res) => {

    try {
        const user = await mentalhealth.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})
app.post('/MSubTopic', async(req, res) => {

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

app.listen('3000')