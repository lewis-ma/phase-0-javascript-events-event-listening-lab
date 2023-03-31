const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

function changeText() {
  paragraph.textContent = 'New text!';
}

button.addEventListener('click', changeText);