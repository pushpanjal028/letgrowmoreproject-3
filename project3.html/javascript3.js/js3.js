function showData() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    
    var displayDiv = document.getElementById("displayData");
    
    displayDiv.innerHTML = "First Name: " + firstName + "<br>" +
                           "Last Name: " + lastName + "<br>" +
                           "Email: " + email + 
                           "Course: " + course;
}
