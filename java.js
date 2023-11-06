const header = document.getElementById('Header');
const form = document.getElementById('Form');
const colorInput = document.getElementById('Input');

function changeTextColor(event) {
    event.preventDefault();
    const userColor = colorInput.value;
    header.style.color = userColor;
    colorInput.value = '';
}

form.addEventListener('submit', changeTextColor);