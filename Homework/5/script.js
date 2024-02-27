                                        // task 1

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
//   };
  
//   for (const key in numbers) {
//     if (numbers[key] >= 3) {
//       console.log(numbers[key]);
//     }
//   }




                                        // task 2

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//       {
//         userId: 10,
//         userName: "Alex",
//         text: "lorem ipsum",
//         rating: {
//           likes: 10,
//           dislikes: 2, // вывести это число
//         },
//       },
//       {
//         userId: 5, // вывести это число
//         userName: "Jane",
//         text: "lorem ipsum 2", // вывести этот текст
//         rating: {
//           likes: 3,
//           dislikes: 1,
//         },
//       },
//     ],
//   };
  
//   // Вывод значений в консоль
//   console.log(post.author); // Вывести имя автора
//   console.log(post.comments[0].rating.dislikes); // Вывести количество dislikes первого комментария
//   console.log(post.comments[1].userId); // Вывести userId второго комментария
//   console.log(post.comments[1].text); // Вывести текст второго комментария




                                        // task 3
// const products = [
//   {
//     id: 3,
//     price: 200,
//   },
//   {
//     id: 4,
//     price: 900,
//   },
//   {
//     id: 1,
//     price: 1000,
//   },
// ];

// // Уменьшение цены каждого продукта на 15%
// products.forEach(product => {
//   product.price = product.price * 0.85; // Уменьшение на 15%
// });

// // Вывод измененного массива в консоль
// console.log(products);




                                        // task 4
//section 1
// const products = [
//     {
//       id: 3,
//       price: 127,
//       photos: [
//         "1.jpg",
//         "2.jpg",
//       ],
//     },
//     {
//       id: 5,
//       price: 499,
//       photos: [],
//     },
//     {
//       id: 10,
//       price: 26,
//       photos: [
//         "3.jpg",
//       ],
//     },
//     {
//       id: 8,
//       price: 78,
//     },
//   ];
  
//   // Фильтрация по наличию хотя бы одной фотографии
//   const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
  
//   // Вывод отфильтрованного массива в консоль
//   console.log(productsWithPhotos);

  //section 2
//   const products = [
//     {
//       id: 3,
//       price: 127,
//       photos: [
//         "1.jpg",
//         "2.jpg",
//       ],
//     },
//     {
//       id: 5,
//       price: 499,
//       photos: [],
//     },
//     {
//       id: 10,
//       price: 26,
//       photos: [
//         "3.jpg",
//       ],
//     },
//     {
//       id: 8,
//       price: 78,
//     },
//   ];
  
//   // Сортировка по цене от меньшей к большей
//   const sortedProducts = products.sort((a, b) => a.price - b.price);
  
//   // Вывод отсортированного массива в консоль
//   console.log(sortedProducts);




                                        // task 4
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const mergedObject = en.reduce((result, key, index) => {
  result[key] = ru[index];
  return result;
}, {});

console.log(mergedObject);