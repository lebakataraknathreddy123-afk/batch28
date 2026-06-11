 // Task 1

 // Array of 5 student objects
const students = [
  {
    id: 1,
    name: "Rahul",
    department: "Computer Science",
    mark: 92
  },
  {
    id: 2,
    name: "Priya",
    department: "Information Technology",
    mark: 78
  },
  {
    id: 3,
    name: "Arun",
    department: "Electronics",
    mark: 85
  },
  {
    id: 4,
    name: "Sneha",
    department: "Mechanical",
    mark: 65
  },
  {
    id: 5,
    name: "Karan",
    department: "Civil",
    mark: 45
  }
];

// 1. Display all student names
console.log("Student Names:");
students.forEach(student => {
  console.log(student.name);
});

// 2. Calculate total marks
const totalMarks = students.reduce((total, student) => total + student.mark, 0);
console.log("\nTotal Marks:", totalMarks);

// 3. Find students who scored above 80
const above80 = students.filter(student => student.mark > 80);
console.log("\nStudents Scoring Above 80:");
above80.forEach(student => {
  console.log(student.name, "-", student.mark);
});

// 4. Function to determine grade
function getGrade(mark) {
  if (mark >= 90) {
    return "A";
  } else if (mark >= 75) {
    return "B";
  } else if (mark >= 50) {
    return "C";
  } else {
    return "Fail";
  }
}

// Display grades
console.log("\nStudent Grades:");
students.forEach(student => {
  console.log(`${student.name}: ${getGrade(student.mark)}`);
});

// 5. Function to print student details
function printStudentDetails(student) {
  console.log(`
ID: ${student.id}
Name: ${student.name}
Department: ${student.department}
Mark: ${student.mark}
Grade: ${getGrade(student.mark)}
---------------------------
`);
}

// Print details of all students
console.log("\nStudent Details:");
students.forEach(student => {
  printStudentDetails(student);
});


// Task 2

// Array of employee objects
const employees = [
  {
    id: 1,
    name: "Amit",
    salary: 45000,
    department: "IT"
  },
  {
    id: 2,
    name: "Priya",
    salary: 28000,
    department: "HR"
  },
  {
    id: 3,
    name: "Rahul",
    salary: 35000,
    department: "Finance"
  },
  {
    id: 4,
    name: "Sneha",
    salary: 50000,
    department: "IT"
  },
  {
    id: 5,
    name: "Karan",
    salary: 25000,
    department: "Marketing"
  }
];

// 1. Print all employee names
console.log("Employee Names:");
employees.forEach(employee => {
  console.log(employee.name);
});

// 2. Calculate total company salary expense
const totalSalaryExpense = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);

console.log("\nTotal Company Salary Expense: ₹" + totalSalaryExpense);

// 3. Display employees earning above ₹30,000
console.log("\nEmployees Earning Above ₹30,000:");

const highEarners = employees.filter(employee => employee.salary > 30000);

highEarners.forEach(employee => {
  console.log(`${employee.name} - ₹${employee.salary}`);
});

// 4. Department description using switch statement
function getDepartmentDescription(department) {
  switch (department) {
    case "IT":
      return "Handles software development and technical support.";
    case "HR":
      return "Manages recruitment and employee welfare.";
    case "Finance":
      return "Handles company accounts and budgeting.";
    case "Marketing":
      return "Promotes products and services.";
    default:
      return "Department information not available.";
  }
}

console.log("\nDepartment Descriptions:");
employees.forEach(employee => {
  console.log(
    `${employee.name} (${employee.department}): ${getDepartmentDescription(
      employee.department
    )}`
  );
});

// 5. Callback function to generate payroll reports
function generatePayrollReport(employee, callback) {
  callback(employee);
}

function payrollReport(employee) {
  console.log(`
--------------------------
Employee ID : ${employee.id}
Name        : ${employee.name}
Department  : ${employee.department}
Salary      : ₹${employee.salary}
--------------------------
`);
}

console.log("\nPayroll Reports:");
employees.forEach(employee => {
  generatePayrollReport(employee, payrollReport);
});


// Task 3

// Array of food items
const foodItems = [
  {
    id: 1,
    foodName: "Chicken Biryani",
    price: 250,
    category: "Main Course"
  },
  {
    id: 2,
    foodName: "Veg Burger",
    price: 150,
    category: "Fast Food"
  },
  {
    id: 3,
    foodName: "Pizza",
    price: 300,
    category: "Fast Food"
  },
  {
    id: 4,
    foodName: "Ice Cream",
    price: 120,
    category: "Dessert"
  },
  {
    id: 5,
    foodName: "Paneer Butter Masala",
    price: 280,
    category: "Main Course"
  }
];

