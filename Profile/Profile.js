// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var changepfp = false

const cookieArr = document.cookie.split("; ");

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
const id = getCookie("id")

fetch('https://rainbowpeepsbackend.vercel.appProfile', {
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

        // profile image
        var pfp = data.pfp;
        document.getElementById("pfp0").addEventListener('click', e => {
            pfp = "0"
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })
        document.getElementById("pfp2").addEventListener('click', e => {
            pfp = '2'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })
        document.getElementById("pfp3").addEventListener('click', e => {
            pfp = '3'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })
        document.getElementById("pfp4").addEventListener('click', e => {
            pfp = '4'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })

        document.getElementById("pfp5").addEventListener('click', e => {
            pfp = '5'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })

        document.getElementById("pfp6").addEventListener('click', e => {
            pfp = '6'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })

        document.getElementById("pfp7").addEventListener('click', e => {
            pfp = '7'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })

        document.getElementById("pfp8").addEventListener('click', e => {
            pfp = '8'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })

        })

        document.getElementById("pfp9").addEventListener('click', e => {
            pfp = '9'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                }).then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })

        document.getElementById("pfp10").addEventListener('click', e => {
            pfp = '10'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })

        document.getElementById("pfp11").addEventListener('click', e => {
            pfp = '11'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })

        document.getElementById("pfp1").addEventListener('click', e => {
            pfp = '1'
            fetch('https://rainbowpeepsbackend.vercel.appProfile', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        pfp: pfp,
                    }),
                })
                .then((response) => {
                    // if (response.status != 200 || response.status != 201 || response.status != 204) {
                    //     console.log("inside thorw");
                    //     throw new Error("Couldnt update the profile image");
                    // }
                    return response.json();
                })
                .then((data) => {
                    console.log("updated");
                    window.location.reload();
                })
        })


        // profile image


        document.getElementById("Followers").innerText = ""
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