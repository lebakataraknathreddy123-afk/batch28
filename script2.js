// Task 1
let marks = 75;
if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
}

console.log(marks >= 35 ? "Pass" : "Fail");


// Task 2
let salary = 25000;

let bonus = salary * 0.10;

let finalsalary = salary + bonus;

console.log(
    "original salary :" , salary,
    "bonus :" , bonus,
    "finalsalary :" , finalsalary
);

// Task 3
 let email = "admin@gmail.com";
    let password = "12345";
    if (email === "admin@gmail.com" && password === "12345") {
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }

    // Task 4

    let price = 2000;
    let discount = price > 1000 ? price * 0.20 :  0;
    let finalPrice = price - discount;
       console.log(
            "price :" , price,
            "discount :" , discount,
            "finalPrice :" , finalPrice
        );
        

        // Task 5
        let products = ["laptop", "mobile", "mouse","keyboard"];
        console.log("first product :", products[0]);
        console.log("second product :", products[products.length - 1]);
        console.log("total products :", products.length);

        //Task 6

        let employee = {
            name: "Tarak",
            department: "Development",
            salary: 30000
        };
        console.log(employee);
        console.log("employee name :", employee.name);
        console.log("salary :", employee.salary);

        
        // Task 7

        let shirt = 500;
        let pant=1000;
        let shoe = 1500;

        let totalbill = shirt + pant + shoe;
        
        let finalamount= totalbill - discount;
      
        console.log("totalbill :" , totalbill,);
        console.log("discount :" , discount);
        console.log("finalamount :" , finalamount);

        // Task 8
        let age = 19;
        if (age >= 18) {
            console.log("You are eligible to vote.");
        } else {
            console.log("You are not eligible to vote.");
        }   
        
        // Task 9
        let a = 10;
        console.log("initial value of a :", a);
        a++;
        console.log("after a++ :", a);
        ++a;
        console.log("after ++a :", a);
        a--;
        console.log("after a-- :", a);
        --a;
        console.log("after --a :", a);

        // Task 10  
        let ispresent = true;
        let completedtask = true;
        if (ispresent && completedtask) {
            console.log("eligible for salary");
        } else {
            console.log("Not eligible");
        }

        console.clear();

        let employee = {
            id: 101,
            name: "Tarak",
            department: "Development",
            salary: 30000
            experience: 2
        };
        
        let bonus = employee.salary * 0.10;
        let finalsalary = employee.salary + bonus;
        let performance = employee.experience >= 2 ? "Good" : "Average";

        console.log(
            "employee id": , employee.id,
            console.log("employee name :", employee.name);
            console.log("employee department :", employee.department);
            console.log(" salary :", employee.salary);
            console.log("experience :", employee.experience, "years");
            console.log("bonus :", bonus);
            console.log("final salary :", finalsalary);
            console.log("performance status :", performance status);
