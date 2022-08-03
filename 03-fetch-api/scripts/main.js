"use strict"
const baseURL = "http://localhost:3000";
const btnFetch = document.querySelector("#btnFetch")
const btnCreate = document.querySelector("#btnCreate")
const btnDelete = document.querySelector("#btnDelete")
const btnUpdate = document.querySelector("#btnUpdate")

console.log("LOADED");

const getUsers = () => {
    fetch(`${baseURL}/users`)
        .then(response => response.json())
        .then(users => console.log(users))
        .catch(console.error)
}

const createUser = () => {
    fetch(`${baseURL}/users`, {
        method: "POST",
        body: JSON.stringify({ email: "fromFetch@test.com", age: 21 }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
        .then(result => console.log("RESULT : ", result))
        .catch(console.error)
}

const deleteUser = () => {
    fetch(`${baseURL}/users/-CF7pka`, {
        method: "DELETE"
    }).then(response => response.json())
        .then(result => console.log("DELETED RESULT ", result))
        .catch(console.error)
}

const updateUser = () => {
    fetch(`${baseURL}/users/u002`, {
        method: "PATCH",
        body: JSON.stringify({ email: "malli@test.com" }),
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*"
        }
    }).then(response => response.json())
        .then(result => console.log(result))
        .catch(console.error)
}

btnFetch.addEventListener("click", getUsers)
btnCreate.addEventListener("click", createUser)
btnDelete.addEventListener("click", deleteUser)
btnUpdate.addEventListener("click", updateUser)