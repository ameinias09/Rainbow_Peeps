const btn = document.querySelector(".next")
btn.addEventListener('click', e => {
    console.log('inside');
    const dob = document.getElementById('dobInput');
    const gender = document.getElementById('genderInput');
    const pronouns = document.getElementById('pronounsInput');
    const rorientation = document.getElementById('rorientationInput');
    const sorientation = document.getElementById('sorientationInput');
    if (gender.value == "null" || pronouns.value === "null" || rorientation.value === "null" || sorientation.value == "null") {
        alert("All fields are compulsory except DOB!!");
        return false;
    }
    fetch('http://localhost:3000/BasicInfo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dob: dob.value,
                gender: gender.value,
                pronouns: pronouns.value,
                rorientation: rorientation.value,
                sorientation: sorientation.value,
            }),
        })
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))

    window.location.replace("ProfileInfo.html");
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })