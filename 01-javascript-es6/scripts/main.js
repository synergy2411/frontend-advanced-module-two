// function Vehicle(lat, lng) {
//     this._lat = lat;
//     this.lng = lng;
// }

// Vehicle.prototype.getNorth = function () {
//     this.lng += 1
// }
// Vehicle.prototype.getSouth = function () {
//     this.lng -= 1
// }
// Vehicle.prototype.getEast = function () {
//     this._lat += 1
// }
// Vehicle.prototype.getNorth = function () {
//     this._lat -= 1
// }


// let direction = new Vehicle(10, 10);
// direction.getEast();

// console.log(direction._lat, direction.lng);




// class VehicleCl{
//     constructor(lat, lng){
//         this.lat = lat;
//         this.lng = lng;
//     }

//     goNorth(){
//         this.lat += 1
//     }
// }

// let direction = new VehicleCl(100, 100);
// direction.goNorth();


// class Account {
//     #movements = [];
//     constructor(owner) {
//         this.owner = owner;
//     }

//     get pin() {
//         return this._pin;
//     }

//     set pin(val) {
//         if (val.length === 4) {
//             this._pin = val
//         } else {
//             alert("Should be equal to 4")
//         }
//     }

//     depositAmount(val) {
//         this.#movements.push(val)
//     }

//     withdrawAmount(val) {
//         this.#movements.push(-val)
//     }
//     getDetail() {
//         return this.#movements.slice(0)
//     }

//     _approveLoan() {
//         return true;
//     }

//     requestLoan() {
//         if (this._approveLoan()) {
//             this.#movements.push(250000);
//         }
//     }

//     static accountDetails() {
//         console.log("Static Method")
//     }
// }


// class SavingAccount extends Account {
//     constructor(owner, isFixedDeposit) {
//         super(owner)
//         this.isFixedDeposit = isFixedDeposit;
//     }
// }

// let myAccount = new SavingAccount();
// myAccount.requestLoan()
// console.log("Load Requested : ", myAccount.getDetail());



// let john = new Account("John Doe", 111);
// john.depositAmount(100)
// john.withdrawAmount(300)
// john.depositAmount(240)
// john.withdrawAmount(240)
// john.depositAmount(120)
// john.withdrawAmount(350)
// john.depositAmount(500)
// console.log(john.getDetail());

// // john.pin = "111";
// john.pin = "1111";

// Account.accountDetails()

// // john._approveLoan()
// console.log(john.#movements)

// const allDiv = document.querySelectorAll()
// // allDiv.forEach()
// Array.from(allDiv).map



// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getdetails() {
//         return `Hello from ${this.name}, I'm ${this.age} years old`
//     }
// }


// class Student extends Human {
//     constructor(studName, studId, studAge, course, marks) {
//         super(studName, studAge)
//         this.studId = studId;
//         this.course = course;
//         this.marks = marks;
//     }

//     get studId() { }
//     set studId(val) {
//         // chance to validate student ID here
//     }

//     #calcGrade() {
//         return (this.marks * 900) / 1000
//     }

//     isFirstGrade() {
//         if (this.#calcGrade() > 90) {
//             return true
//         } else {
//             return false
//         }
//     }

//     // Overridding
//     getDetails() {

//     }
// }

// let foo = new Student("Foo", "F001", 32, "Java");
// console.log(foo.getdetails())


// Short Circuit Operators

// let val = 0 || '' || "Hello World" || null;
// let valTwo = 0 ?? '' ?? "Hello World" ?? null;
// let valThree = "" && 0 && "Hello World";

// console.log(val);
// console.log(valTwo);
// console.log(valThree);

// Nullish Coalescing Operator -> ??

// user.role === 'admin' ? "User is Admin" : "User is Naive";

// user.role = user.role === 'admin' && "User is Admin"
// user.role = user.role === 'naive' && "User is Naive"


// let user = {
//     mon: {
//         start: 2,
//         end: 3
//     },
//     wed: {
//         start: 3,
//         end: 4
//     },
//     fri: {
//         start: 5,
//         end: 6
//     }
// }


// // console.log(user.mon.start)
// if (user.session && user.session.tue) {
//     console.log(user.session.tue.start)
// }
// console.log(user.session?.tue?.start)













// Spread

// let numbers = [3, 4, 5];

// let newNumbers = [1, 2, ...numbers];

// console.log(newNumbers);            // [1,2,[3,4,5]]


// function add(a, b, c) {
//     return a + b + c;
// }


// console.log(add(...numbers))

// let userOne = {
//     email: "test@test.com"
// }
// let author = {
//     book: "Wakeup"
// }

// let userTwo = {
//     ...userOne,
//     ...author
// }

// let userThree = userOne;

// console.log(userTwo);
// console.log(userThree);





// REST

// function addition(a,b,c,...args ) {
//     console.log(args[0])            // ?
// }

// // addition(2, 4)
// // addition(2, 4, 4, 6, 7)
// addition(2, 4, 4, 6, 7, 42, 7, 2)






