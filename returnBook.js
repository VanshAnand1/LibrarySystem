//defining the variable for the book number which will be returned
var returnBookNum;

//function to return the book
function returnBook(returnBookForm) {
    //reassining the returnbooknum variable to the book number inputted by the library technician
    returnBookNum = returnBookForm.returnBookNum.value;

    //obtaining all of the values of the books in the system from the local storage
    bookNumLib = JSON.parse(localStorage.getItem('libTechNumKey'));//getting the book number values from the localstorage and parsing it
    availability = JSON.parse(localStorage.getItem('availabilityKey'));//getting the book availability values from the localstorage and parsing it

    if (bookNumLib != null) {
        //looping for the amount of books that there are in the system
        for (x = 0; x < bookNumLib.length; x = x + 1) {
            //if the book number finds a match
            if (returnBookNum == bookNumLib[x] && availability[x] == 'no') {
                //change availability for the book to available
                availability[x] = 'yes';

                //alert the technician that the book has been checked out
                alert("book number " + returnBookNum + " has been returned");

                //put the updated values in the localstorage, overwriting what was there previously
                localStorage.setItem("availabilityKey", JSON.stringify(availability));
            }
        }
    }
}