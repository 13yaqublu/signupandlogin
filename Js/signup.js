const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#sign-up');
let arr = [];

if (localStorage.getItem('users')) {
    arr = JSON.parse(localStorage.getItem('users'));
} else {
    arr = [];
}

form.addEventListener('submit', function (a) {
    // a.preventDefault();
    const obj = {
        username: username.value,
        email: email.value,
        password: password.value
    };
    // console.log(obj);
    arr.push(obj);
    let jsonAry = JSON.stringify(arr);
    localStorage.setItem('user', jsonAry);
});

function darkmode() {
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode")
    var theme;
    if (SetTheme.classList.contains("dark-mode")) {
        theme = "DARK";
    } else {
        theme = "LIGHT";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    if (GetTheme === "DARK") {
        document.body.classList = "dark-mode";
    } else {
        document.body.classList = "";
    }
}, 5);