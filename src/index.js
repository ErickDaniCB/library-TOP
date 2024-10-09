// index.js
import "./styles.css";

let library = [
  {
    name: "The Final Empire",
    author: "Brandon Sanderson",
    pages: 666,
    read: true,
  },
];

function bookConstructor(name, author, pages, read) {
  return {
    name,
    author,
    pages,
    read,
  };
}

// console.log(bookConstructor("aaaa", "oooo", 233, false));

function addBook(name, author, pages, read) {
  library.push(bookConstructor(name, author, pages, read));
}

// DIALOG 

const add = document.getElementById("add");
const dialog = document.getElementById("dialog");

add.addEventListener("click", () => {dialog.showModal()})
