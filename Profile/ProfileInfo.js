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

    fetch('http://localhost:3000/ProfileInfo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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

    window.location.href = "../Contents/Forum.html";
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })