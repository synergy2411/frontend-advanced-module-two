class Student {
    constructor(studId, studName) {
        this.studId = studId;
        this.studName = studName
    }

    getDetails() {
        return `${this.studId} -> ${this.studName}`
    }
}

function getLuckyNumber() {
    return Math.trunc(Math.random() * 100)
}


const MAGIC_NUMBER = Math.trunc(Math.random() * 100)


// export {
//     Student,
//     getLuckyNumber,
//     MAGIC_NUMBER
// }

export default Student;