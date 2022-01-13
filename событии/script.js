/************ 1-способ: использование атрибута html ***********
 const showMessage = () => {
    alert('hello');
}*/

/***************** 2 - способ: Использование свойства DOM - обьекта *********************/
const btn1 = document.querySelector('#btn1');

btn1.onclick = () => {
    alert('Вы кликнули по первой кнопке ');
}


const btn2 = document.querySelector('#btn2');

btn2.onclick = () => {
    alert('Вы кликнули по второй кнопке');
}

const btn3 = document.querySelector('#btn3');

btn3.onclick = () => {
    alert('Вы кликнули по третьей кнопке');
}