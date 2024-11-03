document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const submitButton = document.getElementById('submitButton');

    // Show loading spinner
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Hang tight...';
    submitButton.disabled = true;

    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            setTimeout(() => {
                submitButton.classList.add('transition');
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="bi bi-check-circle"></i>'; // Change button content to checkmark icon
                    submitButton.classList.remove('transition');
                    submitButton.disabled = false;
                }, 500); // Match the duration of the CSS transition
            }, 500); // Simulate loading time
        } else {
            alert('Submission failed. Please try again.');
            submitButton.innerHTML = "I'm in!";
            submitButton.disabled = false;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        submitButton.innerHTML = "I'm in!";
        submitButton.disabled = false;
    });
});