// Prompt the user to input student marks between 0 and 100
let marks = prompt("Please input student marks between 0 and 100");

// Convert the input to a number type
marks = Number(marks);

// Check if the input is a valid number within 0 to 100
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log('Please enter a number between 0 and 100');
} else {
    let grade;
    
    // Determine the grade based on the student's marks
    if (marks > 79) {
        grade = 'A';  // Grade A for marks above 79
    } else if (marks >= 60) {
        grade = 'B';  // Grade B for marks between 60 and 79
    } else if (marks >= 49) {
        grade = 'C';  // Grade C for marks between 49 and 59
    } else if (marks >= 40) {
        grade = 'D';  // Grade D for marks between 40 and 48
    } else {
        grade = 'E';  // Grade E for marks below 40
    }

    return grade;
}
