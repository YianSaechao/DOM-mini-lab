
const h1Element = document.getElementById('myHeading');
h1Element.textContent = "H1 Super Updated Heading";

const myButton = document.getElementById('button');
myButton.addEventListener('click', ()=>{
    h1Element.style.display = "none";
})

const myButton2 = document.getElementById('button2');
myButton2.addEventListener('click', ()=>{
    h1Element.style.display = "block";
})