//This creates an array containing 8 colours. The array is called colour.
const colour = [
    "#e84118",
    "#c23616",
    "#f5f6fa",
    "#dcdde1",
    "#7f8fa6",
    "#718093",
    "#273c75",
    "#192a56",
]

//This creates a variable named "btnwrapper" and selects a <div> element with the class of "btnwrapper".
const btnwrapper = document.querySelector(".btnwrapper");
//This creates a variable named button. It selects the only <button> element on the website, in index.html.
const button = document.querySelector('button');

//This adds an event to the button element when clicked.
//The function inside tells the button to select one of the 8 arrays above at random, all of the arrays are used.
//The bottom line specifies that it is the background colour of the btnwrapper <div>. 
button.addEventListener('click', function() {
    const random = Math.floor(Math.random() * colour.length)
    btnwrapper.style.backgroundColor = colour[random]
})

