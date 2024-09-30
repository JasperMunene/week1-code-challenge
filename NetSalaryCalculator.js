// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
  let nssfContribution = 0;
  
  // Tier I: Up to KES 7,000
  if (grossSalary <= 7000) {
    nssfContribution = grossSalary * 0.06;  // 6% of gross salary
  } else {
    // Contributions for Tier I capped at 7,000
    nssfContribution = 7000 * 0.06;  // 6% of the first 7,000

    // Tier II: From KES 7,001 to KES 36,000 
    if (grossSalary > 7000 && grossSalary <= 36000) {
      nssfContribution += (grossSalary - 7000) * 0.06;  // 6% on the remainder up to 36,000
    } else if (grossSalary > 36000) {
      // Contributions for Tier II capped at 36,000
      nssfContribution += (36000 - 7000) * 0.06;  
    }
  }

  return nssfContribution;
}

// Function to calculate NHIF deductions
function calculateNHIF(grossSalary) {
  let nhifDeduction = 0;

  if (grossSalary <= 5999) {
      nhifDeduction = 150;
  } else if (grossSalary <= 7999) {
      nhifDeduction = 300;
  } else if (grossSalary <= 11999) {
      nhifDeduction = 400;
  } else if (grossSalary <= 14999) {
      nhifDeduction = 500;
  } else if (grossSalary <= 19999) {
      nhifDeduction = 600;
  } else if (grossSalary <= 24999) {
      nhifDeduction = 750;
  } else if (grossSalary <= 29999) {
      nhifDeduction = 850;
  } else if (grossSalary <= 34999) {
      nhifDeduction = 900;
  } else if (grossSalary <= 39999) {
      nhifDeduction = 950;
  } else if (grossSalary <= 44999) {
      nhifDeduction = 1000;
  } else if (grossSalary <= 49999) {
      nhifDeduction = 1100;
  } else if (grossSalary <= 59999) {
      nhifDeduction = 1200;
  } else if (grossSalary <= 69999) {
      nhifDeduction = 1300;
  } else if (grossSalary <= 79999) {
      nhifDeduction = 1400;
  } else if (grossSalary <= 89999) {
      nhifDeduction = 1500;
  } else if (grossSalary <= 99999) {
      nhifDeduction = 1600;
  } else {
      nhifDeduction = 1700; // Gross salary above 100,000
  }

  return nhifDeduction;
}

// Function to calculate Payee (Tax)
function calculatePAYE(grossSalary) {
  let paye = 0;

  if (grossSalary <= 24000) {
      paye = grossSalary * 0.1; // 10% tax for up to 24,000 KES
  } else if (grossSalary <= 32333) {
      paye = 2400 + (grossSalary - 24000) * 0.25; // 25% tax above 24,000
  } else {
      paye = 2400 + 2083.25 + (grossSalary - 32333) * 0.3; // 30% above 32,333
  }

  // Applying personal relief (2400 KES per month)
  const personalRelief = 2400;
  paye -= personalRelief;

  return Math.max(0, paye); // paye should not be negative
}

// Main function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate deductions
  const nssf = calculateNSSF(grossSalary);
  const nhif = calculateNHIF(grossSalary);
  const payee = calculatePAYE(grossSalary - nssf); // PAYE is on taxable income after NSSF

  // Calculate net salary
  const netSalary = grossSalary - (nssf + nhif + payee);

  console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
  return netSalary;
}

// Prompts with input validation
let basicSalary = parseInt(prompt("Enter the Basic Salary (KES): "));
let benefits = parseInt(prompt("Enter the Benefits (KES): "));

// Validate inputs
if (isNaN(basicSalary) || isNaN(benefits)) {
  console.error("Invalid input! Please enter a valid number for both basic salary and benefits.");
} else {
  // Calculate Net Salary
  calculateNetSalary(basicSalary, benefits);
}
