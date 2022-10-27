const btn = document.querySelector(".btn")
var flag = true
btn.addEventListener('click', e => {
    console.log('inside');
    const email = document.getElementById('emailInput');
    const name = document.getElementById('nameInput');
    const password = document.getElementById('passwordInput');
    if (email.value == "" || name.value === "" || password.value === "" || email.value == null || name.value === null || password.value === null) {
        alert("Please fill out all the fields!!");
        return false;
    }
    document.cookie = "email" + "=" + email.value + "" + "; path=/"
    document.cookie = "name" + "=" + name.value + "" + "; path=/"
    document.cookie = "password" + "=" + password.value + "" + "; path=/"

    fetch('http://localhost:3000/SignUp', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
            })
        })
        .then(res => {
            if (res.status == 404 || res.status == 400)
                throw new Error("Email already Exists")
        })
        .then(data => console.log(data))
        .catch(err => {
            alert(err)
            return false
        })
        // if (flag) {
        //     alert("Email already exists")
        //     return false
        // }

    window.location.replace("BasicInfo.html");
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })