//defining the variable for the book number for the book which will be checked out
var checkoutBookNum;

//the function to checkout the book
function checkoutBook(checkoutBookForm) {
    //assinging the value for the checkoutbooknum to be the input from the library technician
    checkoutBookNum = checkoutBookForm.checkoutBookNum.value;

    //obtaining all of the values of the books in the system from the local storage
    bookNumLib = JSON.parse(localStorage.getItem('libTechNumKey'));//getting the book number values from the localstorage and parsing it
    availability = JSON.parse(localStorage.getItem('availabilityKey'));//getting the book availability values from the localstorage and parsing it

    //making sure that the system is not empty
    if (bookNumLib != null) {
        //looping for the amount of books that there are in the system
        for (x = 0; x < bookNumLib.length; x = x + 1) {
            //if the book number finds a match
            if (checkoutBookNum == bookNumLib[x]) {
                //change availability for the book to not available
                availability[x] = 'no';

                //alert the technician that the book has been checked out
                alert("book number " + checkoutBookNum + " has been checked out");

                //put the updated values in the localstorage, overwriting what was there previously
                localStorage.setItem("availabilityKey", JSON.stringify(availability));
            }
        }
    }
}
