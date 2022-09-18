angular.module('myapp', []);
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const country = document.getElementById('country');
    const city = document.getElementById('city');
    const fio = document.getElementById('fio');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        checkInputs();
        form.reset();
    }

    function checkInputs() {
        // trim to remove the whitespaces
        const emailValue = email.value.trim();
        const nameValue = name.value.trim();
        const countryValue = country.value.trim();
        const cityValue = city.value.trim();
        const fioValue = fio.value.trim();

        if (emailValue === '') {
            setErrorFor(email, 'Поле не может быть пустым!');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Неверный адрес электронной почты!');
        } else {
            setSuccessFor(email);
        }

        if (nameValue === '') {
            setErrorFor(name, 'Поле не может быть пустым!');
        } else {
            setSuccessFor(name);
        }

        if (countryValue === '') {
            setErrorFor(country, 'Поле не может быть пустым!');
        } else {
            setSuccessFor(country);
        }

        if (cityValue === '') {
            setErrorFor(city, 'Поле не может быть пустым!');
        } else {
            setSuccessFor(city);
        }

        if (fioValue === '') {
            setErrorFor(fio, 'Поле не может быть пустым!');
        } else {
            setSuccessFor(fio);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'tab_3 error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'tab_3 form-group success';
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});

/*function onSubmit(form) {
    form.reset();
}*/
