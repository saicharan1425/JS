//SETTIMEOUT & CLEARTIMEOUT

// setTimeout( changeText, 2000);


// function changeText(){
//     document.querySelector('h1').textContent = 'Helloo from callback'
// }

// const timerId = setTimeout(changeText, 3000);

// document.querySelector('#cancel').addEventListener('click', ()=>{
//     console.log(timerId);
//     clearTimeout(timerId);
//     console.log('timer cancelled');
// })

//SETINTERVAL & CLEARINTERVAL

// document.querySelector('h1').textContent = 'setInterval & clearInterval'

// const intervalId = setInterval(mycallback, 1000, 'hello')

// function mycallback(a){
//     console.log(a, Date.now());
// }

// let intervalId;

// function startChange(){
//     if(!intervalId){
//         intervalId = setInterval(changeRandomColor, 500)
//     }
// }

// function changeColor(){
//     if(document.body.style.backgroundColor !== 'red'){
//         document.body.style.backgroundColor='red'
//         document.body.style.color = 'White'
//     }else{
//         document.body.style.backgroundColor='green'
//         document.body.style.color = 'red'
//     }
// }

// function changeRandomColor(){
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = `#${randomColor}`;
// }

// function  stopChange(){
//     clearInterval(intervalId)
// }
// document.getElementById('stop').addEventListener('click', stopChange)
// document.getElementById('start').addEventListener('click', startChange)

//CALLBACK

// document.querySelector('h1').textContent = 'callback'

// function toggle(e){
//     e.target.classList.toggle('danger')
// }

// document.querySelector('button').addEventListener('click', toggle);

// const posts = [
//     {title: 'post One', body:' this is post one'},
//     {title: 'post Two', body:' this is post two'}
// ]

// function createPost(post, cb){
//     setTimeout(()=>{
//         posts.push(post);
//         cb();
//     },2000);
// }

// function getPosts(){
//     setTimeout(()=> {
//         posts.forEach(function (post) {
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
//             document.querySelector('#posts').appendChild(div)
//         })
//     }, 1000);
// }

// createPost({title: 'Post Three', body:'This is post Three'}, getPosts)

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users');

// xhr.onreadystatechange = function (){
//     if(this.readyState === 4 && this.status ===200){
//         console.log(JSON.parse(this.responseText));

//         const data = JSON.parse(this.responseText)
        
//         data.forEach(users => {
//             const li =document.createElement('li');
//             li.innerHTML = `<strong>${users.login}</strong> - ${users.html_url}`
//             document.querySelector('#results').appendChild(li);
//         });


//     }
// }
// xhr.send();

// const Jokebtn = document.getElementById('joke-btn')

// const generateJoke=()=>{
// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

// xhr.onreadystatechange = function (){
//     if(this.readyState === 4){
//         if (this.status ===200){

//         const joke = document.getElementById('joke')
//         joke.innerHTML = JSON.parse(this.responseText).value
        
//     }else{
//         joke.innerHTML = `Something Went wrong - ${this.status}`
//     }}
// }
// xhr.send();
// }


// document.addEventListener('DOMContentLoaded',generateJoke )
// Jokebtn.addEventListener('click', generateJoke)

// Promises

// const promise = new Promise((resolve, reject)=> {
//     // console.log('Async task complete');
//     setTimeout( ()=> {
//         console.log('Async task complete');
//         resolve();
//         },1000)
        
// } )

// promise.then(()=> {
//     console.log('Promice consumed');
// })

// const getUser = new Promise((resolve, reject)=> {
    
//     setTimeout( ()=> {
//         let error = false;
//         if(!error){
//             resolve({name:'sai', age: 25});
//         }else{
//             reject('error : Something went wrong')
//         }
        
//         },1000)
// } )
// getUser
// .then((user)=> {
//     console.log(user);
// })
// .catch((user) => {
//     console.log(user);
// })

// console.log('GLobal object');



// const posts = [
//     {title: 'post One', body:' this is post one'},
//     {title: 'post Two', body:' this is post two'}
// ]

// function createPost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let error = false
//             if(!error){
//             posts.push(post);
//             resolve()
//             }else{
//                 reject('something went wrong')
//             }
//         },1000);
//     })
   
// }

// function getPosts(){
//     setTimeout(()=> {
//         posts.forEach(function (post) {
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
//             document.getElementById('posts').appendChild(div)
//         })
//     }, 1000);
// }
// function showError(error){
//     const h3 = document.createElement('h3');
//     h3.innerHTML = `${error}`
//     document.querySelector('#posts').appendChild(h3)
// }

// createPost({title: 'Post Three', body:'This is post Three'})
// .then(getPosts)
// .catch(showError)

// const posts = [
//         {title: 'post One', body:' this is post one'},
//         {title: 'post Two', body:' this is post two'}
//     ]
// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let error = false
//             if(!error){posts.push(post)
//                 resolve()} 
//         else{reject("something's wrong")
//     }
//         },1000)
//     })
// }

// function getData(post){
   
//         posts.forEach(function (post) {
//         let div = document.createElement('div');
//         div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
//         document.getElementById('posts').appendChild(div)
//     })
   
// }
 
// createPost({title: 'post three', body:' this is post three'})

// .then(getData)



