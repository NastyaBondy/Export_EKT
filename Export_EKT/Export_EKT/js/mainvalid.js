angular.module('myapp', []);
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const telephone = document.getElementById('telephone');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        form.reset();
    }

    function checkInputs() {
        // trim to remove the whitespaces
        const nameValue = name.value.trim();
        const telephoneValue = telephone.value.trim();

        if (nameValue === '') {
            setErrorFor(name, 'Поле не может быть пустым!');
        } else {
            setSuccessFor(name);
        }

        if (telephoneValue === '') {
            setErrorFor(country, 'Поле не может быть пустым!');
        } else {
            setSuccessFor(country);
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
});