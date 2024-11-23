const myLibrary = [];

function Book(title, author, pages_num, read) {
    this.title = title;
    this.author = author;
    this.pages_num = pages_num;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggleRead(idx){
    myLibrary[idx].toggleRead();
    render();
}

function render(){
    let library = document.getElementById("library");
    library.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let myBook = myLibrary[i];
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("class","bookcard");
        bookDiv.innerHTML = 
        `
        <div class="cardheader">
            <h3 class="title">${myBook.title}</h3>
            <h5 class="author">by ${myBook.author}</h5>
        </div>
        <div class="cardbody">
            <p class="pagedisplay">Book Pages: ${myBook.pages_num}</p>
            <p class="read-status">${myBook.read ? "Read" : "Not Read"}</p>
            <button class="removebutton" onclick="removeBook(${i})">Remove Book</button>
            <button class="toggleread" onclick="toggleRead(${i})">Toggle Read</button>
        </div>
        `;
        library.appendChild(bookDiv)
    }
}

function removeBook(idx){
    myLibrary.splice(idx,1);
    render();
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages_num = document.getElementById("pagenum").value;
    let read = document.getElementById("read").checked;
    let book = new Book(title, author, pages_num,read);
    myLibrary.push(book);
    render();
}

let newBookButton = document.getElementById("newbookbutton");
newBookButton.addEventListener("click",function(){
    let newBookForm = document.getElementById("newbookform")
    newBookForm.style.display = "flex";  
})

let addBookButton = document.getElementById("newbookform");
addBookButton.addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})