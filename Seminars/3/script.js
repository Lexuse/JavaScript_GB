                            //task 1

//section 1
// let userName = String(prompt(`Ваше имя?`));
// let userSurName = String(prompt(`Ваша фамилия?`));
// let userAge = Number(prompt(`Ваш возраст?`));

// let res = helloUser();
// function helloUser() {
//   return `Привет ${userName} ${userSurName} с возрастом ${userAge}`;
// }
// alert(res);


//section 2
// let userValue = Number(prompt`введите число`);
// let squaring = () => userValue * userValue;
// alert(squaring());


//section 3
// let userValue = Number(prompt(`Введите число для проверки на отрицательность`));
// function isNegativ(params) {
//     if(params < 0 ? console.log(`--- число ${params} отрицательное`) : console.log(`+++ число ${params} положительное`));
// }
// isNegativ(userValue);


                            //task 2
//section 1
// let userValue1 = Number(prompt`введите первое число `);
// let userValue2 = Number(prompt`введите второе число `);
// let userValue3 = Number(prompt`введите третье число `);
// function sum(a, b, c)  {
//     console.log(a + b + c);
// }
// sum(userValue1, userValue2, userValue3);


//section 2
// function sum(a, b, c)  {
//     console.log(a + b + c);
// }
// sum(1, 2, 3);


//section 3
//func(2); = 4
//func(3);  = 9
//func();   = 25

// function func(num = 5) {
//     console.log(num * num);
//     }
// func();    



                            //task 3
//section 1
// //let userValue = Number(prompt`введите  число `);
// function sqareRootOf(params) {
//     return Math.sqrt(params);
// }
// //let res = Number(sqareRootOf(userValue));
// let res3 = Number(sqareRootOf(3));
// let res4 = Number(sqareRootOf(4));

// //alert(res);
// console.log(res3 + res4);


//section 2
// function minValue(a, b) {
//     let min = Number(0);
//     if(a < b ? min = a : min = b);
//     return min;
// }
// let res = Number(minValue(222, 52));
// console.log(res);



                            //task 4
// //section 1
// function dayOfWeek(params) {
//     let day;
//     switch(params){
//         case '1':
//         day = 'Понедельник'
//         break;
//         case '2':
//         day = 'Вторник'
//         break;
//         case '3':
//         day = 'Среда'
//         break;
//         case '4':
//         day = 'Четверг'
//         break;
//         case '5':
//         day = 'Пятница'
//         break;
//         case '6':
//         day = 'Суббота'
//         break;
//         case '7':
//         day = 'Воскресенье'
//         break;
//         default:
//             day = 'Такого дня недели не существеут!'
//     }
//     return day;
// }
// let userInput = (prompt(`введите день недели `));
// alert(dayOfWeek(userInput));




//section 2
const userName = String(prompt('Введите ваше имя'));

//document.write(Hour);

function greatsTimeOfDay(params) {
    Data = new Date();
    Hour = Data.getHours();
    let timeOfDay;
    if(5 >= Hour <= 11){
        timeOfDay = `Доброе утро!`
    }else if(11 > Hour <= 16){
        timeOfDay = `Добрый день!`
    }else if ( 16 > Hour < 24 ? timeOfDay = `Добрый вечер!` : timeOfDay = `Доброй ночи!`);
    return `${timeOfDay} ${userName}`;
}

alert(greatsTimeOfDay());