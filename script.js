// JavaScript for form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display an alert with the form data
    alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);
  
    // Clear the form
    document.getElementById('contact-form').reset();