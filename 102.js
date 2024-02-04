console.log("Rohit");


//function declaration -> hoisting d
// function run(){
//     console.log("Running");
// }

// //function call or invoke
// run();



// Named function assignment  -> No hoisting

// let stand=function walk() {
//     console.log('walking');
// };

// stand();

//same as above -> Anonymous function assignment

// let stand=function () {
//     console.log('walking');
// };

// stand();

//same as above  ... this is an arrow function.

// let stand= ()=> {
//     console.log('walking');
// };

// stand();

// let jump=stand;

// jump();



// let x=1;
// x='a';
// console.log(x);


// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3));
// console.log(sum(2));
// console.log(sum());
// console.log(sum(1,2,3,4,5,6));

// function sum(a,b){
//     console.log(arguments);
//     let total=0;

//     for(let value of arguments)
//     total=total+value;
//     return total;
// }



// console.log(sum(1,2,3,4,5,6));


//Rest Operator

// function sum(num,value,...arg){
//     console.log(arg);
// }

// sum(2,3,4,6,7);

//events in js

// let myDiv=document.createElement('div');
// function paraStatus(){
//     console.log("para" + event.target.textContents);

// }
// myDiv.addEventListener('click',paraStatus);

// for(let i=0;i<100;i++){

//     let newElement=document.createElement('p');

//     newElement.textContent='This i para ' + i;
//   //  newElement.addEventListener('click',paraStatus);

//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);

// let element=document.querySelector('#wrapper');
// element.addEventListener('click',function(event){
//     console.log('span par click kiya ha',event.target.textContent);
// });

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("first timeout doune")},2000);
    resolve(5);
});
let output=p1.then(()=>{
    let p2=new Promise((reject,resolve)=>{
        setTimeout(() => {
            console.log("abcd");
            
        }, 3000);
        resolve("gandu rohit");
    })
    return p2;
});
output.then((value)=>{console.log(value);});