// 1. Display all food names
console.log("Food Names:");
foodItems.forEach(food => {
  console.log(food.foodName);
});

// 2. Calculate total menu value
const totalMenuValue = foodItems.reduce(
  (total, food) => total + food.price,
  0
);

console.log("\nTotal Menu Value: ₹" + totalMenuValue);

// 3. Show foods above ₹200
console.log("\nFoods Above ₹200:");

const expensiveFoods = foodItems.filter(food => food.price > 200);

expensiveFoods.forEach(food => {
  console.log(`${food.foodName} - ₹${food.price}`);
});

// 4. Category descriptions using switch statement
function getCategoryDescription(category) {
  switch (category) {
    case "Main Course":
      return "Complete meal items served as the main dish.";
    case "Fast Food":
      return "Quick and convenient ready-to-eat food.";
    case "Dessert":
      return "Sweet dishes served after meals.";
    default:
      return "Category description not available.";
  }
}

console.log("\nCategory Descriptions:");

foodItems.forEach(food => {
  console.log(
    `${food.foodName} (${food.category}): ${getCategoryDescription(
      food.category
    )}`
  );
});

// 5. Order confirmation callback function
function placeOrder(food, callback) {
  callback(food);
}

function orderConfirmation(food) {
  console.log(`
--------------------------------
Order Confirmed!
Food Item : ${food.foodName}
Price     : ₹${food.price}
Category  : ${food.category}
--------------------------------
`);
}

console.log("\nOrder Confirmations:");

// Example orders
placeOrder(foodItems[0], orderConfirmation);
placeOrder(foodItems[2], orderConfirmation);

// Task 4

// Array of movie objects
const movies = [
  {
    movieName: "Leo",
    ticketPrice: 250,
    availableSeats: 50,
    language: "Tamil"
  },
  {
    movieName: "Jawan",
    ticketPrice: 300,
    availableSeats: 40,
    language: "Hindi"
  },
  {
    movieName: "Salaar",
    ticketPrice: 280,
    availableSeats: 0,
    language: "Telugu"
  },
  {
    movieName: "Kantara",
    ticketPrice: 220,
    availableSeats: 25,
    language: "Kannada"
  },
  {
    movieName: "KGF 2",
    ticketPrice: 350,
    availableSeats: 15,
    language: "Kannada"
  }
];

// 1. Display all movie names
console.log("Movie Names:");
movies.forEach(movie => {
  console.log(movie.movieName);
});

// 2. Calculate total available seats
const totalSeats = movies.reduce(
  (total, movie) => total + movie.availableSeats,
  0
);

console.log("\nTotal Available Seats:", totalSeats);

// 3. Check whether booking is possible
function checkBooking(movie, seatsRequired) {
  if (movie.availableSeats >= seatsRequired) {
    console.log(
      `Booking possible for ${movie.movieName}. ${seatsRequired} seat(s) available.`
    );
  } else {
    console.log(
      `Booking not possible for ${movie.movieName}. Only ${movie.availableSeats} seat(s) available.`
    );
  }
}

console.log("\nBooking Status:");
checkBooking(movies[0], 5);
checkBooking(movies[2], 2);

// 4. Movie language description using switch statement
function getLanguageDescription(language) {
  switch (language) {
    case "Tamil":
      return "Tamil Language Movie";
    case "Hindi":
      return "Hindi Language Movie";
    case "Telugu":
      return "Telugu Language Movie";
    case "Kannada":
      return "Kannada Language Movie";
    default:
      return "Language information not available";
  }
}

console.log("\nMovie Language Details:");
movies.forEach(movie => {
  console.log(
    `${movie.movieName}: ${getLanguageDescription(movie.language)}`
  );
});

// 5. Booking confirmation using callback
function bookTicket(movie, seats, callback) {
  if (movie.availableSeats >= seats) {
    movie.availableSeats -= seats;
    callback(movie, seats);
  } else {
    console.log(`Cannot book ${seats} seat(s) for ${movie.movieName}.`);
  }
}

function bookingConfirmation(movie, seats) {
  console.log(`
----------------------------------
Booking Confirmed!
Movie Name      : ${movie.movieName}
Tickets Booked  : ${seats}
Ticket Price    : ₹${movie.ticketPrice}
Remaining Seats : ${movie.availableSeats}
----------------------------------
`);
}

console.log("\nBooking Confirmations:");

bookTicket(movies[1], 3, bookingConfirmation);
bookTicket(movies[3], 2, bookingConfirmation);

// Task 5

