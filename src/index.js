// index.js
import "./styles.css";

let library = [
  {
    name: "The Final Empire",
    author: "Brandon Sanderson",
    pages: 666,
    read: true,
  }
];

function bookConstructor(name, author, pages, read) {
  return {
    name,
    author,
    pages,
    read,
  };
}

function addBook(name, author, pages, read) {
  library.push(bookConstructor(name, author, pages, read));
}

// DISPLAY DIALOG FORM

const openBtn = document.getElementById("open-dialog");
const dialog = document.getElementById("dialog");


openBtn.addEventListener("click", () => {
  dialog.showModal();
});

// GET FORM INFO AND ADD IT TO LIBRARY[]  

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", (event) => {
  addBook(title.value, author.value, pages.value, read.checked)
});