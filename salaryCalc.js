// let basicSalary = 50000;
// let houseRent = basicSalary*20/100;
// let medical = basicSalary*10/100;
// let transport = basicSalary*5/100;
// let tax = basicSalary*8/100;
// let grossSalary = basicSalary+houseRent+medical+transport;
// let netSalary = grossSalary-tax;

// console.log("Basic Salary:" ,basicSalary);
// console.log("House Rent:",houseRent);
// console.log("Medical:",medical);
// console.log("Transport:",transport);
// console.log("Net Salary:",netSalary);

// Problem2

let pricePerUnit = 8.50;
let usedUnit = 350;
let serviceCharge = 150;
let vatAmount = 5;
let vatParcentage = vatAmount/100;
let energyCost = pricePerUnit * usedUnit;
let subTotal = energyCost + serviceCharge;
let vat = subTotal*vatParcentage;
let totalBill = subTotal + vat;

console.log("Unit used:",usedUnit);
console.log("Energy cost:", energyCost);
console.log("Service charge:", serviceCharge);
console.log("Sub total:",subTotal);
console.log("VAT:",vat);
console.log("Total bill:",totalBill);
