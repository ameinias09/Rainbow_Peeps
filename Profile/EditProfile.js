const cookieArr = document.cookie.split("; ");
var id = ""

for (var i = 0; i < cookieArr.length; i++) {
    const cookie = cookieArr[i].split("=")
    if (cookie[0] == "id") {
        id = cookie[1]
    }
}
fetch('https://rainbowpeeps.onrender.com//Profile', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        document.getElementById("nameInput").value = data.name
        document.getElementById("dobInput").value = data.dob
        document.getElementById("aboutInput").value = data.about
        document.getElementById("personalityInput").value = data.personality
        document.getElementById("interestInput").value = data.interest
        document.getElementById("favmusicInput").value = data.favmusic
        document.getElementById("favmovieInput").value = data.favmovie
        document.getElementById("favseriesInput").value = data.favseries
        document.getElementById("favbookInput").value = data.favbook
    })




const btn = document.getElementById("finish");
btn.addEventListener('click', e => {
    console.log('inside');

    const namepr = document.getElementById("nameInput");
    const dob = document.getElementById("dobInput");
    const gender = document.getElementById("genderInput");
    const pronouns = document.getElementById("pronounsInput");
    const rorientation = document.getElementById("rorientationInput");
    const sorientation = document.getElementById("sorientationInput");
    const about = document.getElementById('aboutInput');
    const personality = document.getElementById('personalityInput');
    const interest = document.getElementById('interestInput');
    const favmusic = document.getElementById('favmusicInput');
    const favmovie = document.getElementById('favmovieInput');
    const favseries = document.getElementById('favseriesInput');
    const favbook = document.getElementById('favbookInput');

    if (gender.value == "null" || pronouns.value === "null" || rorientation.value === "null" || sorientation.value == "null" || namepr.value == "") {
        alert("All fields marked * are compulsory!!");
        return false;
    }

    fetch('https://rainbowpeeps.onrender.com//EditProfile', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: namepr.value,
                dob: dob.value,
                gender: gender.value,
                pronouns: pronouns.value,
                rorientation: rorientation.value,
                sorientation: sorientation.value,
                about: about.value,
                personality: personality.value,
                interest: interest.value,
                favmusic: favmusic.value,
                favmovie: favmovie.value,
                favseries: favseries.value,
                favbook: favbook.value,
            }),
        })
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))

    window.location.replace("./Profile.html")
})