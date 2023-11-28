document.addEventListener('DOMContentLoaded', function () {
    // Generate the calendar
    generateCalendar();
  
    // Add click event to days
    const calendarCells = document.querySelectorAll('#calendar tbody td');
    calendarCells.forEach(function(cell) {
      cell.addEventListener('click', function () {
        //Remove the 'selected' class to the clicked cell
        calendarCells.forEach(function(cell) {
            cell.classList.remove('selected')
        });

        // Add the 'selected' class to the clicked cell
        this.classList.add('selected');

        const selectedDate = this.dataset.date;
        openNotes(selectedDate);
      });
    });
  });
  
  function generateCalendar() {
    const calendarBody = document.querySelector('#calendar tbody');
    const daysInMonth = 30; // You can adjust this based on the actual month
  
    let dayCount = 1;
  
    for (let i = 0; i < 5; i++) {
      const row = document.createElement('tr');
  
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        if (dayCount <= daysInMonth) {
          cell.textContent = dayCount;
          cell.dataset.date = `${dayCount}-11-2023`; // Format: day-month-year
          dayCount++;
        }
        row.appendChild(cell);
      }
  
      calendarBody.appendChild(row);
    }
  }
  
  function openNotes(date) {
    const savedNotes = localStorage.getItem(date) || '';
    const notesTextarea = document.getElementById('notes');
  
    notesTextarea.value = savedNotes;
  }
  
  function saveNotes() {
    const notesTextarea = document.getElementById('notes');
    const selectedDate = document.querySelector('#calendar td.selected').dataset.date;
  
    localStorage.setItem(selectedDate, notesTextarea.value);
    alert('Notes saved!');
    resetNotes();
  }
  
  function resetNotes() {
    const notesTextarea = document.getElementById('notes');
    notesTextarea.value = '';
  }
  