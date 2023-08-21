// Function to navigate to the calculator page
function switchToCalculator() {
    window.location.href = 'calculator.html';
  }
  
  // Function to navigate to the calendar page
  function switchToCalendar() {
    window.location.href = 'calendar.html';
  }
  
  // Add event listeners to the buttons
  document.addEventListener('DOMContentLoaded', function () {
    var switchToCalculatorButton = document.getElementById('calculatorBtn');
    if (switchToCalculatorButton) {
      switchToCalculatorButton.addEventListener('click', switchToCalculator);
    }
  
    var switchToCalendarButton = document.getElementById('calendarBtn');
    if (switchToCalendarButton) {
      switchToCalendarButton.addEventListener('click', switchToCalendar);
    }
  });
  