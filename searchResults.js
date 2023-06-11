//defining the variables for the books in the library system
var bookTitleLib = [];
var bookNumLib = [];
var bookAuthorLib = [];
var bookTypeLib = [];
var bookGenreLib = [];
var bookPubDateLib = [];
var availability = [];

//defining the variables for the inputs from the student search
var bookTitleStudent;//the title that the student has searched for
var bookNumStudent;//the book number that the student has searched for
var bookAuthorStudent;//the author that the student has searched for
var bookTypeStudent = '';//if no book type is selected, this is changed to ANY later on
var bookTypeStudentF;//this will be true if fiction is selected
var bookTypeStudentNF;//this will be true if non fiction is selected
var bookTypeStudentGN;//this will be true if graphic novel is selected
var bookGenreStudent;//the genre that the student has searched for
var bookPubDateStudent;//the publication date that the student has searched for

//table variable to display all of the results in a table
var table = "<table style='border-collapse: collapse; width: 100%;'>";

//variable to count the number of results found
var resultsCounter = 0;

//function to display the results from the search, runs when the searchresults page is loaded
function displayFinalResults() {
    //the variables for the library technicians book that is already in the system being given the values that are assigned to the keys in the local storage
    //since we stringified the values on the add book, we need to parse it here to be able to compare it with the searches
    bookTitleLib = JSON.parse(localStorage.getItem('libTechTitleKey'));//getting the book title values from the localstorage and parsing it
    bookNumLib = JSON.parse(localStorage.getItem('libTechNumKey'));//getting the book number values from the localstorage and parsing it
    bookAuthorLib = JSON.parse(localStorage.getItem('libTechAuthorKey'));//getting the book author values from the localstorage and parsing it
    bookTypeLib = JSON.parse(localStorage.getItem('libTechTypeKey'));//getting the book type values from the localstorage and parsing it
    bookGenreLib = JSON.parse(localStorage.getItem('libTechGenreKey'));//getting the book genre values from the localstorage and parsing it
    bookPubDateLib = JSON.parse(localStorage.getItem('libTechPubKey'));//getting the book publication date values from the localstorage and parsing it
    availability = JSON.parse(localStorage.getItem('availabilityKey'));//getting the book availability values from the localstorage and parsing it

    //the variables for the inputs from the student using the search being given the values that are assigned to the keys in the local storage
    bookTitleStudent = localStorage.getItem("studentTitleKey");//getting the book title search value from the localstorage
    bookNumStudent = localStorage.getItem("studentNumKey");//getting the book number search value from the localstorage
    bookAuthorStudent = localStorage.getItem("studentAuthorKey");//getting the book author search value from the localstorage
    bookTypeStudentF = localStorage.getItem("studentTypeKeyF");//if the student selected fiction, this will be true
    bookTypeStudentNF = localStorage.getItem("studentTypeKeyNF");//if the student selected non fiction, this will be true
    bookTypeStudentGN = localStorage.getItem("studentTypeKeyGN");//if the student selected graphic novel, this will be true
    bookGenreStudent = localStorage.getItem("studentGenreKey");//getting the book genre search value from the localstorage
    bookPubDateStudent = localStorage.getItem("studentPubKey");//getting the book publication date search value from the localstorage

    //if no book type is specified, the value will be set to ANY book type
    if (bookTypeStudentF == 'false' &&
        bookTypeStudentNF == 'false' &&
        bookTypeStudentGN == 'false') {
        bookTypeStudent = 'ANY';
    }

    //checking if there are any books in the system, if there are not, the if statement will not run
    if (bookNumLib != null) {
        //defining the columns for the table
        table += "<tr><th style='border: 1px solid black;height: 60px;'>System Index</th><th style='border: 1px solid black;'>Book Title</th><th style='border: 1px solid black;'>Book Number</th><th style='border: 1px solid black;'>Author Name</th><th style='border: 1px solid black;'>Book Type</th><th style='border: 1px solid black;'>Book Genre</th><th style='border: 1px solid black;'>Publication Date</th><th style='border: 1px solid black;'>Available?</th></tr>"

        //for loop to check through the array of book values we have stored in the local storage
        for (x = 0; x < bookNumLib.length; x = x + 1) {
            //this if the IF statement for the search results to be displayed depending on the search inputs put in by the student
            //if any of the values comparing match, the result will be displayed
            //if nothing is matched in that field, it will check if it was left empty, and if it was, it will ignore it and move on
            if ((bookTitleLib[x] === bookTitleStudent || bookTitleStudent == '') &&
                (bookNumLib[x] === bookNumStudent || bookNumStudent == '') &&
                (bookAuthorLib[x] === bookAuthorStudent || bookAuthorStudent == '') &&
                (bookPubDateLib[x] === bookPubDateStudent || bookPubDateStudent === 'ANY') &&
                (bookGenreLib[x] === bookGenreStudent || bookGenreStudent === 'ANY') &&
                (bookTypeStudent === 'ANY' || bookTypeLib[x] === bookTypeStudentF || bookTypeLib[x] === bookTypeStudentNF || bookTypeLib[x] === bookTypeStudentGN)) {
                //making all of the rows of the table with the values of the [x] index in the arrays if a match is found
                //opening table row
                table += "<tr>";
                //result number
                table += "<td style='border: 1px solid black;height: 120px;'>" + (x + 1) + "</td>";
                //book title
                table += "<td style='border: 1px solid black;height: 120px;'>" + bookTitleLib[x] + "</td>";
                //book number
                table += "<td style='border: 1px solid black;height: 120px;'>" + bookNumLib[x] + "</td>";
                //book author
                table += "<td style='border: 1px solid black;height: 120px;'>" + bookAuthorLib[x] + "</td>";
                //book type
                table += "<td style='border: 1px solid black;height: 120px;'>" + bookTypeLib[x] + "</td>";
                //book genre
                table += "<td style='border: 1px solid black;height: 120px;'>" + bookGenreLib[x] + "</td>";
                //book publication date
                table += "<td style='border: 1px solid black;height: 120px;'>" + bookPubDateLib[x] + "</td>";
                //book availability
                table += "<td style='border: 1px solid black;height: 120px;'>" + availability[x] + "</td>";
                //closing the table row
                table += "</tr>";

                resultsCounter = resultsCounter + 1
            }
        }
        //closing the table
        table += "</table>";
        //sending all of the information from the table value to the table in searchResults.html with the id "displayResults"
        document.getElementById("displayResults").innerHTML = table;

        //displaying the number of results found in the corner of the page
        document.getElementById("header").innerHTML = `${resultsCounter} Results Found`
    }

    //if no results are found, the user is directed to the no results found page
    if (resultsCounter == 0) {
        window.location.href = "noResults.html"
    }
}