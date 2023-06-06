//defining the variable for the student username to be displayed
var studentUsername;

//function to get the username and then display it
function studentUsernameDisplaying() {
    //getting the value from the local storage and assinging it to studentusername
    studentUsername = localStorage.getItem("studentUsernameKey");

    //capitalizing the first letter of the username
    studentUsername = studentUsername.toUpperCase();

    //displaying the studentusername variable in the text box
    document.getElementById("studentUsernameDisplaying").innerHTML = `What would you like to do, ${studentUsername}?`;
}