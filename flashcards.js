// Function to add a new flashcard
function addFlashcard(event) {
    event.preventDefault();
  
    // Get form data
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
  
    // Create flashcard object
    const flashcard = { question, answer };
  
    // Add flashcard to local storage (dummy example)
    let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    flashcards.push(flashcard);
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  
    // Refresh flashcard list
    showFlashcards();
  }
  
  // Function to remove a flashcard
  function removeFlashcard(index) {
    // Remove flashcard from local storage (dummy example)
    let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    flashcards.splice(index, 1);
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  
    // Refresh flashcard list
    showFlashcards();
  }
  
  // Function to display flashcards
  function showFlashcards() {
    const flashcardList = document.getElementById('flashcardList');
    flashcardList.innerHTML = '';
  
    // Retrieve flashcards from local storage (dummy example)
    let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
  
    // Display each flashcard
    flashcards.forEach((flashcard, index) => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('flashcard');
  
      const questionPara = document.createElement('p');
      questionPara.textContent = `Question: ${flashcard.question}`;
  
      const answerPara = document.createElement('p');
      answerPara.textContent = `Answer: ${flashcard.answer}`;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => removeFlashcard(index));
  
      cardDiv.appendChild(questionPara);
      cardDiv.appendChild(answerPara);
      cardDiv.appendChild(removeButton);
  
      flashcardList.appendChild(cardDiv);
    });
  }
  
  // Add event listener for flashcard form submission
  const flashcardForm = document.getElementById('flashcardForm');
  flashcardForm.addEventListener('submit', addFlashcard);
  
  // Show flashcards when the page loads
  document.addEventListener('DOMContentLoaded', showFlashcards);
  