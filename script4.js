// Task 1: Age Category Finder

let age = parseInt(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}


// Task 2: Salary Increment Calculator

let salary = parseFloat(prompt("Enter Salary:"));
let newSalary;

if (salary < 20000) {
    newSalary = salary + (salary * 20 / 100);
} else if (salary <= 50000) {
    newSalary = salary + (salary * 10 / 100);
} else {
    newSalary = salary + (salary * 5 / 100);
}

console.log("Old Salary: ₹" + salary);
console.log("New Salary: ₹" + newSalary);

// Task 3: Electricity Bill Calculator

let units = parseInt(prompt("Enter Units Consumed:"));
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Total Bill: ₹" + bill);


// Task 4: simple ATM Withdrawal

let balance = 10000;
let withdrawal = parseFloat(prompt("Enter Withdrawal Amount:"));

if (withdrawal <= balance) {
    balance = balance - withdrawal;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Funds");
}

// Task 5 login credential 

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");   
if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}               


//Task 6 mobile recharge offer

let rechargeAmount = parseFloat(prompt("Enter recharge amount:"));

if (rechargeAmount >= 499) {
    console.log("Netflix Offer");
} else if (rechargeAmount >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}


// Task 7 traffic light signal
let color = prompt("Enter signal color (Red, Yellow, Green):");

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal Color");
}

//Task 8 emloyee attendance 

let workingDays = parseInt(prompt("Enter total working days:"));
let presentDays = parseInt(prompt("Enter present days:"));

let percentage = (presentDays / workingDays) * 100;

console.log("Attendance Percentage: " + percentage.toFixed(2) + "%");

if (percentage >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Task 9: bus ticket booking

const ticketPrice = 500;

let tickets = parseInt(prompt("Enter number of tickets:"));

let totalAmount = tickets * ticketPrice;
let gst = totalAmount * 0.05;
let finalAmount = totalAmount + gst;

console.log("Total Amount: ₹" + totalAmount);
console.log("GST (5%): ₹" + gst.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));

// Task 10: Restaurant bill 

let foodCost = parseFloat(prompt("Enter food cost:"));

let discount = 0;

if (foodCost > 2000) {
    discount = foodCost * 0.10;
}

let finalBill = foodCost - discount;

console.log("Food Cost: ₹" + foodCost);
console.log("Discount: ₹" + discount.toFixed(2));
console.log("Final Bill: ₹" + finalBill.toFixed(2));

// Task 11 police recuitment

let age = parseInt(prompt("Enter age:"));
let height = parseInt(prompt("Enter height (cm):"));
let weight = parseInt(prompt("Enter weight (kg):"));

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Eligible for Police Recruitment");
        } else {
            console.log("Rejected: Weight is below 55 kg");
        }
    } else {
        console.log("Rejected: Height is below 160 cm");
    }
} else {
    console.log("Rejected: Age is below 18 years");
}

// Task 12 student results

let m1 = parseFloat(prompt("Enter marks of Subject 1:"));
let m2 = parseFloat(prompt("Enter marks of Subject 2:"));
let m3 = parseFloat(prompt("Enter marks of Subject 3:"));
let m4 = parseFloat(prompt("Enter marks of Subject 4:"));
let m5 = parseFloat(prompt("Enter marks of Subject 5:"));

let total = m1 + m2 + m3 + m4 + m5;
let percentage = (total / 500) * 100;

let grade = "";

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Total Marks: " + total);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

// Task 13 employee shift finder

let time = parseInt(prompt("Enter time (0–23 hours format):"));

if (time >= 9 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else if ((time >= 22 && time <= 23) || (time >= 0 && time < 6)) {
    console.log("Night Shift");
} else {
    console.log("Invalid time");
}

// Task 14 loan eligibility

let age = parseInt(prompt("Enter age:"));
let salary = parseFloat(prompt("Enter salary:"));
let experience = parseFloat(prompt("Enter experience (years):"));

if (age >= 21 && salary >= 25000 && experience >= 2) {
    console.log("Eligible for Loan");
} else {
    console.log("Not Eligible for Loan");
}

// Task 15 cab fare calculator

let distance = parseFloat(prompt("Enter distance in KM:"));

let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Total Distance: " + distance + " KM");
console.log("Total Fare: ₹" + fare.toFixed(2));

// Task 16 multiplication table generator

let number = parseInt(prompt("Enter a number:"));
console.log("Multiplication Table for " + number + ":");

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Task 17 password checker 

let length = parseInt(prompt("Enter password length:"));

if (length < 6) {
    console.log("Weak");
} else if (length <= 10) {
    console.log("Medium");
} else {
    console.log("Strong");
}

// Task 18 company bonus system

let salary = parseFloat(prompt("Enter salary:"));
let experience = parseFloat(prompt("Enter experience (years):"));

let bonusPercent = 0;

if (experience >= 0 && experience <= 2) {
    bonusPercent = 5;
} else if (experience >= 3 && experience <= 5) {
    bonusPercent = 10;
} else if (experience >= 6) {
    bonusPercent = 20;
} else {
    console.log("Invalid experience");
}

let bonus = (salary * bonusPercent) / 100;
let totalSalary = salary + bonus;

console.log("Bonus Percentage: " + bonusPercent + "%");
console.log("Bonus Amount: ₹" + bonus.toFixed(2));
console.log("Total Salary: ₹" + totalSalary.toFixed(2));


// Task 19 countdown timer

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

console.log("Happy New Year");

// Task 20  interview  selection system

let degree = prompt("Degree completed? (yes/no)").toLowerCase();
let communication = prompt("Communication skill? (good/bad)").toLowerCase();
let technicalScore = parseInt(prompt("Enter technical score:"));

if (degree === "yes") {
    if (communication === "good") {
        if (technicalScore >= 70) {
            console.log("Selected for Interview");
        } else {
            console.log("Rejected: Technical score is below 70");
        }
    } else {
        console.log("Rejected: Communication skill is not good");
    }
} else {
    console.log("Rejected: Degree not completed");
}