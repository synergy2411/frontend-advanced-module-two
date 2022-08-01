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


let user = {
    mon: {
        start: 2,
        end: 3
    },
    wed: {
        start: 3,
        end: 4
    },
    fri: {
        start: 5,
        end: 6
    }
}


// console.log(user.mon.start)
if (user.session && user.session.tue) {
    console.log(user.session.tue.start)
}
console.log(user.session?.tue?.start)