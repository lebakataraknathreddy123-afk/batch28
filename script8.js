//  Task 1 Employee Salary Management

// Employee Database
const employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 50000 },
  { id: 3, name: "John", salary: 75000 }
];

// 1. Find employees whose salary is above ₹40,000
const highSalaryEmployees = employees.filter(emp => emp.salary > 40000);
console.log("Employees with salary above ₹40,000:");
console.log(highSalaryEmployees);

// 2. Find the first employee whose salary is above ₹60,000
const firstEmployeeAbove60k = employees.find(emp => emp.salary > 60000);
console.log("First employee with salary above ₹60,000:");
console.log(firstEmployeeAbove60k);

// 3. Calculate total company salary expense
const totalSalaryExpense = employees.reduce(
  (total, emp) => total + emp.salary,
  0
);
console.log("Total Company Salary Expense:", totalSalaryExpense);

// 4. Create a new array containing only employee names
const employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:");
console.log(employeeNames);

// Task 2 College Admission Form 

// Function to check admission eligibility
function checkAdmission(name, age, percentage) {
  const student = {
    name: name,
    age: age,
    percentage: percentage
  };

  if (student.age >= 18 && student.percentage >= 60) {
    return `${student.name} is Eligible for Admission`;
  } else {
    return `${student.name} is Not Eligible for Admission`;
  }
}

// Example
console.log(checkAdmission("Rahul", 19, 75));
console.log(checkAdmission("Kavin", 17, 80));
console.log(checkAdmission("John", 20, 55));


// Task 3 E-Commerce Cart

// Cart Data
const cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

// 1. Calculate Total Bill
const totalBill = cart.reduce((total, item) => {
  return total + item.price * item.qty;
}, 0);

console.log("Total Bill: ₹" + totalBill);

// 2. Find the Most Expensive Product
const mostExpensiveProduct = cart.reduce((max, item) => {
  return item.price > max.price ? item : max;
});

console.log("Most Expensive Product:");
console.log(mostExpensiveProduct);

// 3. Display All Product Names
const productNames = cart.map(item => item.product);

console.log("Product Names:");
console.log(productNames);


// Task 4 Traffic Fine System

// Function to check traffic signal action and fine

function trafficFineSystem(signal) {
  switch (signal.toLowerCase()) {
    case "red":
      console.log("Action: Stop");
      console.log("Fine for crossing red signal: ₹1000");
      break;

    case "yellow":
      console.log("Action: Get Ready / Slow Down");
      console.log("Fine for ignoring yellow signal: ₹500");
      break;

    case "green":
      console.log("Action: Go");
      console.log("No Fine");
      break;

    default:
      console.log("Invalid Traffic Signal");
  }
}

// Examples
trafficFineSystem("red");
trafficFineSystem("yellow");
trafficFineSystem("green");

// Task 5 Student Result Processing

// Students Data
const students = [
  { name: "A", mark: 95 },
  { name: "B", mark: 45 },
  { name: "C", mark: 80 },
  { name: "D", mark: 30 }
];

// 1. Find Passed Students (mark >= 50)
const passedStudents = students.filter(student => student.mark >= 50);

console.log("Passed Students:");
console.log(passedStudents);

// 2. Find Failed Students (mark < 50)
const failedStudents = students.filter(student => student.mark < 50);

console.log("Failed Students:");
console.log(failedStudents);

// 3. Create Grade List
const gradeList = students.map(student => {
  let grade;

  if (student.mark >= 90) {
    grade = "A+";
  } else if (student.mark >= 75) {
    grade = "A";
  } else if (student.mark >= 50) {
    grade = "B";
  } else {
    grade = "F";
  }

  return {
    name: student.name,
    mark: student.mark,
    grade: grade
  };
});

console.log("Grade List:");
console.log(gradeList);

// Task 6 Online Food Delivery 

// Function to place an order
function placeOrder(customerName, ...items) {
  console.log("Customer Name:", customerName);
  console.log("Ordered Items:", items);
  console.log("Total Item Count:", items.length);
}

// Example
placeOrder("Rahul", "Pizza", "Burger", "French Fries", "Coke");

// Task 7 Bank Account System 

// Initial Account Balance
let balance = 5000;

// Deposit Function
function deposit(amount) {
  balance += amount;
  return balance;
}

// Withdraw Function
function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    return balance;
  } else {
    return "Insufficient Balance";
  }
}

// Check Balance Function
function checkBalance() {
  return balance;
}

// Example Transactions
console.log("Current Balance:", checkBalance());

console.log("After Deposit ₹2000:", deposit(2000));

console.log("After Withdraw ₹1500:", withdraw(1500));

console.log("Final Balance:", checkBalance());

// Task 8 Movie Ticket Booking 

// Booked Seats Array
let bookedSeats = ["A1", "A3", "B2"];

// Function to check seat availability
function checkSeatAvailability(seatNumber) {
  if (bookedSeats.includes(seatNumber)) {
    console.log(`Seat ${seatNumber} is already booked.`);
  } else {
    console.log(`Seat ${seatNumber} is available.`);
  }
}

// Function to display all booked seats
function printBookedSeats() {
  console.log("Booked Seats:");

  for (let i = 0; i < bookedSeats.length; i++) {
    console.log(bookedSeats[i]);
  }
}

// Examples
checkSeatAvailability("A1");
checkSeatAvailability("A2");

printBookedSeats();

 // Task 9 User Login Validation 

 // Function to validate user login details
