// const person ={
//     name: 'Arjoo',
//     age:22,
//     location:{
//         city:'Allahabad',
//         temp:38
//     }
// };
// const {name , age}=person;
// console.log(`my name is ${name} and age is ${age}`);
// const {city , temp : tempu}=person.location;
// console.log(`my city is ${city} and temp is ${tempu}`);

// //to assign default values if they doesnot exists
// //const {name:firstname='anonymous' , age}=person;
// //console.log(`my name is ${firstname} and age is ${age}`);

const address=['lig-2','knp','up','8027'];
const [street,city='default',state,pin]=address;
//const [,city,,pin]=address; only city and pin will exists
console.log(`i am in ${city} ${state}`);

// const add =({a,b},c) => {
//     return a+b+c;
// }

// console.log(add({a:1,b:12},100));