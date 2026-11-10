
function addStudent() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;

    if (name == "" || roll == "") {
        alert("Enter all details");
    }
    else {
        document.getElementById("list").innerHTML +=
            "<li>Name: " + name + " Roll Number: " + roll + "</li>";

        alert("Student Added Successfully");
    }
}
<<<<<<< HEAD
function registerStudent() {
    var name = prompt("Enter student name");

    if (name != "") {
        alert("Student Registered: " + name);
=======
function searchStudent() {

    var name = prompt("Enter student name to search");

    if (name != "") {
        alert("Searching Student: " + name);
>>>>>>> search
    }
}