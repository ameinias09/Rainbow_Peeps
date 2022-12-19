const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#passwordInput');

togglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

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

    fetch('https://rainbowpeeps.onrender.com/SignUp', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
            })
        })
        .then(res => {
            console.log(res)
            if (res.status == 404 || res.status == 400)
                throw new Error("Email already Exists")
            return res.json()
        })
        .then(data => window.location.replace("BasicInfo.html"))

    .catch(err => {
            console.log("in catch");
            alert(err)
            return false
        })
        // if (flag) {
        //     alert("Email already exists")
        //     return false
        // }

    // window.location.replace("BasicInfo.html");
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })