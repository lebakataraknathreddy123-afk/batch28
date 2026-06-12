// Task 1 employee bonus calculator
let employeeName = "Ravi";
let salary = 50000;
let experience = 4;

// Calculate bonus
let bonus = 0;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 2) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

// Final salary
let finalSalary = salary + bonus;

// Output
console.log("Employee Name:", employeeName);
console.log("Original Salary:", salary);
console.log("Experience:", experience, "years");
console.log("Final Salary:", finalSalary);

// Task 2 college admission system

// Student details
let studentName = "Rahul";
let age = 18;
let percentage = 75;

// Check admission eligibility
if (age >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}

// Task 3 food delivery menu
let choice = 1;

switch (choice) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;

    case 2:
        console.log("Order Confirmed : Burger");
        break;

    case 3:
        console.log("Order Confirmed : Shawarma");
        break;

    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;

    default:
        console.log("Invalid Selection");
}


//  Task 4 attendance tracker

// Store 10 student names in an array
let students = [
    "Rahul",
    "Priya",
    "Amit",
    "Sneha",
    "Kiran",
    "Anjali",
    "Vikram",
    "Pooja",
    "Ravi",
    "Meena"
];

// Print all students using for-of loop
console.log("Student Names:");
for (let student of students) {
    console.log(student);
}

// Count total students
let count = 0;
for (let student of students) {
    count++;
}

console.log("Total Students:", count);

// Task 5 E-commerce cart

let cart = [
  { product: "Mobile", price: 15000 },
  { product: "Headset", price: 2000 },
  { product: "Charger", price: 1000 }
];

// Print all products
console.log("Products:");
for (let item of cart) {
    console.log(item.product);
}

// Calculate total cart value
let total = 0;
for (let item of cart) {
    total += item.price;
}
console.log("Total Cart Value:", total);

// Find most expensive product
let expensiveProduct = cart[0];

for (let item of cart) {
    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("Most Expensive Product:", expensiveProduct.product);
console.log("Price:", expensiveProduct.price);

//  Task 6 Bank account management

let balance = 10000;

// Deposit function
function deposit(amount) {
    balance += amount;
    console.log("Deposited:", amount);
}

// Withdraw function
function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn:", amount);
    } else {
        console.log("Insufficient Balance");
    }
}

// Check balance function
function checkBalance() {
    console.log("Remaining Balance:", balance);
}

// Function calls
deposit(5000);
withdraw(3000);
checkBalance();

// Task 7 Movie ticket booking

// let age = 25; 

if (age < 5) {
    console.log("Free Ticket");
} else if (age >= 5 && age <= 18) {
    console.log("Ticket Price: ₹100");
} else if (age > 18 && age <= 60) {
    console.log("Ticket Price: ₹200");
} else {
    console.log("Ticket Price: ₹120");
}


// Task 8 online shopping discount 

let purchaseAmount = 6000;
let discount = 0;

// Calculate discount
if (purchaseAmount > 5000) {
    discount = purchaseAmount * 0.20;
} else if (purchaseAmount > 3000) {
    discount = purchaseAmount * 0.10;
} else if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.05;
}

// Final amount
let finalAmount = purchaseAmount - discount;

// Print details
console.log("Original Amount:", purchaseAmount);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

//Task 9 food inventory system

// Create inventory array
let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

// Add 2 items
inventory.push("Bread");
inventory.push("Butter");

// Remove first item
inventory.shift();

// Remove last item
inventory.pop();

// Check whether "Milk" exists
if (inventory.includes("Milk")) {
    console.log("Milk exists in inventory");
} else {
    console.log("Milk does not exist in inventory");
}

// Print final inventory
console.log("Final Inventory:");
for (let item of inventory) {
    console.log(item);
}


// Task 10 Hospital patient management

// Create patient object
let patient = {
    patientName: "Ravi Kumar",
    age: 35,
    disease: "Fever",
    doctor: "Dr. Sharma"
};

// Display all details using for-in loop
console.log("Patient Details:");
for (let key in patient) {
    console.log(key + ":", patient[key]);
}

// Destructuring
let { patientName, age1, disease, doctor } = patient;

// Print separately
console.log("\nUsing Destructuring:");
console.log("Patient Name:", patientName);
console.log("Age:", age);
console.log("Disease:", disease);
console.log("Doctor:", doctor);

// Task 11 Amazon order tracker

// Callback function
function sendSMS() {
    console.log("SMS Sent To Customer");
}

// Higher-order function
function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback(); // calling callback function
}

// Function call
placeOrder(sendSMS);


// Task 12 Cashback offer generator

// Generator function
function* offerGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

// Create generator object
let offers = offerGenerator();

// Display each offer using .next()
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// Task 13 Employee Database

// Array of employee objects
let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

// Print all employee names
console.log("Employee Names:");
for (let emp of employees) {
    console.log(emp.name);
}

// Calculate total salary expense
let totalSalary = 0;
for (let emp of employees) {
    totalSalary += emp.salary;
}
console.log("Total Salary Expense:", totalSalary);

// Find employee with highest salary
let highestPaid = employees[0];

for (let emp of employees) {
    if (emp.salary > highestPaid.salary) {
        highestPaid = emp;
    }
}

console.log("Highest Salary Employee:", highestPaid.name);
console.log("Salary:", highestPaid.salary);

// Task 14 Railway reservation system

let totalSeats = 50;

// Book seats function
function bookSeats(seatsToBook) {
    if (seatsToBook <= totalSeats) {
        totalSeats -= seatsToBook;
        console.log(seatsToBook + " seat(s) booked successfully");
    } else {
        console.log("Booking Rejected: Not enough seats available");
    }
}

// Check available seats
function checkAvailableSeats() {
    console.log("Available Seats:", totalSeats);
}

// Function calls
bookSeats(10);
bookSeats(20);
checkAvailableSeats();
bookSeats(25); // this should fail if not enough seats
checkAvailableSeats();

// Task 15 Mobile Store Billing System


// Product list (stored in object)
let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

// Customer selected products (example selection)
let selectedItems = ["Mobile", "Headphone", "Smartwatch"];

// Variables for calculation
let totalAmount = 0;

// Print selected products and calculate total
console.log("Selected Products:");

for (let item of selectedItems) {
    console.log(item + " - ₹" + products[item]);
    totalAmount += products[item];
}

// GST calculation
let gst = totalAmount * 0.18;
let finalBill = totalAmount + gst;

// Output
console.log("\nTotal Amount:", totalAmount);
console.log("GST (18%):", gst);
console.log("Final Bill:", finalBill);