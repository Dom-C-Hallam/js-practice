//This creates a variable named "count" and selects the number "0" in index.html using the id "count".
const count = document.querySelector('#count');
//This creates a variable named "sub" and selects the subtract button with the id of "count" in index.html.
const sub = document.querySelector('#sub');
//This creates a variable named "add" and selects the add button in index.html with the id of "add".
const add = document.querySelector('#add');
//This creates a variable named "reset" and selects the rest button in index.html with the id of "reset".

//This creates a changeable variable named counter and sets its default value as 0.
let counter = 0;

//This adds an event when the user clicks the subtract button. It tells the button to minus from the value shown,
//it sets the 0 in index.html to the above value of counter, this is repeated throughout the other two bits of code below.
sub.addEventListener('click', () => {
    counter--;
    count.innerHTML = counter;
})

add.addEventListener('click', () => {
    counter++;
    count.innerHTML = counter;
})

reset.addEventListener('click', () => {
    counter = 0;
    count.innerHTML = counter;
})