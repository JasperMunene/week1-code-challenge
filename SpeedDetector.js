// Function to detect speed and assign demerit points
function speedDetector(speed) {
    // Speed limit set to 70 
    const speedLimit = 70;
    
    // Maximum number of demerit points before license suspension
    const maxDemeritPoints = 12;

    // Check if the speed is within the speed limit
    if (speed <= speedLimit) {
        // If speed is within the limit, print "Ok"
        alert("Ok");
    } else {
        // Calculate the number of demerit points
        // For every 5 km/h above the speed limit, 1 demerit point is assigned
        let demeritPoints = Math.floor((speed - speedLimit) / 5);

        // Check if the number of demerit points exceeds the maximum allowed
        if (demeritPoints > maxDemeritPoints) {
            // If demerit points exceed 12, suspend the license
            alert("License Suspended");
        } else {
            alert(`Points: ${demeritPoints}`);
        }
    }
}

// Prompt user to input speed
let userSpeed = parseInt(prompt("Enter your speed: "));

if (isNaN(userSpeed)) {
    alert("Invalid input! Please enter a valid number as your speed")
} else {
    //calculate speed
    speedDetector(userSpeed);
}



