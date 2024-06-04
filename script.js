document.addEventListener("DOMContentLoaded", () => {
    
    function updateClock() {
        var date = new Date();

        // get day of the week, month & year in words
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var dayName = days[date.getDay()];
        var monthName = months[date.getMonth()];
        var dayNum = date.getDate();
        var year = date.getFullYear();

        // formatting time as hh:mm:ss
        var hours = date.getHours().toString().padStart(2, '0');
        var minutes = date.getMinutes().toString().padStart(2, '0');
        var seconds = date.getSeconds().toString().padStart(2, '0');
        var period = hours >= 12 ? "PM" : "AM";

        document.getElementById("dayName").textContent = dayName + ',';
        document.getElementById("month").textContent = monthName;
        document.getElementById("dayNum").textContent = dayNum + ",";
        document.getElementById("year").textContent = year;

        document.getElementById("hours").textContent = hours + ":";
        document.getElementById("minutes").textContent = minutes + ":";  
        document.getElementById("seconds").textContent = seconds + " ";
        document.getElementById("period").textContent = period;
    }

    setInterval(updateClock, 1000);
    updateClock();
});