const id = "6358c4cc81a4e755958c298e"
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