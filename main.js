const mandatory_all = document.querySelectorAll('.mandatory');
const mandatory_all_inputs = document.querySelectorAll('.mandatory input, .mandatory select');
const mail_input = document.querySelector('.mandatory > input[name="email"]');
const password = document.querySelector('.mandatory > input[name="password"]');
const confirm_password = document.querySelector('.mandatory > input[name="confirm-password"]');
const form = document.querySelector('.j-form');
const radio_all = document.querySelectorAll('.mandatory [name="pref"]');
const cloth_size = document.querySelector('.mandatory > [name="cloth"] > option[value="0"]');
const agb = document.querySelector('.mandatory input[name="agb"]');
const success = document.querySelector('.success');
console.log(success);

let input = null;
let error_msg = null;



const add_error_input = function (error_class, error_txt, input_field) {
    error_class = document.createElement('p');
    error_class.classList.add('error-msg');
    error_class.innerHTML = error_txt;
    input_field.classList.add('error');
    input_field.parentNode.appendChild(error_class);
}

form.addEventListener('submit', e => {

    for (input of mandatory_all_inputs) {
        input.classList.remove('error');

        if (input.parentNode.querySelector('p')) { //removes all p tags, so it can added again
            input.parentNode.querySelector('p').remove();
        };
        if (input.tagName === "INPUT" && (input.getAttribute('type') === 'text') ||
            input.getAttribute('type') === 'email' ||
            input.getAttribute('type') === 'password') {
            if (input.value.trim() === '') {
                add_error_input(error_msg, "Not allowed to be empty", input);
            };
        };
    };

    let i; //test to see if an email starts or ends with an '@' sign
    for (i = 0; i < mail_input.value.length; i++) {
        if (mail_input) {
            if (mail_input.value.charAt(0) === '@' ||
                mail_input.value.charAt(mail_input.value.length - 1) === '@') {
                add_error_input(error_msg, "Invalid email", mail_input);
                break;
            };
        };
    };

    if (password.value !== confirm_password.value) {
        add_error_input(error_msg, '', password);
        add_error_input(error_msg, "Password don't match", confirm_password);
    };

    //Checks if radio button is selected
    let is_checked = false;
    for (const pref of radio_all) {
        if (pref.checked) {
            is_checked = true;
            break;
        };
    };

    if (is_checked === false) {
        add_error_input(error_msg, "Please check one of the following options", radio_all[radio_all.length - 1]);
    };

    //Checks if a size is selected
    if (cloth_size.selected) {
        add_error_input(error_msg, "Please select a size", cloth_size.parentNode);
    }

    if (!agb.checked) {
        add_error_input(error_msg, "Please check the terms and condition", agb);
    }

    let contains_error = false;

    for (input of mandatory_all_inputs) {
        if (input.classList.contains('error')) {
            contains_error = true;
            break;
        };
    };
    
    if (contains_error === true) {
        success.style.display = 'none';
        e.preventDefault()
    } else {
        success.style.display = 'block';
        e.preventDefault();
    }

});