// Array of patient objects
const patients = [
  {
    patientId: 101,
    patientName: "Ramesh",
    age: 65,
    disease: "Heart Disease"
  },
  {
    patientId: 102,
    patientName: "Priya",
    age: 45,
    disease: "Diabetes"
  },
  {
    patientId: 103,
    patientName: "Suresh",
    age: 72,
    disease: "Cancer"
  },
  {
    patientId: 104,
    patientName: "Anitha",
    age: 58,
    disease: "Asthma"
  },
  {
    patientId: 105,
    patientName: "Kumar",
    age: 68,
    disease: "Diabetes"
  }
];

// 1. Display all patient names
console.log("Patient Names:");
patients.forEach(patient => {
  console.log(patient.patientName);
});

// 2. Count total patients
const totalPatients = patients.length;
console.log("\nTotal Patients:", totalPatients);

// 3. Print patients above age 60
console.log("\nPatients Above Age 60:");

const seniorPatients = patients.filter(patient => patient.age > 60);

seniorPatients.forEach(patient => {
  console.log(
    `${patient.patientName} - Age: ${patient.age}`
  );
});

// 4. Disease department using switch statement
function getDepartment(disease) {
  switch (disease) {
    case "Heart Disease":
      return "Cardiology Department";
    case "Diabetes":
      return "Endocrinology Department";
    case "Cancer":
      return "Oncology Department";
    case "Asthma":
      return "Pulmonology Department";
    default:
      return "General Medicine Department";
  }
}

console.log("\nDisease Departments:");

patients.forEach(patient => {
  console.log(
    `${patient.patientName}: ${getDepartment(patient.disease)}`
  );
});

// 5. Appointment confirmation using callback
function bookAppointment(patient, callback) {
  callback(patient);
}

function appointmentConfirmation(patient) {
  console.log(`
----------------------------------
Appointment Confirmed
Patient ID   : ${patient.patientId}
Patient Name : ${patient.patientName}
Age          : ${patient.age}
Disease      : ${patient.disease}
Department   : ${getDepartment(patient.disease)}
----------------------------------
`);
}

console.log("\nAppointment Confirmations:");

bookAppointment(patients[0], appointmentConfirmation);
bookAppointment(patients[2], appointmentConfirmation);

// Task 6

// Array of book objects
const books = [
  {
    bookId: 1,
    bookName: "JavaScript Basics",
    author: "John Smith",
    price: 650,
    category: "Programming"
  },
  {
    bookId: 2,
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    price: 450,
    category: "Novel"
  },
  {
    bookId: 3,
    bookName: "Data Structures",
    author: "Mark Allen",
    price: 800,
    category: "Education"
  },
  {
    bookId: 4,
    bookName: "Harry Potter",
    author: "J.K. Rowling",
    price: 550,
    category: "Fantasy"
  },
  {
    bookId: 5,
    bookName: "C Programming",
    author: "Dennis Ritchie",
    price: 700,
    category: "Programming"
  }
];

// 1. Display all book names
console.log("Book Names:");
books.forEach(book => {
  console.log(book.bookName);
});

// 2. Calculate total book value
const totalBookValue = books.reduce(
  (total, book) => total + book.price,
  0
);

console.log("\nTotal Book Value: ₹" + totalBookValue);

// 3. Display books above ₹500
console.log("\nBooks Above ₹500:");

const expensiveBooks = books.filter(book => book.price > 500);

expensiveBooks.forEach(book => {
  console.log(`${book.bookName} - ₹${book.price}`);
});

// 4. Book category descriptions using switch statement
function getCategoryDescription(category) {
  switch (category) {
    case "Programming":
      return "Books related to coding and software development.";
    case "Novel":
      return "Fictional story books for entertainment.";
    case "Education":
      return "Academic and learning materials.";
    case "Fantasy":
      return "Books with magical and imaginary themes.";
    default:
      return "General category.";
  }
}

console.log("\nBook Categories:");

books.forEach(book => {
  console.log(
    `${book.bookName}: ${getCategoryDescription(book.category)}`
  );
});

// 5. Function to issue a book
function issueBook(book) {
  console.log(`
----------------------------------
Book Issued Successfully!
Book ID    : ${book.bookId}
Book Name  : ${book.bookName}
Author     : ${book.author}
Price      : ₹${book.price}
Category   : ${book.category}
----------------------------------
`);
}

console.log("\nIssued Books:");

// Issue books
issueBook(books[0]);
issueBook(books[3]);

// Task 7

