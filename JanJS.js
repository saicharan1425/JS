// library =[
//     {
//         title: 'ikigai',
//         author: 'hector',
//         status: {
//             own: true,
//             read: false,
//             reading: false,
//         }
// },
// {
//     title: 'Atomic habits',
//     author: 'james',
//     status: {
//         own: true,
//         read: false,
//         reading: false,
//     }
// },
// {
//     title: '5 am club',
//     author: 'robin sharma',
//     status: {
//         own: true,
//         read: false,
//         reading: false,
//     }
// }
// ]


// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// const {title : firstBook} = library[0]

// const str = JSON.stringify(library);

// console.log(str);

// console.log(firstBook)

// console.log(library)

// function hello(){
//     console.log('hello world')
// }

// hello()

// function add(n1,n2){
//     console.log(n1+n2);
// }
// add(5,10);

// function sub(n1,n2){
//     return n1-n2
    
// }

// console.log(sub(21,1))

// //Default params
// function rUser(user = 'AI'){
//     return user + ' is registered'
// }
// console.log(rUser())

// //Rest Params
// function sum(...numbers){ 
//     let total = 0;
//     for(const num of numbers){
//         total += num;
//     }
// return total;
// }
// console.log(sum(1,2,3,4,5))

// //obj as Params
// function login(user){
//     return `the user ${user.name} with the id of ${user.id} is loggeed in`

// }

// const user = {
//     id: 1,
//     name : 'sai',
// };

// console.log(login(user));
// console.log(login({
//     id: 1,
//     name : 'sai',
// }));

// //Arrays as Params
// function getRandom(arr){
// const randomIndex = Math.floor(Math.random() * arr.length);
// const item = arr[randomIndex];
// console.log(item)
// }
// getRandom([1,2,3,4,5,6,7,8,9,10,0]);

// Scope
//Arrow functions
//IIFE
//function challenge

// function getCelsius(num){
// return (num-32)*5/9
// };
// console.log(`the temperature is ${getCelsius(89.6)}\xB0C`) // ans 32oC

// function minMax (num){
 
// const min = Math.min(...num)
// const max = Math.max(...num)

// // return console.log(`min:${min} max:${max}`)
// return { min, max };
// }    
// console.log(minMax([1,2,3,4,5,6])) 

// function calculator(a,b,op){
//     if (op == '+'){
//         return a + b
//     } else if (op == '-'){
//         return a-b
//     }else if (op == '*'){
//         return a*b
//     }else if (op=='/'){
//         return a/b
//     }
//     else {
//         return 'Error'
//     }
// }

// console.log(calculator(5,2,'+'));
// console.log(calculator(5,2,'-'));
// console.log(calculator(5,2,'*'));
// console.log(calculator(5,2,'/'));
// console.log(calculator(5,2,'&'));

// function calculator1(x,y,math){
//     let output;

//     switch (math){
//         case'+':
//         math = x+y
//         break;
//         case'-':
//         math = x - y
//         break;
//         case'*':
//         math = x*y
//         break;
//         case'/':
//         math = x/y
//         break;
//         default:
//         math = 'Error'
//         break;
//     }
//     console.log(math);
//     return calculator1
// }

// calculator1(5,2,'+')
// calculator1(5,2,'-')
// calculator1(5,2,'*')
// calculator1(5,2,'/')
// calculator1(5,2,'&')

//for of loop

// const items = ['book', 'table', 'chair', 'kite'];

// for(let item of items){ //=>for(i=0; i< items.length; i++)
//     console.log(item);  //=> console.log(items[i]);
// }

// const coloArr = ['red','green', 'blue', 'yellow']

// for (const arr in coloArr){
//     console.log(coloArrc[arr])
// }

