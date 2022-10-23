const btn = document.querySelector(".btn")
btn.addEventListener('click', e => {
    console.log('inside');
    const email = document.getElementById('emailInput');
    const name = document.getElementById('nameInput');
    const password = document.getElementById('passwordInput');
    if (email.value == "" || name.value === "" || password.value === "" || email.value == null || name.value === null || password.value === null) {
        alert("Please fill out all the fields!!");
        return false;
    }
    fetch('http://localhost:3000/SignUp', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
                name: name.value,
                password: password.value,
            }),
        })
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))

    window.location.replace("BasicInfo.html");
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })