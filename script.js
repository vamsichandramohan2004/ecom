document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById('submit');
    const email = document.getElementById('InputEmail');
    const pass = document.getElementById('InputPassword');
    const msg = document.getElementById('msg');

    if (email && pass) {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (email.value.trim() === '' || pass.value.trim() === '') {
                alert('Please fill in all the details');
                email.value = '';
                pass.value = '';
                msg.value = '';
            } else {
                alert('Your message is successfully submitted');
            }
        });
    } else {
        alert('Form fields are not found');
    }
    document.getElementById('v1').addEventListener('click', () =>{
        alert('coming soon');
    });
    document.getElementById('v2').addEventListener('click', () =>{
        alert('coming soon');
    });
    document.getElementById('v3').addEventListener('click', () =>{
        alert('coming soon');
    });
});
