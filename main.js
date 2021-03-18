const mandatory_all = document.querySelectorAll('.mandatory');
const mandatory_all_inputs = document.querySelectorAll('.mandatory input');
const mail_input = document.querySelector('.mandatory > input[name="email"]');
const password = document.querySelector('.mandatory > input[name="password"]');
const confirm_password = document.querySelector('.mandatory > input[name="confirm-password"]');
const form = document.querySelector('.j-form');

let input = null;
let error_msg = null;

const add_error = function (error_class, error_txt, input_field) {
    error_class.classList.add('error-msg');
    error_class.innerHTML = error_txt;
    input_field.classList.add('error');
    input_field.parentNode.appendChild(error_msg);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    for (input of mandatory_all_inputs) {
        error_msg = document.createElement('p');
        if (input.tagName === "INPUT" && (input.getAttribute('type') === 'text') ||
            input.getAttribute('type') === 'email' ||
            input.getAttribute('type') === 'password') {
            if (input.parentNode.querySelector('p')) { //removes all p tags, so it can added again
                input.parentNode.querySelector('p').remove();
            };
            if (input.value.trim() === '') {
                add_error(error_msg, "Not allowed to be empty", input);
            } else {
                input.classList.remove('error');
            };
        };
    };

    let i; //test to see if an email starts or ends with an '@' sign
    for (i = 0; i < mail_input.value.length; i++) {
        if (mail_input) {
            if (mail_input.value.charAt(0) === '@' ||
                mail_input.value.charAt(mail_input.value.length - 1) === '@') {
                add_error(error_msg, "Invalid email", mail_input);
                break;
            };
        };
    };

    if (password.value !== confirm_password.value) {
        add_error(error_msg, undefined, password);
        add_error(error_msg, "Password don't match", confirm_password);
    };


});
