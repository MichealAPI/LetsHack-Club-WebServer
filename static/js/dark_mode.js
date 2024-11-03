function apply() {
    
    darkModeSwitch.classList.toggle("bi-sun");
    darkModeSwitch.classList.toggle("bi-moon");    
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

}

let darkModeSwitch = document.getElementById("darkModeSwitch");
let body = document.getElementById("bodyContainer");

darkModeSwitch.addEventListener('click', apply);