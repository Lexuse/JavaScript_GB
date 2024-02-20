
                            //task 1
// for (let i = 0; i <= 10; i++) {
//     if(i == 0){
//         console.log(`${i} - это ноль`);
//     } else if( i % 2 === 0){
//         console.log(`${i} - четное число`);
//     } else{
//         console.log(`${i} - нечетное число`);
//     }    
// }



                            //task 2
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.reverse());



                            //task 3
// const arr = [];

// // Генерируем массив из 5 случайных цифр от 0 до 9
// for (let i = 0; i < 5; i++) {
//     arr.push(Math.floor(Math.random() * 10));
// }

// console.log("Сгенерированный массив:", arr);

// // 1. Рассчитываем сумму элементов массива
// const sum = arr.reduce((acc, num) => acc + num, 0);
// console.log("Сумма элементов массива:", sum);

// // 2. Находим минимальное число в массиве
// const minNumber = Math.min(...arr);
// console.log("Минимальное число в массиве:", minNumber);

// // 3. Проверяем, есть ли число 3 в массиве
// const hasNumber3 = arr.includes(3);
// console.log("Есть ли число 3 в массиве:", hasNumber3);


                            //task 4
 for (let i = 1; i <= 20; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += 'x';
    }
    console.log(row);
}                           