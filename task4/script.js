const userText = prompt('Переход на какой сайт вы хотите осуществить?');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст ссылки изменен на', userText);

document.querySelector('a').addEventListener('click', function (event) {
event.preventDefault()
})