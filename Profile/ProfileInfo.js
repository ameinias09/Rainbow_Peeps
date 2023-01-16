var email = ""
var namepr = ""
var password = ""
var dob = ""
var gender = ""
var pronouns = ""
var rorientation = ""
var sorientation = ""
const cookieArr = document.cookie.split("; ");

const btn = document.getElementById("finish");
btn.addEventListener('click', e => {
    console.log('inside');
    const about = document.getElementById('aboutInput');
    const personality = document.getElementById('personalityInput');
    const interest = document.getElementById('interestInput');
    const favmusic = document.getElementById('favmusicInput');
    const favmovie = document.getElementById('favmovieInput');
    const favseries = document.getElementById('favseriesInput');
    const favbook = document.getElementById('favbookInput');

    for (var i = 0; i < cookieArr.length; i++) {
        const cookie = cookieArr[i].split("=")
        if (cookie[0] == "email") {
            email = cookie[1]
            document.cookie = cookie[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else
        if (cookie[0] == "name") {
            namepr = cookie[1]
            document.cookie = cookie[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else
        if (cookie[0] == "password") {
            password = cookie[1]
            document.cookie = cookie[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else
        if (cookie[0] == "dob") {
            dob = cookie[1] + ""
            document.cookie = cookie[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else
        if (cookie[0] == "gender") {
            gender = cookie[1]
            document.cookie = cookie[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else
        if (cookie[0] == "pronouns") {
            pronouns = cookie[1]
            document.cookie = cookie[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else
        if (cookie[0] == "rorientation") {
            rorientation = cookie[1]
            document.cookie = cookie[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else
        if (cookie[0] == "sorientation") {
            sorientation = cookie[1]
            document.cookie = cookie[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    }
    console.log(email)
    if (email == "" || gender == "") {
        alert("Bad Session/Session Expired")
        return false
    }

    fetch('https://rainbowpeeps.onrender.com/ProfileInfo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name: namepr,
                password: password,
                dob: dob,
                gender: gender,
                pronouns: pronouns,
                rorientation: rorientation,
                sorientation: sorientation,
                about: about.value,
                personality: personality.value,
                interest: interest.value,
                favmusic: favmusic.value,
                favmovie: favmovie.value,
                favseries: favseries.value,
                favbook: favbook.value,
                pfp: "0",
                followers: [],
                notification: [],
                posts: [],

            }),
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            document.cookie = "email" + "=" + email + "" + "; path=/"
            window.location.replace(".././Contents/Forum.html");
        })

    // window.location.href = "../Contents/Forum.html";
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })