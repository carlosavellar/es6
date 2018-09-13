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


//  [ + ] [ + ] [ + ] [ + ] Section 07 - 109 - Destructuring Array
// const [ myname, myage] = ['josé Carlos Destr', 12];
// console.log(myname);



//  [ + ] [ + ] [ + ] [ + ] Section 07 - 109 - Destructuring Obj
// const belonging={
//     house: 'Michigan',
//     car: 'Bentley'
// };
// const { house, car } = belonging;
// console.log(house +  '  ' + car );



//  [ + ] [ + ] [ + ] [ + ] Section 07 - 109 - Destructuring function
// function myAgeandretirement(years){
//     let now = new Date().getFullYear();
//     let age = now - years;
//     return [age, 90 - age ]; 
// }
// const [ age, retirement ] = myAgeandretirement(1978);

// console.log(`My age is ${age} and i have ${retirement} years to retire.`);



//  [ + ] [ + ] [ + ] [ + ] Node list to array
// es5

let buttons =  document.querySelectorAll('.btn');

let buttonsArr = Array.prototype.slice.call(buttons);
console.log(buttonsArr);
buttonsArr.forEach(curr=>{
    curr.style.background = 'blue';
});