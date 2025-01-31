document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const body = document.body;
    const loginForm = document.getElementById('login-form');

    modeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            modeIcon.textContent = '☀️';
        } else {
            modeIcon.textContent = '🌙';
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Please fill in all fields.');
        } 
        if(password.length<6){
            alert("password must be atleast 6 charachters")
        }
        else {
            alert('Login successful!');
            this.reset();
            
        }
    });
});
