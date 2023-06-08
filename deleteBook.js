//defining the variable for the book number for the book which will be delete
var deleteBookNum;

//defining the variables for the books in the library system
var bookTitleLib = [];
var bookNumLib = [];
var bookAuthorLib = [];
var bookTypeLib = [];
var bookGenreLib = [];
var bookPubDateLib = [];
var availability = [];

//the function which deletes the book from the system
function deleteBook(deleteBookForm) {
    //assinging the value for the deletebooknum to be the input from the library technician
    deleteBookNum = deleteBookForm.deleteBookNum.value;

    //obtaining all of the values of the books in the system from the local storage
    bookTitleLib = JSON.parse(localStorage.getItem('libTechTitleKey'));//getting the book title values from the localstorage and parsing it
    bookNumLib = JSON.parse(localStorage.getItem('libTechNumKey'));//getting the book number values from the localstorage and parsing it
    bookAuthorLib = JSON.parse(localStorage.getItem('libTechAuthorKey'));//getting the book author values from the localstorage and parsing it
    bookTypeLib = JSON.parse(localStorage.getItem('libTechTypeKey'));//getting the book type values from the localstorage and parsing it
    bookGenreLib = JSON.parse(localStorage.getItem('libTechGenreKey'));//getting the book genre values from the localstorage and parsing it
    bookPubDateLib = JSON.parse(localStorage.getItem('libTechPubKey'));//getting the book publication date values from the localstorage and parsing it
    availability = JSON.parse(localStorage.getItem('availabilityKey'));//getting the book availability values from the localstorage and parsing it

    //making sure that the system is not empty
    if (bookNumLib != null) {
        //looping for the amount of books that there are in the system
        for (x = 0; x < bookNumLib.length; x = x + 1) {
            //if the book number finds a match
            if (deleteBookNum == bookNumLib[x]) {
                if (bookNumLib.length > 1) {
                    //splice the [x] index from every array
                    bookTitleLib.splice(x, x)
                    bookNumLib.splice(x, x)
                    bookAuthorLib.splice(x, x)
                    bookTypeLib.splice(x, x)
                    bookGenreLib.splice(x, x)
                    bookPubDateLib.splice(x, x)
                    availability.splice(x, x)

                    //put the updated values in the localstorage, overwriting what was there previously
                    localStorage.setItem("libTechTitleKey", JSON.stringify(bookTitleLib));//title
                    localStorage.setItem("libTechNumKey", JSON.stringify(bookNumLib));//number
                    localStorage.setItem("libTechAuthorKey", JSON.stringify(bookAuthorLib));//author
                    localStorage.setItem("libTechTypeKey", JSON.stringify(bookTypeLib));//type
                    localStorage.setItem("libTechPubKey", JSON.stringify(bookPubDateLib));//publication date
                    localStorage.setItem("libTechGenreKey", JSON.stringify(bookGenreLib));//genre
                    localStorage.setItem("availabilityKey", JSON.stringify(availability));//availability
                } else {
                    //if only one item is currently in the localstorage and it is to be deleted, it will just clear the storage for these keys
                    localStorage.clear("libTechTitleKey");//clearing last item: title
                    localStorage.clear("libTechNumKey");//clearing last item: number
                    localStorage.clear("libTechAuthorKey");//clearing last item: author
                    localStorage.clear("libTechTypeKey");//clearing last item: type
                    localStorage.clear("libTechPubKey");//clearing last item: publication date
                    localStorage.clear("libTechGenreKey");//clearing last item: genre
                    localStorage.clear("availabilityKey");//clearing last item: availability
                }

                //alert the technician that the book has been checked out
                alert("book number " + deleteBookNum + " has been deleted");
            }
        }
    }
}
