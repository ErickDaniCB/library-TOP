// index.js
import "./styles.css";
import '../node_modules/modern-normalize/modern-normalize.css';

const libraryArr = [
  {
    title: "The Final Empire",
    author: "Brandon Sanderson",
    pages: 666,
    read: true,
    id: 0,
  },
];

function bookConstructor(title, author, pages, read) {
  return {
    title,
    author,
    pages,
    read,
  };
}

function addBook(title, author, pages, read) {
  libraryArr.push(bookConstructor(title, author, pages, read));
  idMatchIndex();
}

function deleteBook(id) {
  const index = libraryArr.find((obj) => obj.id === id);
  libraryArr.splice(index, 1);
}

function idMatchIndex() {
  for (let i = 0; i < libraryArr.length; i++) {
    libraryArr[i].id = i;
  }
}
// DISPLAY DIALOG FORM

const openBtn = document.getElementById("open-dialog");
const dialog = document.getElementById("dialog");

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

// GET FORM INFO AND ADD IT TO libraryArr[]

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  addBook(title.value, author.value, pages.value, read.checked);
  updateLibrary();
});

// CREATE AND DISPLAY CARDS

const libraryDiv = document.getElementById("library");

function createCard(obj) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = obj.title;

  const cardAuthor = document.createElement("h3");
  cardAuthor.textContent = obj.author;

  const cardPages = document.createElement("h3");
  cardPages.textContent = obj.pages;

  const cardRead = document.createElement("input");
  cardRead.setAttribute("type", "checkbox");
  if (obj.read) {
    cardRead.setAttribute("checked", "true");
  }

  const cardDelete = document.createElement("input");
  cardDelete.setAttribute("type", "button");
  cardDelete.value = "Delete";
  cardDelete.classList.add(`${obj.id}`);

  cardDelete.addEventListener("click", (e) => {
    const id = e.target.classList[0];
    deleteBook(id);
    updateLibrary();
  });

  libraryDiv.appendChild(card);
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardRead);
  card.appendChild(cardDelete);
}

// UPDATE LIBRARY DISPLAY
function updateLibrary() {
  while (libraryDiv.firstChild) {
    libraryDiv.removeChild(libraryDiv.firstChild);
  }
  libraryArr.forEach((bookObj) => {
    createCard(bookObj);
  });
  console.log(libraryArr);//////////////////////////////////////
}

updateLibrary();