// let friends = ["foo", "bar", "bam", "baz"];

// let [f1, f2, ...myFriends] = friends;

// console.log(myFriends)




// DESTRUCTURING

// let fruits = ["apple", "orange", "guava", "kiwi"]

// let [f1, f2, f3, f4] = fruits;




// let users = [
//     { email: "test1@test.com", age: 32 },
//     { email: "test2@test.com", age: 34 },
//     { email: "test3@test.com", age: 36 },
//     { email: "test4@test.com", age: 38 },
// ]
// // Deep copy
// let [
//     { email: e1, age: a1 },
//     { email: e2, age: a2 },
//     { email: e3, age: a3 },
//     { email: e4, age: a4 }
// ] = users;

// // Shallow copy
// let [u1, u2, u3, u4] = users;

// u1.age = 40

// console.log(users);

// console.log(e1, e3, a2, a4);

// f3 = "banana"

// console.log(f3);
// console.log(fruits[2])          // ?


// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 32,
//     address: {
//         city: "Hyd",
//         street: "201 Main Road"
//     }
// }

// let { firstName, lastName, age, address: { city, street } } = user;

// console.log(firstName, age)

// city = "MUM";

// console.log(user.address)





// let a = 10;
// let b = 20;

// // a = a+b
// // b = a-b
// // a= a-b

// [b,a] = [a,b];



// let user = {
//     name: "Maria",
//     friends: [
//         { name: "john" },
//         { name: "jenny" },
//         { name: "james" },
//     ]
// }

// let {
//     name: username,
//     friends: [
//         { name: n1 },
//         { name: n2 },
//         { name: n3 },
//     ]
// } = user;


// console.log(username, n1, n2, n3);




// Map

// const user = { name: "Bar" };

// const newUser = {
//     user: "new user",
//     true: "isAdim",
//     123: "Code name"
// }

// console.log(newUser)

// const map = new Map();

// map.set("username", "Foo");
// map.set(user, "user1")
// map.set(true, "isAdmin")
// map.set(["f1", "f2"], "friends")

// // console.log(map.get(user))
// // console.log(map.get(true))

// // console.log(map.has("username"))
// // console.log(map.delete("username123"))
// // console.log(map.clear())
// // console.log(map.has("username"))

// for (let key of map.keys()) {
//     console.log(key);
// }


// Set

// const user = { name: "john" }
// const userTwo = { ...user };

// const arr = [2, 4, 6];
// const newArr = [...arr];

// const set = new Set();

// set.add("john")
// set.add("jenny")
// set.add("john")
// set.add("james")
// set.add("alice")
// set.add(user)
// set.add(userTwo)
// set.add(arr)
// set.add(newArr)
// console.log(set.size);      // ?


// console.log(new Array([1, 2, 3, 4]));





















// ES6 Module System

// import { Student, getLuckyNumber, MAGIC_NUMBER } from "./student.js";
// import * as myModule from "./student.js";
// let john = new myModule.Student("S001", "John Doe")
// console.log(john.getDetails());

// console.log(myModule.getLuckyNumber());

// console.log(myModule.MAGIC_NUMBER)




// import Student from './student.js'
// import Person from './student.js'



// document.addEventListener("DOMContentLoaded", () => {
//     const heading = document.querySelector("h1");
//     heading.textContent = "Changed Content";
//     alert("Hello World")
// })


// console.log("Hello World");


const btnFetch = document.querySelector("#btn-fetch")
const ulContainer = document.querySelector(".user-lists")

btnFetch.addEventListener("click", function () {
    // console.log(this);          // button
    const xhr = new XMLHttpRequest();
    const url = `http://localhost:3000/users/u002`;
    xhr.open("GET", url);
    xhr.addEventListener("load", () => {
        const user = JSON.parse(xhr.responseText);

        console.log(user);
        const postURL = "http://localhost:3000/posts";
        const postXHR = new XMLHttpRequest()
        postXHR.open("GET", postURL)
        postXHR.addEventListener("load", function () {
            const posts = JSON.parse(this.responseText);
            const userPost = posts.filter(post => post.userId === user.id)
            const postContainer = document.createElement("ul")
            const h3 = document.createElement("h3")
            h3.innerHTML = `${user.email} - ${user.age}`
            userPost.forEach(post => {
                const liEl = document.createElement("li");
                liEl.classList.add("list-group-item")
                liEl.innerHTML = `
                <p>${post.title.toUpperCase()}</p>
            `
                postContainer.append(liEl)
            })
            document.body.appendChild(h3)
            document.body.appendChild(postContainer)
        })
        postXHR.send()

        // users.forEach((user) => {
        //     const liEl = document.createElement("li");
        //     liEl.classList.add("list-group-item")
        //     liEl.innerHTML = `
        //         <p>${user.email}  - ${user.age} </p>
        //     `
        //     ulContainer.append(liEl)
        // })

    })
    xhr.send()
    xhr.addEventListener("error", () => {
        console.error("Something bad happened")
    })

    // const url = "http://localhost:3000/users"
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

})

// json-server --watch data.json