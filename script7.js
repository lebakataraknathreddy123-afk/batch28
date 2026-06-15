// Task 1 Traffic Signal Management

// Traffic Signal Management

let signalColor = "red"; // Change the color: red, yellow, or green

switch (signalColor.toLowerCase()) {
    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("GET READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid signal color");
}


// Task 2 Employee Attendance Report

// Employee Attendance Report

for (let i = 1; i <= 30; i++) {
    console.log(`Employee ${i} Present`);
}

// Task 3 ATM Cash Withdrawal

// ATM Cash Withdrawal

let balance = 10000;

while (balance > 0) {
    balance -= 500;
    console.log("Remaining Balance: ₹" + balance);
}

// Task 4 College Admission Eligibility

// College Admission Eligibility

let age = 18;
let percentage = 75;
let entranceExamPassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (entranceExamPassed) {
            console.log("Admission Approved");
        } else {
            console.log("Admission Rejected: Entrance Exam Not Passed");
        }
    } else {
        console.log("Admission Rejected: Percentage is below 70%");
    }
} else {
    console.log("Admission Rejected: Age is below 18");
}

// Task 5 Food Delivery Status

// Food Delivery Status

function deliveryStatus(customerName, foodItem, deliveryAddress) {
    console.log(
        `Hello ${customerName}, your order for ${foodItem} has been successfully delivered to ${deliveryAddress}.`
    );
}

// Function Call
deliveryStatus("Rahul", "Pizza", "MG Road, Bengaluru");

// Task 6 Salary Processing System

// Salary Processing System

function calculateSalary(basicSalary, allowances) {
    return basicSalary + allowances;
}

function calculateBonus(salary) {
    return salary * 0.10; // 10% bonus
}

// Calculate salary
let salary = calculateSalary(30000, 5000);

// Pass returned salary into bonus function
let bonus = calculateBonus(salary);

console.log("Salary: ₹" + salary);
console.log("Bonus: ₹" + bonus);
console.log("Total Amount: ₹" + (salary + bonus));

// Task 7 E-Commerce Discount Engine

// E-commerce Discount Engine

function generateInvoice(finalAmount) {
    console.log("Invoice Generated");
    console.log("Amount to Pay: ₹" + finalAmount);
}

function applyDiscount(amount, callback) {
    let discount = amount * 0.10; // 10% discount
    let finalAmount = amount - discount;

    console.log("Discount Applied: ₹" + discount);

    // Execute callback after discount calculation
    callback(finalAmount);
}

// Function Call
applyDiscount(5000, generateInvoice);

// Task 8 Promotional Offers

// Promotional Offers - Generator Function

function* promotionalOffers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

// Create generator object
const offers = promotionalOffers();

// Display offers one by one
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// Task 9 Student Database Merge

// Student Database Merge using Spread Operator

const scienceStudents = ["Rahul", "Priya", "Amit"];
const commerceStudents = ["Neha", "Karan", "Sneha"];

// Merge both arrays
const studentDatabase = [...scienceStudents, ...commerceStudents];

console.log(studentDatabase);

// Task 10 Online Exam System

// Online Exam System using Rest Operator

function calculateTotalMarks(studentName, ...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log("Student Name: " + studentName);
    console.log("Total Marks: " + total);
}

// Function Call
calculateTotalMarks("Rahul", 85, 90, 78, 88, 92);

// Task 11 Employee Profile 

// Employee Profile - Object Destructuring

const employee = {
    name: "Rahul",
    department: "IT",
    salary1: 50000,
    experience: 3
};

// Destructuring the object
const { name, department, salary1, experience } = employee;

// Display values separately
console.log("Name:", name);
console.log("Department:", department);
console.log("Salary:", salary);
console.log("Experience:", experience + " years");

// Task 12 Product Inventory Filter


// Product Inventory Filter using filter()

const products = [
    { name: "Laptop", price: 65000, category: "Electronics" },
    { name: "Mouse", price: 800, category: "Electronics" },
    { name: "Mobile", price: 20000, category: "Electronics" },
    { name: "Shoes", price: 3000, category: "Fashion" },
    { name: "Smart Watch", price: 7000, category: "Electronics" }
];

