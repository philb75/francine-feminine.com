/**
 * Francine Feminine - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero slider
    initSlider();
    
    // Initialize contact form
    initContactForm();
});

/**
 * Initialize the hero slider
 */
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // If there are no slides or dots, exit the function
    if (slides.length === 0 || dots.length === 0) {
        return;
    }
    
    // Function to change slide
    function goToSlide(slideIndex) {
        // If slide index is out of bounds, reset to 0
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
        
        // Update current slide index
        currentSlide = slideIndex;
    }
    
    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Auto-rotate slides every 5 seconds
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
}

/**
 * Initialize the contact form
 */
function initContactForm() {
    const contactForms = document.querySelectorAll('#contact-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const message = form.querySelector('#message').value;
            const subject = form.querySelector('#subject')?.value || 'Contact Form Submission';
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real implementation, we would send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset the form
            form.reset();
        });
    });
}
