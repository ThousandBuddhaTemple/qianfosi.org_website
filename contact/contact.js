document.addEventListener("DOMContentLoaded", function () {
  // Contact form submission logic
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    // Initialize EmailJS with your Public Key
    emailjs.init('YOUR_PUBLIC_KEY'); // <-- REPLACE WITH YOUR PUBLIC KEY

    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const status = document.getElementById('form-status');
      status.textContent = '正在發送...';
      status.style.color = 'black';

      // These IDs from the previous steps
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) // <-- REPLACE IDS
        .then(function() {
          status.textContent = '留言發送成功!';
          status.style.color = 'green';
          contactForm.reset();
        }, function(error) {
          status.textContent = '發送失敗，請重試。';
          status.style.color = 'red';
        });
    });
  }
});