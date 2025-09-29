document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
    
    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Phone validation
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone.value)) {
        phoneError.textContent = 'Please enter a valid 11-digit phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    
    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        isValid = false;
    } else {
        messageError.textContent = '';
    }
    
    if (isValid) {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    }
});