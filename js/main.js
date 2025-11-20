// Cookie Banner
document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.querySelector('.cookie-banner');
  const acceptButton = document.querySelector('.accept-button');
  
  // Check if cookie consent was already given
  if (!localStorage.getItem('cookieConsent')) {
    // Show banner after a short delay for better UX
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 500);
  }
  
  if (acceptButton) {
    acceptButton.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'true');
      cookieBanner.classList.remove('show');
    });
  }
  
  // Contact Form Handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.style.cssText = 'background: #d4edda; color: #155724; border: 2px solid #c3e6cb; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; font-weight: 600; text-align: center;';
      successMessage.innerHTML = '✅ Thank you! Your message has been received. We\'ll get back to you within 24-48 hours.';
      
      // Insert success message
      contactForm.insertAdjacentElement('afterend', successMessage);
      
      // Reset form
      contactForm.reset();
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
      
      // Log form data (in production, this would be sent to a server)
      console.log('Contact Form Submission:', formData);
    });
  }
});
