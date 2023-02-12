const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
 alert('Предназначена для вывода информации в консоль')
})

const addalert = document.querySelector('#alert');

addalert.addEventListener('click', () => {
 alert('Выводит в браузер предупреждающее модальное окно с информацией и кнопкой "ОК"')
})

const addprompt = document.querySelector('#prompt');

addprompt.addEventListener('click', () => {
 prompt('Выводит диалоговое окно с сообщением, полем для ввода данных и кнопками "ОК" и "Отмена"')
})