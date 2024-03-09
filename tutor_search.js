// Function to handle tutor search form submission
function searchTutors(event) {
    event.preventDefault();
  
    // Get form data
    const language = document.getElementById('language').value;
    const experience = document.getElementById('experience').value;
    const pricing = document.getElementById('pricing').value;
  
    // Perform tutor search (dummy example)
    // Replace this with your actual tutor search logic
    console.log('Searching for tutors...');
    console.log('Language:', language);
    console.log('Experience:', experience);
    console.log('Pricing:', pricing);
  
    // Dummy example: Display search results
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = `<p>Search Results:</p>
      <ul>
        <li>Tutor 1</li>
        <li>Tutor 2</li>
        <li>Tutor 3</li>
      </ul>`;
  }
  
  // Add event listener for tutor search form submission
  const tutorSearchForm = document.getElementById('tutorSearchForm');
  tutorSearchForm.addEventListener('submit', searchTutors);
  