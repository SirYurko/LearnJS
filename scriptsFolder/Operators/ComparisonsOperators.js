// 27.11.2024
// 5 > 4 true
// "ананас" > "яблуко" false
// "2" > "12" false          // true У JavaScript порівняння рядків базується на лексикографічному порядку (як у словнику),
                                //    а не на числовому значенні. Тому "2" > "12" повертає true, бо '2' має більший Unicode-код, ніж '1'.
// undefined == null  true 
// undefined === null false
// null == "\n0\n" false
// null === +"\n0\n" false
// ------------------------------------------------

// function compareValues(a, b) {
//    if(a > b){
//     return true;
//    }else return false;
   
// }

// console.log(compareValues(null, undefined))

// ------------------------------------------------

// function checkValue(x){

// if(x === null || x === undefined ){
//    console.log( "Помилка: значення не визначено.")
// }else if(x > 10) {
//    console.log("Значення більше 10.");
// }else{
//    console.log("Значення менше 10.");
// }
// }
// checkValue(12);

// ----------------------------------------------------------------------

// Завдання 1: Вік користувача
// Напиши програму, яка перевіряє, чи дозволено користувачу вхід на сайт:

// Якщо вік менше 18, виведи: "Доступ заборонено".
// Якщо вік від 18 до 65 включно, виведи: "Ласкаво просимо".
// Якщо вік більше 65, виведи: "Спеціальні умови для старших користувачів".


let age = prompt("Введіть ваш вік");
age = Number(age);
let message = (age >= 18 && age < 65) ? "Ласкаво просимо" : 
   (age < 18) ? "Доступ заборонено":
   (age >= 65) ? "Спеціальні умови для старших користувачів":
   "Некоректне значення";
   
alert(message)   
console.log(age)

// -----------------------------------------------------------------------