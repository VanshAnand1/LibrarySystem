//declaring the variables
//the book title for the search
var searchBookTitle;
//the book number for the search
var searchBookNum;
//the book author for the search
var searchBookAuthor;
//the book type for the search
var searchBookTypeF;//fiction
var searchBookTypeNF;//non fiction
var searchBookTypeGN;//graphic novel
//the book publication date for the search
var searchBookPub;
//the book genre for the search
var searchBookGenre;

//function to search for books in the system
function getStudentSearchData(searchBookForm) {
    //reassigning the variables
    searchBookTitle = searchBookForm.bookTitleS.value.toLowerCase();
    searchBookAuthor = searchBookForm.bookAuthorS.value.toLowerCase();
    searchBookNum = searchBookForm.bookNumS.value;
    searchBookPub = searchBookForm.bookPubDateS.value;
    searchBookGenre = searchBookForm.bookGenreS.value;
    //ternary operators to output which book types were selected, and if they were not, they output 'false'
    searchBookTypeF = searchBookForm.bookTypeFS.checked ? 'fiction' : false
    searchBookTypeNF = searchBookForm.bookTypeNFS.checked ? 'non-fiction' : false
    searchBookTypeGN = searchBookForm.bookTypeGNS.checked ? 'graphic-novel' : false

    //storing the search inputs in the local storage to take them to the search results page
    localStorage.setItem("studentTitleKey", searchBookTitle);
    localStorage.setItem("studentNumKey", searchBookNum);
    localStorage.setItem("studentAuthorKey", searchBookAuthor);
    localStorage.setItem("studentPubKey", searchBookPub);
    localStorage.setItem("studentGenreKey", searchBookGenre);
    localStorage.setItem("studentTypeKeyF", searchBookTypeF);
    localStorage.setItem("studentTypeKeyNF", searchBookTypeNF);
    localStorage.setItem("studentTypeKeyGN", searchBookTypeGN);
}

