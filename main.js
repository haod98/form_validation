const mandatory_all_inputs = document.querySelectorAll('.mandatory input');
const form = document.querySelector('.j-form');




form.addEventListener('submit', e => {
    e.preventDefault();
    for (const input of mandatory_all_inputs) {
        const error_msg = document.createElement('p');
        if (input.tagName === "INPUT" && (input.getAttribute('type') === 'text') ||
            input.getAttribute('type') === 'email' ||
            input.getAttribute('type') === 'password') {
            if (input.parentNode.querySelector('p')) { //removes all p tags, so it can added again
                input.parentNode.querySelector('p').remove();
            }

            if (input.value.trim() === '') {
                input.classList.add('error');
                error_msg.innerHTML = "It's not allowed to be empty";
                error_msg.classList.add('error-msg');
                input.parentNode.appendChild(error_msg);
            } else {
                input.classList.remove('error');
            }
        }
    }
})

