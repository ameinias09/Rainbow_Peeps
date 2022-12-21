var changepfp = false
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('user');
const id = myParam

const cookieArr = document.cookie.split("; ");
var visId = ""

for (var i = 0; i < cookieArr.length; i++) {
    const cookie = cookieArr[i].split("=")
    if (cookie[0] == "id") {
        visId = cookie[1]
    }
}

function doesFollow(list, i) {
    var is = false;
    for (var y = 0; y < list.length; y++) {
        if (list[y] == i) {
            is = true
            break;
        }
    }
    return is
}

fetch('https://rainbowpeeps.onrender.com/Profile', {
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
        const name = document.getElementById("Name")
        name.innerText = '' + data.name
        document.getElementById("Title").innerText = data.name + "| Rainbow Peeps"
        const about = document.getElementById("About")
        about.innerText = "" + data.about
        const br = document.createElement("br")
        document.getElementById("myBtn").src = "..\\.\\Pics\\pfp\\" + data.pfp + ".webp"
        const info = document.getElementById("Info")

        //followers
        var fol = data.followers.length
        var Followbtn = document.getElementById("Followbtn")
        if (doesFollow(data.followers, visId)) {
            Followbtn.className = "btn btn-primary"
            Followbtn.innerText = "Following"
        } else {
            Followbtn.className = "btn btn-outline-primary"
            Followbtn.innerText = "Follow"
        }
        var followers = data.followers
        Followbtn.addEventListener('click', e => {
                if (doesFollow(data.followers, visId)) {
                    followers.splice(followers.indexOf(visId), 1)
                    fetch('https://rainbowpeeps.onrender.com/editFollower', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: id,
                            followers: followers,
                        }),
                    })
                    window.location.replace(location)
                } else {
                    followers = followers + visId
                    fetch('https://rainbowpeeps.onrender.com/editFollower', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: id,
                            followers: followers,
                        }),
                    })
                    window.location.replace(location)
                }
            })
            // profile image
        var pfp = data.pfp;


        // profile image


        document.getElementById("Followers").innerText = "Followers: " + fol
        document.getElementById("Gender").innerText = "Gender: " + data.gender
        document.getElementById("Pronouns").innerText = "Pronouns: " + data.pronouns
        document.getElementById("Dob").innerText = "Date of Birth: " + data.dob
        document.getElementById("Rorientation").innerText = "Romantic Orientation: " + data.rorientation
        document.getElementById("Sorientation").innerText = "Sexual Orientation: " + data.sorientation
        document.getElementById("Personality").innerText = "Personality: " + data.personality
        document.getElementById("Interest").innerText = "Interest: " + data.interest
        document.getElementById("Favmusic").innerText = "Favourite Music: " + data.favmusic
        document.getElementById("Favmovie").innerText = "Favourite Movie: " + data.favmovie
        document.getElementById("Favseries").innerText = "Favourite Series: " + data.favseries
        document.getElementById("Favbook").innerText = "Favourite Book: " + data.favbook
    })