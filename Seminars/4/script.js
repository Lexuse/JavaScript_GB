                        // task1
//section1
// const arr = [1,2,3];
// console.log(arr);


//section 2
// const arr = [1,2,3,4,5];
// console.log(arr.length);


//section 3
// const arr = ['a','b','c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);



                        // task2
//section 1
// const arr = [1,2,3];
// for (let i = 0; i < arr.length; i++) {
//     arr[i]++;    
// }
// console.log(arr);

//section 2
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

//section 3
// const arr = [1,2,3];
// arr.push(4,5);
// console.log(arr);

//section 4
// const arr = [4,2,4,6];
// arr.pop();
// arr.pop();
// console.log(arr.length);


                        // task3
//section 1
// for (let i = 11; i <=33; i++){
//     console.log(i);
// }

//section 2
// for (let i = 1; i <= 99; i++) {
//     if(i % 2 !== 0){
//         console.log(i);
//     }    
// }


//section 3
// for (let i = 100; i >= 0; i--) {
//     console.log(i);    
// }


//section 4
// let num = 5;
// let counter = 0;
// do {
//     num = num * 3;
//     counter ++;
// } while (num <= 1001);
// console.log(counter);



                        // task 4
// section 1
// const arr = [2,5,9,15,1,4];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 3 && arr[i] < 10) console.log(arr[i]);    
// }


//section 2
// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//     if( i % 2 == 0) sum += i;
// }
// console.log(sum);


//section 3
// let sum = 0;
// const arr = [2,5,9,3,1,4];
// for (let item of arr) {
//     sum += item;
// }
// console.log(sum);


//section 4
// let result = '-';
// for (let i = 1; i <= 9; i++) {
//     result += i + '-';
// }
// console.log(result);


//section 5
// const arr = [2,5,9,0,3,1,4];
// let indexArr = 0;

// while (arr[indexArr] != 0) {
//     console.log(arr[indexArr]);
//     indexArr ++;
// }


                        // task 5
//section 1
// const arr =[];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor ( Math.random() * 10);
// }
// console.log(arr);
// for (const item of arr) {
//     if(item % 2 === 0 && item != 0) {
//         console.log(Math.pow(item,2));
//     }
//     if(item % 3 === 0 && item != 0) {
//         console.log(Math.pow(item,3));
//     }
// }


//section 2
// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// for (const item of arr) {
//     if(item === 3)counter++
// }
// console.log(counter);


//section 3
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);