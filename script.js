const people = [
    {
        name: 'Ali Cheikh',
        github: "https://github.com/Ali-Cheikh",
        instagram: "link",
        facebook: " ",
        website: "bit.ly/Aliportfolio",
        image: 'person.svg',
        intro: ` I'm a <b style="color: green;font-family: cursive;">self made Developer</b> I love to create thing out of writing code.<i> Design, build, Publish? </i>, depend on me to take a part 👍<br>
        <ins> Computer science student at LFBA</ins> `,
        email: "someone@gmail.com",
        profession: 'developer',
    },
    {
        name: 'Yassine Souissi',
        github: "https://github.com/Ali-Cheikh",
        instagram: "https://www.instagram.com/yassinesouissi653/",
        facebook: "https://www.facebook.com/yassine.souissi.5621?locale=fr_FR",
        website: "https://loordyassin.github.io/portfolio/",
        image: 'person.svg',
        intro: `HI<b style="color:white"> !</b>I'm <b style="color:white"> Y</b>assine <b style="color:white"> S</b>ouissi Product designer and digital creative director who has been working in the design field for 4 years. Specialized in Google website design`,
        email: "yassinesouissi653@gmail.com",
        profession: 'designer',
    }
];

displayPeople();

function displayPeople() {
    const peopleListDiv = document.getElementById('people-list');
    peopleListDiv.innerHTML = '';

    people.forEach(person => {
        const personCard = `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card rounded bg-none text-white">
                <div class="profile-img"><img src="${person.image}" alt="couldn't load image"></div>
                <div class="name">${person.name}</div>
                <div class="intro"><p>${person.intro}</p></div>
                <div class="email-text">${person.email}<br><span class="text-success text-uppercase"><b>${person.profession}</b></span></div>
                <div class="contact-icons">
                    ${person.facebook && `<a href="${person.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>`}
                    ${person.instagram && `<a href="${person.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>`}
                </div>
                <div class="kebab-menu">
                    <i class="fas fa-ellipsis-v"></i>
                </div>
                <div class="links">
                    <div class="link-container">
                        ${person.website && `<a class="link hoverColor" href="${person.website}" target="_blank"><i class="fas fa-globe"></i> Website</a>`}
                    </div>
                    <div class="link-container">
                        ${person.github && `<a class="link hoverColor" href="${person.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>`}
                    </div>
                </div>
                <div class="email-button">
                    <a class="btn" href="mailto:${person.email}"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
        `;
        peopleListDiv.innerHTML += personCard;
    });
}

$(document).ready(function() {
    $('.kebab-menu').click(function(event) {
        $('.links').toggleClass('show-links');
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });

    // Hide links when clicking outside of the kebab menu and links container
    $(document).click(function(event) {
        if (!$(event.target).closest('.kebab-menu').length && !$(event.target).closest('.links').length) {
            $('.links').removeClass('show-links');
        }
    });

    // Prevent hiding links when clicking on the contact icons
    $('.contact-icons').click(function(event) {
        event.stopPropagation();
    });
});



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
        Swal.fire(
            'please wait',
            'We are processing your request',
            'info',
            false
        )
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        fetch('https://script.google.com/macros/s/AKfycbxI0PA28-wCFrolwwW6_owV1J5y_8DSe97ovKauO9zu5EqFfNBxDuCuoxsOTHw7-pNx/exec', {
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
                    "thank you for registering",
                    false
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
        Swal.fire({
            title:'submitting',
            text:'Please wait...',
            icon:'info',
            showConfirmButton: false,
    })
        var email = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;

        fetch('https://script.google.com/macros/s/AKfycbxI0PA28-wCFrolwwW6_owV1J5y_8DSe97ovKauO9zu5EqFfNBxDuCuoxsOTHw7-pNx/exec', {
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