// Array of product objects
const products = [
  {
    productId: 1,
    productName: "Laptop",
    price: 50000,
    stock: 15
  },
  {
    productId: 2,
    productName: "Smartphone",
    price: 25000,
    stock: 8
  },
  {
    productId: 3,
    productName: "Headphones",
    price: 3000,
    stock: 20
  },
  {
    productId: 4,
    productName: "Smart Watch",
    price: 8000,
    stock: 5
  },
  {
    productId: 5,
    productName: "Keyboard",
    price: 1500,
    stock: 12
  }
];

// 1. Display all products
console.log("Product List:");
products.forEach(product => {
  console.log(product.productName);
});

// 2. Calculate inventory value
const inventoryValue = products.reduce(
  (total, product) => total + (product.price * product.stock),
  0
);

console.log("\nTotal Inventory Value: ₹" + inventoryValue);

// 3. Find products with stock less than 10
console.log("\nProducts with Stock Less Than 10:");

const lowStockProducts = products.filter(
  product => product.stock < 10
);

lowStockProducts.forEach(product => {
  console.log(`${product.productName} - Stock: ${product.stock}`);
});

// 4. Display stock status
function getStockStatus(stock) {
  if (stock === 0) {
    return "Out of Stock";
  } else if (stock < 10) {
    return "Low Stock";
  } else {
    return "In Stock";
  }
}

console.log("\nStock Status:");

products.forEach(product => {
  console.log(
    `${product.productName}: ${getStockStatus(product.stock)}`
  );
});

// 5. Generate product report using callback function
function generateReport(product, callback) {
  callback(product);
}

function productReport(product) {
  console.log(`
----------------------------------
Product ID   : ${product.productId}
Product Name : ${product.productName}
Price        : ₹${product.price}
Stock        : ${product.stock}
Status       : ${getStockStatus(product.stock)}
----------------------------------
`);
}

console.log("\nProduct Reports:");

products.forEach(product => {
  generateReport(product, productReport);
});


// Task 8

// Array of applicant objects
const applicants = [
  {
    name: "Rahul",
    age: 19,
    percentage: 85,
    department: "CSE"
  },
  {
    name: "Priya",
    age: 17,
    percentage: 75,
    department: "IT"
  },
  {
    name: "Arun",
    age: 20,
    percentage: 58,
    department: "ECE"
  },
  {
    name: "Sneha",
    age: 18,
    percentage: 92,
    department: "CSE"
  },
  {
    name: "Karan",
    age: 21,
    percentage: 65,
    department: "MECH"
  }
];

// 1. Display applicant names
console.log("Applicant Names:");
applicants.forEach(applicant => {
  console.log(applicant.name);
});

// 2. Check eligibility
function isEligible(applicant) {
  return applicant.age >= 18 && applicant.percentage >= 60;
}

// Display eligibility status
console.log("\nEligibility Status:");
applicants.forEach(applicant => {
  console.log(
    `${applicant.name}: ${
      isEligible(applicant) ? "Eligible" : "Not Eligible"
    }`
  );
});

// 3. Count eligible students
const eligibleStudents = applicants.filter(isEligible);

console.log(
  "\nTotal Eligible Students:",
  eligibleStudents.length
);

// 4. Department names using switch statement
function getDepartmentName(department) {
  switch (department) {
    case "CSE":
      return "Computer Science Engineering";
    case "IT":
      return "Information Technology";
    case "ECE":
      return "Electronics and Communication Engineering";
    case "MECH":
      return "Mechanical Engineering";
    default:
      return "Unknown Department";
  }
}

console.log("\nDepartment Details:");
applicants.forEach(applicant => {
  console.log(
    `${applicant.name}: ${getDepartmentName(
      applicant.department
    )}`
  );
});

// 5. Generate admission result using callback
function processAdmission(applicant, callback) {
  callback(applicant);
}

function admissionResult(applicant) {
  console.log(`
----------------------------------
Admission Result
Name       : ${applicant.name}
Age        : ${applicant.age}
Percentage : ${applicant.percentage}%
Department : ${getDepartmentName(applicant.department)}
Status     : ${
    isEligible(applicant)
      ? "Admission Granted"
      : "Admission Rejected"
  }
----------------------------------
`);
}

console.log("\nAdmission Results:");

applicants.forEach(applicant => {
  processAdmission(applicant, admissionResult);
});

// Task 9

