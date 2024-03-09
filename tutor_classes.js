// Function to handle class setup form submission
function setUpClasses(event) {
    event.preventDefault();
  
    // Get form data
    const availability = document.getElementById('availability').value;
    const pricing = document.getElementById('pricing').value;
  
    // Send class setup data to backend (dummy example)
    console.log('Setting up classes...');
    console.log('Availability:', availability);
    console.log('Pricing:', pricing);
  
    // You can send this data to your backend API for processing and storage
    // Example: sendClassSetupDataToBackend(availability, pricing);
  }
  
  // Add event listener for class setup form submission
  const classSetupForm = document.getElementById('classSetupForm');
  classSetupForm.addEventListener('submit', setUpClasses);
  