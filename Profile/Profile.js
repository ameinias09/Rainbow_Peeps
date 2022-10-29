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
const pfp = "0";
document.getElementById("pfp0").addEventListener('click', e => { pfp = "0" })
document.getElementById("pfp2").addEventListener('click', e => { pfp = '2' })
document.getElementById("pfp3").addEventListener('click', e => { pfp = '3' })
document.getElementById("pfp4").addEventListener('click', e => { pfp = '4' })
document.getElementById("pfp5").addEventListener('click', e => { pfp = '5' })
document.getElementById("pfp6").addEventListener('click', e => { pfp = '6' })
document.getElementById("pfp7").addEventListener('click', e => { pfp = '7' })
document.getElementById("pfp8").addEventListener('click', e => { pfp = '8' })
document.getElementById("pfp9").addEventListener('click', e => { pfp = '9' })
document.getElementById("pfp10").addEventListener('click', e => { pfp = '10' })
document.getElementById("pfp11").addEventListener('click', e => { pfp = '11' })
document.getElementById("pfp1").addEventListener('click', e => { pfp = '1' })


const id = "635d3bbf698f58c6ab18b0bb"
fetch('http://localhost:3000/Profile', {
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
        const info = document.getElementById("Info")
        document.getElementById("Followers").innerText = "Followers: " + data.followers.length
        document.getElementById("Gender").innerText = "Gender: " + data.gender
        document.getElementById("Pronouns").innerText = "Pronouns: "
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