//variables for the accounts that are created and saved in the system
var studentExistingUsernames = ["1", "Admin", "vansh", "ayaan", "parth", "raeid", "imaan"];
var studentExistingPasswords = ["1", "Admin", "Vansh123", "Ayaan123", "Parth123", "Raeid123", "Imaan123"];
var technicianExistingUsernames = ["1", "Admin", "vansh"];
var technicianExistingPasswords = ["1", "Admin", "Vansh123"];

//defining the variables for the login information
var studentUsername;
var studentPassword;
var technicianUsername;
var technicianPassword;

//variable to detect if the information inputted is incorrect
var number = 0;

//function to take the student username and display it on the student profile
function loginStudentSide(studentLoginForm) {
    //reassigning the variable to the inputted value
    studentUsername = studentLoginForm.studentUsername.value;
    studentPassword = studentLoginForm.studentPassword.value;

    //storing the variable in the localstorage to display on the homepage
    localStorage.setItem("studentUsernameKey", studentUsername);

    //checking if the inputs are empty
    if (studentUsername != '' && studentPassword != '') {
        for (x = 0; x < studentExistingUsernames.length; x = x + 1) {
            if (studentUsername == studentExistingUsernames[x] && studentPassword == studentExistingPasswords[x]) {
                alert("Login Successful!")
                number = number + 1;
                window.location.href = 'studentHomepage.html';
            }
        }
    } else if (studentUsername === '' || studentPassword === '') {
        //if any of the values are left empty, the user is instructed to fill them out before pressing login
        alert('please fill out the information required');
    }

    if (studentUsername != '' && studentPassword != '' && number === 0) {
        //if no matches are found with accounts in the system, it will tell the user that there is no account with that login information
        alert('no account found with that information');
    }
}


function loginTechnicianSide(technicianLoginForm) {
    //reassigning the variable to the inputted value
    technicianUsername = technicianLoginForm.technicianUsername.value;
    technicianPassword = technicianLoginForm.technicianPassword.value;

    //checking if the inputs are empty
    if (technicianUsername != '' && technicianPassword != '') {
        for (x = 0; x < technicianExistingUsernames.length; x = x + 1) {
            if (technicianUsername == technicianExistingUsernames[x] && technicianPassword == technicianExistingPasswords[x]) {
                alert("Login Successful!")
                window.location.href = 'techHomepage.html';
                number = number + 1;
            }
        }
    } else if (technicianUsername === '' || technicianPassword === '') {
        //if any of the values are left empty, the user is instructed to fill them out before pressing login
        alert('please fill out the information required');
    }

    if (technicianUsername != '' && technicianPassword != '' && number === 0) {
        //if no matches are found with accounts in the system, it will tell the user that there is no account with that login information
        alert('no account found with that information');
    }
}
