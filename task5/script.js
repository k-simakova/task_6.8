let inputForm = document.querySelector('input');
let dublField = document.querySelector('#duplicateField')

inputForm.addEventListener('input',() => {
    duplicateField.textContent = inputForm.value; 
})

let button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(duplicateField.textContent);
    duplicateField.textContent = "";
    inputForm.value = "";
})
