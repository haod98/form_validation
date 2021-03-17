const mandatory_all = document.querySelectorAll('.mandatory');
const mandatory_all_inputs = document.querySelectorAll('.mandatory input');
const mail_input = document.querySelector('#email');
const form = document.querySelector('.j-form');
let input = null;
let error_msg = null;

const add_error_class = function () {
    error_msg.classList.add('error-msg');

}



form.addEventListener('submit', e => {

    for (input of mandatory_all_inputs) {
        error_msg = document.createElement('p');
        e.preventDefault();
        if (input.tagName === "INPUT" && (input.getAttribute('type') === 'text') ||
            input.getAttribute('type') === 'email' ||
            input.getAttribute('type') === 'password') {
            if (input.parentNode.querySelector('p')) { //removes all p tags, so it can added again
                input.parentNode.querySelector('p').remove();
            };
            if (input.value.trim() === '') {
                error_msg.innerHTML = "It's not allowed to be empty";
                input.classList.add('error');
                input.parentNode.appendChild(error_msg);
                add_error_class();
            } else {
                input.classList.remove('error');
            };
        };
    };

    let i = 0; //test to see if an email starts or ends with an '@' sign
    for (i; i < mail_input.value.length; i++) {
        if (document.getElementById('email')) {
            if (mail_input.value.charAt(0) === '@' ||
                mail_input.value.charAt(mail_input.value.length - 1) === '@') {
                error_msg.innerHTML = "Invalid email";
                mail_input.classList.add('error');
                mail_input.parentNode.appendChild(error_msg);
                add_error_class();
            }
        }
    }

});


