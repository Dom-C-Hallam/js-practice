// Creates a variable named hrs and linked it to the element with an ID of hrs.
let hrs = document.getElementById("hrs"); 
// Creates a variable named mins and linked it to the element with an ID of mins.
let mins = document.getElementById("mins");
// Creates a variable named secs and linked it to the element with an ID of secs.
let secs = document.getElementById("secs");

// This changes the clock hours from 0 to the current time of the users time zone.
setInterval(() => {
    let currentTime = new Date();
    // If the hour, minute or second is less than ten a 0 will appear infront to ensure there are always two numbers displayed.
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)


