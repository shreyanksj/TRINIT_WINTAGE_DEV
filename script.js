// JavaScript code for LinguaConnect application

// Function to display a greeting message based on the time of day
function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
  
    if (hour < 12) {
      greeting = 'Good morning';
    } else if (hour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
  
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = greeting;
  }
  
  // Function to toggle the visibility of a mobile navigation menu
  function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
  }
  
  // Add event listener for window load to display greeting message
  window.addEventListener('load', displayGreeting);
  
  // Add event listener for mobile menu button click to toggle mobile navigation
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  