// Filter products above ₹5000
const filteredProducts = products.filter(product => product.price > 5000);

console.log("Products above ₹5000:");
console.log(filteredProducts);

// Task 13 Find First Premium Customer 

// Find First Premium Customer using find()

const customers = [
    { name: "Aman", purchase: 12000 },
    { name: "Neha", purchase: 45000 },
    { name: "Ravi", purchase: 52000 },
    { name: "Sneha", purchase: 80000 },
    { name: "Kiran", purchase: 30000 }
];

// Find first customer with purchase > 50000
const premiumCustomer = customers.find(customer => customer.purchase > 50000);

console.log("First Premium Customer:");
console.log(premiumCustomer);

// Task 14 Company Expense Tracker

// Company Expense Tracker using reduce()

const expenses = [
    5000,
    12000,
    7500,
    3000,
    18000,
    2500
];

// Calculate total expenses
const totalExpenses = expenses.reduce((total, expense) => {
    return total + expense;
}, 0);

console.log("Total Company Expenses: ₹" + totalExpenses);

// Task 15 Gaming Tournament Verification 

// Gaming Tournament Verification using every()

const players = [
    { name: "Aman", age: 20 },
    { name: "Neha", age: 22 },
    { name: "Ravi", age: 19 },
    { name: "Sneha", age: 17 }
];

// Check if all players are above 18
const isEligible = players.every(player => player.age > 18);

if (isEligible) {
    console.log("All players are eligible for the tournament");
} else {
    console.log("Not all players are eligible (Minimum age is 18)");
}

// Task 16 Job Portal Search

// Job Portal Search using some()

const candidates = [
    { name: "Aman", skills: ["Java", "SQL"] },
    { name: "Neha", skills: ["HTML", "CSS", "React"] },
    { name: "Ravi", skills: ["Python", "Django"] },
    { name: "Sneha", skills: ["JavaScript", "Node.js"] }
];

// Check if at least one candidate knows React
const hasReactDeveloper = candidates.some(candidate =>
    candidate.skills.includes("React")
);

if (hasReactDeveloper) {
    console.log("At least one candidate knows React");
} else {
    console.log("No candidate knows React");
}

// Task 17 Mobile Number Validator


// Mobile Number Validator using string methods

function validateMobileNumber(mobileNumber) {
    if (mobileNumber.length === 10 &&
        (mobileNumber.startsWith("6") ||
         mobileNumber.startsWith("7") ||
         mobileNumber.startsWith("8") ||
         mobileNumber.startsWith("9"))) {
        
        console.log("Valid Mobile Number");
    } else {
        console.log("Invalid Mobile Number");
    }
}

// Test cases
validateMobileNumber("9876543210");
validateMobileNumber("1234567890");
validateMobileNumber("8123456789");

// Task 18 URL Slug Generator 

// URL Slug Generator using split() and join()

function generateSlug(title) {
    const slug = title
        .toLowerCase()
        .split(" ")
        .join("-");

    console.log(slug);
}

// Test
generateSlug("Learn JavaScript Complete Course");

// Task 19  Employee Sorting Dashboard

// Employee Sorting Dashboard using sort()

const employees = [
    { name: "Aman", salary: 45000 },
    { name: "Neha", salary: 75000 },
    { name: "Ravi", salary: 52000 },
    { name: "Sneha", salary: 68000 }
];

// Low → High
const lowToHigh = [...employees].sort((a, b) => a.salary - b.salary);

// High → Low
const highToLow = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Low to High Salary:");
console.log(lowToHigh);

console.log("High to Low Salary:");
console.log(highToLow);

// Task 20 Movie Booking System

// Movie Booking System using map()

const movies = [
    "Avengers",
    "Inception",
    "Interstellar",
    "Titanic"
];

// Create booking IDs for each movie
const bookingIDs = movies.map((movie, index) => {
    return {
        movieName: movie,
        bookingId: "MOV" + (index + 1)
    };
});

console.log(bookingIDs);