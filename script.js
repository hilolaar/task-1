/************ 1-способ: использование атрибута html ***********
const showMessage = () => {
    alert('hello');
}*/

/***************** 2 - способ: Использование свойства DOM - обьекта *********************/
/*const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn1.onclick = () => {
    alert('Вы кликнули по первой кнопке ');
}

btn2.onclick = () => {
    alert('Вы кликнули по второй кнопке');
}

btn3.onclick = () => {
    alert('Вы кликнули по третьей кнопке');
}*/
///************** 3 способ: AddEventListener **********************/
/*
btn1.addEventListener('click', ()=>{
    alert('AddEventListener');
})
btn2.addEventListener('click', ()=>{
    alert('AddEventListener 2');
})
btn3.addEventListener('click', ()=>{
    alert('AddEventListener 3');
})*/






let i = 0;


btnPositive.addEventListener('click' , ()=>{
    i++;
})

btnNegative.addEventListener('click' , ()=>{
    i--;
})

btnResult.addEventListener('click' , ()=>{
    alert(i);
})