// Array of passenger objects
const passengers = [
  {
    passengerId: 1,
    name: "Rahul",
    seatNumber: 12,
    ticketPrice: 500,
    busType: "AC"
  },
  {
    passengerId: 2,
    name: "Priya",
    seatNumber: 15,
    ticketPrice: 450,
    busType: "Non-AC"
  },
  {
    passengerId: 3,
    name: "Arun",
    seatNumber: 18,
    ticketPrice: 600,
    busType: "Sleeper"
  },
  {
    passengerId: 4,
    name: "Sneha",
    seatNumber: 20,
    ticketPrice: 550,
    busType: "AC"
  },
  {
    passengerId: 5,
    name: "Karan",
    seatNumber: 25,
    ticketPrice: 700,
    busType: "Sleeper"
  }
];

// 1. Display passenger names
console.log("Passenger Names:");
passengers.forEach(passenger => {
  console.log(passenger.name);
});

// 2. Calculate total collection
const totalCollection = passengers.reduce(
  (total, passenger) => total + passenger.ticketPrice,
  0
);

console.log("\nTotal Collection: ₹" + totalCollection);

// 3. Check occupied seats
console.log("\nOccupied Seats:");

passengers.forEach(passenger => {
  console.log(`Seat No: ${passenger.seatNumber}`);
});

// 4. Bus type descriptions using switch statement
function getBusTypeDescription(busType) {
  switch (busType) {
    case "AC":
      return "Air Conditioned Bus";
    case "Non-AC":
      return "Regular Non-Air Conditioned Bus";
    case "Sleeper":
      return "Sleeper Coach Bus";
    default:
      return "Unknown Bus Type";
  }
}

console.log("\nBus Type Details:");

passengers.forEach(passenger => {
  console.log(
    `${passenger.name}: ${getBusTypeDescription(passenger.busType)}`
  );
});

// 5. Generate ticket confirmation using callback
function bookTicket(passenger, callback) {
  callback(passenger);
}

function ticketConfirmation(passenger) {
  console.log(`
----------------------------------
Ticket Confirmed
Passenger ID : ${passenger.passengerId}
Name         : ${passenger.name}
Seat Number  : ${passenger.seatNumber}
Ticket Price : ₹${passenger.ticketPrice}
Bus Type     : ${getBusTypeDescription(passenger.busType)}
----------------------------------
`);
}

console.log("\nTicket Confirmations:");

passengers.forEach(passenger => {
  bookTicket(passenger, ticketConfirmation);
});

// Task 10 

// Array of mobile objects
const mobiles = [
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 75000,
    stock: 10
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    price: 80000,
    stock: 8
  },
  {
    brand: "Xiaomi",
    model: "Redmi Note 13",
    price: 18000,
    stock: 15
  },
  {
    brand: "OnePlus",
    model: "OnePlus 12",
    price: 65000,
    stock: 12
  },
  {
    brand: "Realme",
    model: "Realme Narzo 70",
    price: 16000,
    stock: 20
  }
];

// 1. Display all mobile names
console.log("Mobile Names:");
mobiles.forEach(mobile => {
  console.log(`${mobile.brand} ${mobile.model}`);
});

// 2. Calculate total stock value
const totalStockValue = mobiles.reduce(
  (total, mobile) => total + (mobile.price * mobile.stock),
  0
);

console.log("\nTotal Stock Value: ₹" + totalStockValue);

// 3. Show mobiles above ₹20,000
console.log("\nMobiles Above ₹20,000:");

const premiumMobiles = mobiles.filter(
  mobile => mobile.price > 20000
);

premiumMobiles.forEach(mobile => {
  console.log(
    `${mobile.brand} ${mobile.model} - ₹${mobile.price}`
  );
});

// 4. Brand category using switch statement
function getBrandCategory(brand) {
  switch (brand) {
    case "Apple":
      return "Premium Brand";
    case "Samsung":
      return "Flagship Android Brand";
    case "OnePlus":
      return "Performance Brand";
    case "Xiaomi":
      return "Budget-Friendly Brand";
    case "Realme":
      return "Value for Money Brand";
    default:
      return "Unknown Brand";
  }
}

console.log("\nBrand Categories:");

mobiles.forEach(mobile => {
  console.log(
    `${mobile.brand}: ${getBrandCategory(mobile.brand)}`
  );
});

// 5. Generate sales report using callback function
function generateSalesReport(mobile, callback) {
  callback(mobile);
}

function salesReport(mobile) {
  console.log(`
----------------------------------
Sales Report
Brand      : ${mobile.brand}
Model      : ${mobile.model}
Price      : ₹${mobile.price}
Stock      : ${mobile.stock}
Category   : ${getBrandCategory(mobile.brand)}
Stock Value: ₹${mobile.price * mobile.stock}
----------------------------------
`);
}

console.log("\nSales Reports:");

mobiles.forEach(mobile => {
  generateSalesReport(mobile, salesReport);
});
