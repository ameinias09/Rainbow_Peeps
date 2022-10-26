const btn = document.querySelector(".btn")
btn.addEventListener('click', e => {
    console.log('inside');
    const email = document.getElementById('emailInput');
    const password = document.getElementById('passwordInput');
    if (email.value == "" || name.value === "" || password.value === "" || email.value == null || password.value === null) {
        alert("Please fill out all the fields!!");
        return false;
    }

    fetch('http://localhost:3000/Login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            })
        })
        .then(res => {
            // console.log("Login Success")
            console.log(res);
            if (res.status == 400)
                throw new Error("Invalid details")
        })
        .then(data => console.log("data", data))
        .catch(err => alert(err))
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })