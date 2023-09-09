function displayDateTime() {
    const displayDay = document.getElementById("day");
    const displayTime = document.getElementById("time");

    function updateDateTime() {
      const currentDate = new Date();

      // Extract day of the week
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayOfWeek = daysOfWeek[currentDate.getDay()];

      // Format the time
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const timeString = `${hours}:${minutes}:${seconds}`;

      // Display day and time separately
      displayDay.innerHTML = dayOfWeek;
      displayTime.innerHTML = timeString;
    }

    // Update the date and time every second (1000 milliseconds)
    setInterval(updateDateTime, 1000);

    // Initial update
    updateDateTime();
  }