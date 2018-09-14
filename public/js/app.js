// let result = document.querySelector('.result');
// let strMethods = document.querySelector(".strings2");
// const thisWord = document.querySelector(".thisWord");
// const array1 = document.querySelector(".array1");
// let fisrtname = "Carlos";
// let lastname = "Marx";
// const yearOfBirth = 1978;

//  [ + ] [ + ] [ + ] [ + ] Template strings
// function calcAge(year) {
//     return 2016 - year;
// }
// result.innerHTML = `${calcAge(yearOfBirth)}`;

// // String methods

// const n = `${fisrtname} ${lastname}`;
// strMethods.innerHTML = n.startsWith('we');
// strMethods.innerHTML += n.endsWith('Car');
// strMethods.innerHTML += n.includes('a');


//  [ + ] [ + ] [ + ] [ + ] 
// This word
const box = {
    color: 'red',
    color2: 'blue',
    clickMe: () => {
        // document.querySelector(".btn-danger").addEventListener('click', () => {
        //     // thisWord.innerHTML = ''`${this.color} and ${this.color2}`'';
        //     thisWord.innerHTML = this.color; //doesn't show show the box.color property bucouse This inside aroorw functions point to the Global obs
        // });
    }
};
box.clickMe();


//  [ + ] [ + ] [ + ] [ + ]  Array exemple
class Person {
    constructor(name) {
        this.name = name;
    }
}


// $$$$$$$$$$$$$$$$$$$$$$$$ Section 07 - 109 - Destructuring Array
// const [ myname, myage] = ['josé Carlos Destr', 12];
// console.log(myname);



// $$$$$$$$$$$$$$$$$$$$$$$$ Section 07 - 109 - Destructuring Obj
// const belonging={
//     house: 'Michigan',
//     car: 'Bentley'
// };
// const { house, car } = belonging;
// console.log(house +  '  ' + car );



// $$$$$$$$$$$$$$$$$$$$$$$$ Section 07 - 109 - Destructuring function
// function myAgeandretirement(years){
//     let now = new Date().getFullYear();
//     let age = now - years;
//     return [age, 90 - age ]; 
// }
// const [ age, retirement ] = myAgeandretirement(1978);

// console.log(`My age is ${age} and i have ${retirement} years to retire.`);


// $$$$$$$$$$$$$$$$$$$$$$$$ - Node List to array ES5
// const lines = document.querySelectorAll('.p-3');
// const linesArr = Array.prototype.slice.call(lines);
// console.log(linesArr);
// linesArr.forEach(curr=>{
//     curr.style.backgroundColor = 'red';
// });


// $$$$$$$$$$$$$$$$$$$$$$$$ - Node List to array ES6
// const lines = document.querySelectorAll('.p-3');
// Array.from(lines).forEach(curr=>{
//     curr.style.backgroundColor = 'blue';
//     curr.style.color = 'white';
// });


// $$$$$$$$$$$$$$$$$$$$$$$$ - Node List to array ES5 - Continue Break
// const lines = document.querySelectorAll('.p-3');
// const linesArr = Array.prototype.slice.call(lines);
// for(let i=0;i<linesArr.length;i++){
//     if(linesArr[i].className === 'blue-blox'){
//         linesArr[i].style.backgroundColor = 'red';
//         break;
//     }
//     linesArr[i].style.backgroundColor = 'red';
//     linesArr[i].textContent = 'Celtas';
// }


// $$$$$$$$$$$$$$$$$$$$$$$$ - Node List to array ES6 - Continue Break
// const lines = document.querySelectorAll('.p-3');
// const linesArr = Array.from(lines);
// for(const curr of linesArr){
//     if(curr[i].className === 'blue-blox'){
//         linesArr[i].textContent = 'Celtas';
//         break;
//     }
//     linesArr[i].style.backgroundColor = 'red';
//     linesArr[i].textContent = 'Celtas';
// }



// $$$$$$$$$$$$$$$$$$$$$$$$
// Array ES5 - Cheking one element of the Array
// const ages = [ 22, 16, 12, 17, 9, 10, 13 ];
// const fullAge = ages.map(curr=>{
//     console.log(curr >= 18);
// });
// console.log(ages[fullAge.indexOf(true)]);


// $$$$$$$$$$$$$$$$$$$$$$$$
// Array ES6 - Cheking one element of the Array
// const ages = [ 16, 12, 17, 9, 10, 22,  13 ];

// const fullAge = ages.map(curr => curr >= 18);
// console.log(fullAge);

// console.log(ages.find(curr => curr >= 18));

// console.log(ages.findIndex(curr => curr >= 18));


// $$$$$$$$$$$$$$$$$$$$$$$$ Passing a entire Array into a function
// es5 

// const numList = (a,b,c,d)=>{
//     return a+b+c+d;
// }
// console.log(numList(23,34,66,88));
// var numArr = [23,34,66,88];
// const sum2 = numList.apply(null, numArr);
// console.log(sum2);



// $$$$$$$$$$$$$$$$$$$$$$$$ Passing a entire Array into a function
// es6 - spread operator

// const someAges = (a,b,c, d)=>{
//     return a+b+c+d;
// };
// const ages = [12,45,67, 45];

// const sum3 = someAges(...ages);
// console.log(sum3);

const family1 = ['Sally','Mill','Kati','Carlos'];
const family2 = ['Michael','Sick','Ministroiter','Sula'];

const joinFamily = ['Jhon',...family2, ...family1];
console.log(joinFamily);