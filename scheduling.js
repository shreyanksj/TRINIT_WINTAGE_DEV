// Function to populate tutor options
function populateTutors() {
    // Dummy example: Fetch tutor data from backend
    const tutors = ['Tutor 1', 'Tutor 2', 'Tutor 3'];
  
    const tutorSelect = document.getElementById('tutor');
    tutors.forEach(tutor => {
      const option = document.createElement('option');
      option.value = tutor;
      option.textContent = tutor;
      tutorSelect.appendChild(option);
    });
  }
  
  // Function to populate time slot options
  function populateTimeSlots() {
    // Dummy example: Fetch available time slots from backend
    const timeSlots = ['10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM', '6:00 PM - 7:00 PM'];
  
    const timeSlotSelect = document.getElementById('timeSlot');
    timeSlots.forEach(timeSlot => {
      const option = document.createElement('option');
      option.value = timeSlot;
      option.textContent = timeSlot;
      timeSlotSelect.appendChild(option);
    });
  }
  
  // Function to handle scheduling form submission
  function scheduleLesson(event) {
    event.preventDefault();
  
    // Get form data
    const selectedTutor = document.getElementById('tutor').value;
    const selectedTimeSlot = document.getElementById('timeSlot').value;
    const selectedLessonLength = document.getElementById('lessonLength').value;
  
    // Perform scheduling (dummy example)
    console.log('Scheduling lesson...');
    console.log('Tutor:', selectedTutor);
    console.log('Time Slot:', selectedTimeSlot);
    console.log('Lesson Length:', selectedLessonLength);
  }
  
  // Add event listener for scheduling form submission
  const schedulingForm = document.getElementById('schedulingForm');
  schedulingForm.addEventListener('submit', scheduleLesson);
  
  // Populate tutor and time slot options when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    populateTutors();
    populateTimeSlots();
  });
  