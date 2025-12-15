
function welcome() {
    console.log("Welcome to Jana's Portfolio!");
}
welcome();


var currentYear = 2024;
console.log("Portfolio Year: " + currentYear);


var skills = ["Python", "Java", "C++", "HTML", "CSS", "JavaScript"];
console.log("Technical Skills:", skills);


var projects = ["Mystery Library Puzzle", "Process Scheduling Simulation", "Health Tracker", "Hospital Management System", "Car Rental System"];
console.log("Total Projects:", projects.length);


function greet(name) {
    var message = "Hello, I'm " + name;
    return message;
}
console.log(greet("Jana Ahmed"));


function yearsToGraduation(currentYear, graduationYear) {
    var result = graduationYear - currentYear;
    return result;
}
console.log("Years to Graduation:", yearsToGraduation(2024, 2028));


console.log("Portfolio loaded successfully!");


var visitors = [];
visitors.push("Visitor 1");
visitors.push("Visitor 2");
visitors.push("Visitor 3");
console.log("Visitor Count:", visitors.length);