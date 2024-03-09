// Function to handle sign in form submission
function signIn(event) {
    event.preventDefault();
    
    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const user = document.getElementById('userType').value;
  
    // Perform authentication (dummy example)
    // Replace this with your actual authentication logic
    if (email === 'tutor@example.com' && password === 'password') {
      alert('Sign in successful!');
      // Redirect user to dashboard or desired page
      window.location.href = 'dashboard_tutor.html';
      
    } 
    else if (email === 'student@example.com' && password === 'password'){
        alert('Sign in successful!');
      window.location.href = 'dashboard_student.html';
        
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
  
  // Add event listener for sign in form submission
  const signInForm = document.getElementById('signInForm');
  signInForm.addEventListener('submit', signIn);
  