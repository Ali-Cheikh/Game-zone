const containerLogin = document.getElementById('containerLogin');
const registerBtn = document.getElementById('registerr');
const loginBtn = document.getElementById('loginn');

registerBtn.addEventListener('click', () => {
    containerLogin.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    containerLogin.classList.remove("active");
});
document.addEventListener('DOMContentLoaded', function () {

    // Function to hide sign-up and login forms
    function hideForms() {
        document.getElementById('hide').style.display = 'none';
    }
    function hideSignup() {
        document.getElementById('signupForm').style.display = 'none';
    }

    // Function to show dashboard
    function showDashboard() {
        document.getElementById('dashboard').style.display = 'block';
    }

    // Sign up button click event
    document.getElementById('signupButton').addEventListener('click', function (event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        fetch('https://script.google.com/macros/s/AKfycbxE-mwh08FvmCyprIg4AbO12CSJJ6bu_9mRSUamCFuUHlBYcdQoVJzWkNd9vw66cig9wA/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'action=storeData&email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password)
        })
            .then(function (response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Network response was not ok.');
            })
            .then(function (data) {
                hideSignup();
                Swal.fire(
                    'Success!',
                    'You have successfully signed up.',
                    "thank you for registering"
                );
            })
            .catch(function (error) {
                console.error(error);
                Swal.fire(
                    'Error!',
                    'An error occurred while signing up. Please try again later.',
                    'error'
                );
            });
    });

    // Login button click event
    document.getElementById('loginButton').addEventListener('click', function (event) {
        event.preventDefault();
        var email = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;

        fetch('https://script.google.com/macros/s/AKfycbxE-mwh08FvmCyprIg4AbO12CSJJ6bu_9mRSUamCFuUHlBYcdQoVJzWkNd9vw66cig9wA/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'action=checkCredentials&email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password)
        })
            .then(function (response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Network response was not ok.');
            })
            .then(function (data) {
                if (data.trim() === "Success") {
                    hideForms();
                    Swal.fire(
                        'Success!',
                        'You have successfully logged in.',
                        'success '
                    );
                    showDashboard(); // Show dashboard upon successful login
                } else {
                    Swal.fire(
                        'Error!',
                        'Incorrect email or password. Please try again.',
                        'error'
                    );
                }
            })
            .catch(function (error) {
                console.error(error);
                Swal.fire(
                    'Error!',
                    'An error occurred while logging in. Please try again later.',
                    'error'
                );
            });
    });
});