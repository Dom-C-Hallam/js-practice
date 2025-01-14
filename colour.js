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

const btnwrapper = document.querySelector(".btnwrapper");
const button = document.querySelector('button');

button.addEventListener('click', function() {
    const random = Math.floor(Math.random() * colour.length)
    btnwrapper.style.backgroundColor = colour[random]
})

