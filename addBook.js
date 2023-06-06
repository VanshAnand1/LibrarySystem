//declaring the variables as arrays so that multiple books can be stored at once
//the title for the new book
var newBookTitle = [];
//the number for the new book
var newBookNum = [];
//the author for the new book
var newBookAuthor = [];
//the type for the new book
var newBookType = [];
//the publication date for the new book
var newBookPub = [];
//the genre for the new book
var newBookGenre = [];
//the availability for the new book
var availability = [];
//the counter for the total books that are in the system
var bookCounter = [];

//variable for the counter, by using this we can store multiple books in the local storage in an array
var counter = 0;

//function to add a new book to the system, runs when the add book button is clicked
function addNewBook(addBookForm) {
    //reassigning the variables to the inputs from the library technician
    newBookTitle[counter] = addBookForm.bookTitleL.value.toLowerCase();
    newBookAuthor[counter] = addBookForm.bookAuthorL.value.toLowerCase();
    newBookNum[counter] = addBookForm.bookNumL.value;
    newBookType[counter] = addBookForm.bookTypeL.value;
    newBookPub[counter] = addBookForm.bookPubDateL.value;
    newBookGenre[counter] = addBookForm.bookGenreL.value;
    availability[counter] = 'yes'; //the default value for the book availability is 'yes' when it is put into the system, as it has not been checked out yet
    bookCounter[counter] = counter

    //increases the counter by one every time the add book button is clicked
    counter = counter + 1;

    //storing inputted information into the local storage, with the counter it is able to store multiple books in an array
    localStorage.setItem("libTechTitleKey", JSON.stringify(newBookTitle));
    localStorage.setItem("libTechNumKey", JSON.stringify(newBookNum));
    localStorage.setItem("libTechAuthorKey", JSON.stringify(newBookAuthor));
    localStorage.setItem("libTechTypeKey", JSON.stringify(newBookType));
    localStorage.setItem("libTechPubKey", JSON.stringify(newBookPub));
    localStorage.setItem("libTechGenreKey", JSON.stringify(newBookGenre));
    localStorage.setItem("availabilityKey", JSON.stringify(availability));
    localStorage.setItem("bookCounterKey", JSON.stringify(bookCounter));

    //alerts that the book has been added
    alert("Book has been added");
}


function savingBooks() {
    //if statement to ensure that there are some values and the system is not currently empty
    if (JSON.parse(localStorage.getItem('libTechNumKey')) != null) {
        //retrieving the data which will get reset when we add another book
        newBookTitle = JSON.parse(localStorage.getItem('libTechTitleKey'));
        newBookNum = JSON.parse(localStorage.getItem('libTechNumKey'));
        newBookAuthor = JSON.parse(localStorage.getItem('libTechAuthorKey'));
        newBookType = JSON.parse(localStorage.getItem('libTechTypeKey'));
        newBookGenre = JSON.parse(localStorage.getItem('libTechGenreKey'));
        newBookPub = JSON.parse(localStorage.getItem('libTechPubKey'));
        availability = JSON.parse(localStorage.getItem('availabilityKey'));
        bookCounter = JSON.parse(localStorage.getItem('bookCounterKey'));
        counter = JSON.parse(localStorage.getItem('bookCounterKey'));

        //setting back all of the values that you just retrieved
        localStorage.setItem("libTechTitleKey", newBookTitle);
        localStorage.setItem("libTechNumKey", newBookNum);
        localStorage.setItem("libTechAuthorKey", newBookAuthor);
        localStorage.setItem("libTechTypeKey", newBookType);
        localStorage.setItem("libTechPubKey", newBookPub);
        localStorage.setItem("libTechGenreKey", newBookGenre);
        localStorage.setItem("availabilityKey", availability);
        localStorage.setItem("bookCounterKey", bookCounter);
    }
}



