// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behaviour: 'smooth',
            block: 'start'
        });
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // A validation feedback message
    alert('Thank you for your submission, ${name}! We will get back to you at ${email} regarding your message soon.');

    // Reset form
    event.target.reset();
}
