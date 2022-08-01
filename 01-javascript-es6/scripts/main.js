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



class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getdetails() {
        return `Hello from ${this.name}, I'm ${this.age} years old`
    }
}


class Student extends Human {
    constructor(studName, studId, studAge, course, marks) {
        super(studName, studAge)
        this.studId = studId;
        this.course = course;
        this.marks = marks;
    }

    get studId() { }
    set studId(val) {
        // chance to validate student ID here
    }

    #calcGrade() {
        return (this.marks * 900) / 1000
    }

    isFirstGrade() {
        if (this.#calcGrade() > 90) {
            return true
        } else {
            return false
        }
    }

    // Overridding
    getDetails() {

    }
}

let foo = new Student("Foo", "F001", 32, "Java");
console.log(foo.getdetails())


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

const user = { name: "Bar" };

const newUser = {
    user: "new user",
    true: "isAdim",
    123: "Code name"
}

console.log(newUser)

const map = new Map();

map.set("username", "Foo");
map.set(user, "user1")
map.set(true, "isAdmin")
map.set(["f1", "f2"], "friends")

// console.log(map.get(user))
// console.log(map.get(true))

// console.log(map.has("username"))
// console.log(map.delete("username123"))
// console.log(map.clear())
// console.log(map.has("username"))

for (let key of map.keys()) {
    console.log(key);
}