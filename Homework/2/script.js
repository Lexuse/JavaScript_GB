// // Task 1
// let num1 = Number(prompt(`Введите первое число`));
// let num2 = Number(prompt(`Введите второе число`));

// if((num1 <= 1) && (num2 >= 3) ? alert('Условия задачи выполнены') : alert('Условия не выполнены'));


// // Task 2
// let test = true;
// if(test === true ? console.log('+++') : console.log('---'));


// // Task 3
// const messageBegin = 'Этот день принадлежит к '
// let messageEnd;
// let userDate = Number(prompt('Введите день месяца от 1 до 31'));
// if(!((userDate >= 1) && (userDate <= 31))){
//     alert('Вы ввели неправильные данные!')
// }

// if(userDate <= 10){
// messageEnd = 'первой декаде месяца'
// }else if( userDate <= 20 ? messageEnd = 'второй декаде месяца' : messageEnd = 'третьей декаде месяца');
// alert(messageBegin + messageEnd);


// Task 4
let userValue = String(prompt('Введите положительное целое число'));
let hundreds = Number(userValue [userValue.length -3]);
let dozens = Number(userValue [userValue.length -2]);
let ones = Number(userValue [userValue.length -1]);
alert(`В числе ${userValue} количество сотен: ${hundreds}, десятков ${dozens}, единиц ${ones}`);
