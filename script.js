// JavaScript for handling dynamic elements like date change, animation, etc.
document.addEventListener("DOMContentLoaded", function () {
  // Function to update the date in real-time
  function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const formattedDate = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    dateElement.textContent = formattedDate;
  }

  // Update the date immediately
  updateDate();
  // Set an interval to update the date every minute
  setInterval(updateDate, 60000);
});
