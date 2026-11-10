
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
function searchStudent() {

    var name = prompt("Enter student name to search");

    if (name != "") {
        alert("Searching Student: " + name);
    }
}