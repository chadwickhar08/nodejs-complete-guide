const person = {

    name: "Max",
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }

};

person.greet();

const hobbies = ['Sports', 'Cooking'];

for(let hobby of hobbies){

    console.log(hobby);

}

const printName = ({name}) => {

    console.log(name);

};

printName(person);

const {name, age} = person;
console.log(name, age);

// const copiedPerson = {...person};

// console.log(copiedPerson);

// const toArray = (...args) => {

//     return args;

// };

// console.log(toArray(1,2,3,4));

// // console.log(hobbies.map(hobby=>{
// //     return 'Hobby: ' + hobby;
// // }));

// // console.log(hobbies);

// // hobbies.push("Programming");
// // console.log(hobbies);
// const copiedArray = [...hobbies]
// console.log(copiedArray);