function validateLogin(username, password, email) {

  // Check username
  if (username.includes(" ")) {
    return "Invalid Username: Username should not contain spaces.";
  }

  // Check password length
  if (password.length < 8) {
    return "Invalid Password: Password must be at least 8 characters long.";
  }

  // Check email
  if (!email.includes("@")) {
    return "Invalid Email: Email must contain '@'.";
  }

  return "Login Details Valid.";
}

// Examples
console.log(validateLogin("rahul123", "mypassword", "rahul@gmail.com"));
console.log(validateLogin("rahul 123", "mypassword", "rahul@gmail.com"));
console.log(validateLogin("rahul123", "pass123", "rahul@gmail.com"));
console.log(validateLogin("rahul123", "mypassword", "rahulgmail.com"));

// Task 10 Product API Dashboard

// Fetch products from API
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    // 1. Display Product Titles
    console.log("Product Titles:");
    products.forEach(product => {
      console.log(product.title);
    });

    // 2. Find Products Above ₹1000
    // (API prices are in USD, assuming comparison value = 1000)
    const expensiveProducts = products.filter(
      product => product.price > 1000
    );

    console.log("\nProducts Above ₹1000:");
    console.log(expensiveProducts);

    // 3. Count Total Products
    console.log("\nTotal Products:", products.length);

  })
  .catch(error => {
    console.log("Error fetching products:", error);
  });

  // Task 11  Birthday Day Finder

  // Function to find birthday details
function getBirthdayDetails(dob) {
  const date = new Date(dob);

  // Check if valid date
  if (isNaN(date.getTime())) {
    return "Invalid Date of Birth";
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const day = date.getDate();
  const month = date.getMonth() + 1; // Months start from 0
  const year = date.getFullYear();
  const weekday = days[date.getDay()];

  return `
Day: ${day}
Month: ${month}
Year: ${year}
Weekday: ${weekday}
`;
}

// Example usage
console.log(getBirthdayDetails("2002-08-15"));
console.log(getBirthdayDetails("1999-12-05"));

// Task 12 Netflix Subscription System


// Function to show Netflix plan details
function getNetflixPlan(plan) {

  const result =
    plan === "Mobile"
      ? "Mobile Plan: ₹149 - Watch on mobile only"
      : plan === "Basic"
      ? "Basic Plan: ₹199 - Watch on 1 screen (SD quality)"
      : plan === "Standard"
      ? "Standard Plan: ₹499 - Watch on 2 screens (HD quality)"
      : plan === "Premium"
      ? "Premium Plan: ₹649 - Watch on 4 screens (Ultra HD quality)"
      : "Invalid Plan Selected";

  return result;
}

// Examples
console.log(getNetflixPlan("Mobile"));
console.log(getNetflixPlan("Basic"));
console.log(getNetflixPlan("Standard"));
console.log(getNetflixPlan("Premium"));
console.log(getNetflixPlan("Gold"));

// Task 13 Hospital Patient Management 

// Patients Data
const patients = [
  { id: 1, name: "Arjun", condition: "normal" },
  { id: 2, name: "Meena", condition: "critical" },
  { id: 3, name: "Ravi", condition: "stable" },
  { id: 4, name: "Sara", condition: "critical" }
];

// 1. Find Critical Patients
const criticalPatients = patients.filter(
  patient => patient.condition === "critical"
);

console.log("Critical Patients:");
console.log(criticalPatients);

// 2. Find Patient by ID
function findPatientById(id) {
  const patient = patients.find(p => p.id === id);

  if (patient) {
    return patient;
  } else {
    return "Patient not found";
  }
}

console.log("Patient with ID 2:");
console.log(findPatientById(2));

// 3. Count Total Patients
const totalPatients = patients.length;

console.log("Total Patients:", totalPatients);

// Task 14 Inventory Management System 

// Inventory Arrays
const inventory1 = [
  { id: 1, product: "Laptop", stock: 10 },
  { id: 2, product: "Mouse", stock: 50 }
];

const inventory2 = [
  { id: 3, product: "Keyboard", stock: 30 },
  { id: 4, product: "Monitor", stock: 20 }
];

// 1. Merge two inventory arrays (Spread Operator)
const mergedInventory = [...inventory1, ...inventory2];

console.log("Merged Inventory:");
console.log(mergedInventory);

// 2. Extract product details using destructuring
console.log("\nProduct Details:");

mergedInventory.forEach(item => {
  const { id, product, stock } = item;
  console.log(`ID: ${id}, Product: ${product}, Stock: ${stock}`);
});

// 3. Add new products using Spread Operator
const newProducts = [
  { id: 5, product: "Printer", stock: 15 },
  { id: 6, product: "Scanner", stock: 8 }
];

const updatedInventory = [...mergedInventory, ...newProducts];

console.log("\nUpdated Inventory:");
console.log(updatedInventory);

// Task 15 WhatsApp Group Management 

// WhatsApp Group Members
let group = ["Rahul", "Kavin", "John"];

// 1. Add members (push - adds at end)
group.push("Amit");
console.log("After push:", group);

// 2. Add member at beginning (unshift)
group.unshift("Sara");
console.log("After unshift:", group);

// 3. Remove last member (pop)
group.pop();
console.log("After pop:", group);

// 4. Remove first member (shift)
group.shift();
console.log("After shift:", group);

// 5. Insert member at specific position (splice)
// Syntax: splice(index, deleteCount, item)
group.splice(1, 0, "David");
console.log("After inserting at position 1:", group);

// Final group list
console.log("Final Group List:", group);


