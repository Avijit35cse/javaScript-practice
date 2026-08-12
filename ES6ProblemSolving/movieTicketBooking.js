// movieTicketBooking.js
// Movie Ticket Booking
// Function Name Must be: bookTicket
// একটি সিনেমা Booking App-এ Default ভাবে প্রতি Booking-এ 1টি Seat এবং Ticket প্রতি ৩00 টাকা ধরা হয়, 
// যদি ইউজার আলাদা কিছু না দেয়। তোমার কাজ হলো ES6 Default Parameter দিয়ে এই System টি তৈরি করা।
// Input
// Function তিনটি Parameter গ্রহণ করবে — movie (String), seats (Number, default 1), pricePerSeat (Number, default 300)
// Output / নিয়ম
// Total ক্যালকুলেট করতে হবে seats × pricePerSeat
// Return করতে হবে: "<movie>: <seats> seat(s), Total ৳<total>"
// Validation
// Return "Invalid" যদি movie String না হয় অথবা seats/pricePerSeat Negative Number হয়।
// const bookTicket = (movie, seats= 1,pricePerSeat= 300) => {
//     if(typeof movie !== "string"|| seats < 0 || pricePerSeat < 0){
//         return "Invalid";
//     }
//     let total = seats * pricePerSeat;
//     return `${movie} : ${seats} seat(s), Total ৳ ${total}`
// }
// console.log(bookTicket("Dune"));
// console.log(bookTicket("Dune",3));
// console.log(bookTicket("Dune",2,450));
// console.log(bookTicket(123,2));

// for chatgpt mock

// const calculateDiscount = (price, discount =10) => {
//     if(typeof price !== "number"){
//         return "Invalid";
//     }
//     const discountAmount = price*(discount/100);
//     return discountAmount;
// }
// console.log(calculateDiscount(1000));
// console.log(calculateDiscount(2000, 20));
// console.log(calculateDiscount("1000"));
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const mergedArray = [...arr1,...arr2];
// const user = {
//     name: "Rahim",
//     age: 25,
//     city: "Dhaka"
// };
// const user2 = {...user, role:"Developer"}
// const numbers = [10, 15, 20, 25, 30];
// const evenNumber = numbers.filter((number)=>{
//     if(number %2 === 0){
//         return number;
//     }
// });
// const prices = [100, 200, 300];
// const updatedPrice = prices.map(price=>price+50);
// const users = [
//     {name: "Rahim", age: 25},
//     {name: "Karim", age: 30},
//     {name: "Sakib", age: 28}
// ];
// const user = users.find(user.name === "karim");
// const products = [
//     {name: "Laptop", price: 50000},
//     {name: "Phone", price: 20000},
//     {name: "Mouse", price: 1000}
// ];
// const total = products.reduce((sum,product)=> sum + product.price , 0)
// const students = [
//     {name: "Rahim", mark: 80},
//     {name: "Karim", mark: 45},
//     {name: "Sakib", mark: 60},
//     {name: "Nayeem", mark: 30}
// ];
// const getPassedStudents= (students)=>{
//     if(!Array.isArray(students)){
//         return `Invalid`
//     }
//     const passedStudent = students.filter(student =>student.mark >=50)
//     // return passedStudent;
//     }
//     console.log(getPassedStudents(students));

// const users = [
//     {name:"Rahim", age:25},
//     {name:"Karim", age:30},
//     {name:"Sakib", age:28}
// ];
// const createUserCard=(users)=>{
//     if(!Array.isArray(users)){
//         return `Invalid`
//     }
// const users2 = users.map(user=>{
//     const {name,age}= user;
//     return `${name} is ${age} years old.`
// })
// return users2;

// }
// console.log(createUserCard(users));
// const employees = [
//     {name:"Rahim", salary:25000},
//     {name:"Karim", salary:45000},
//     {name:"Sakib", salary:35000},
//     {name:"Nayeem", salary:15000}
// ];
// const getHighSalaryEmployees = (employees)=>{
//     const highSalary = employees.filter(employee=>employee.salary >=30000)
//     const HighSalaryEmployees = highSalary.map(employee=>employee.name)
//     return HighSalaryEmployees; 
// }
// console.log(getHighSalaryEmployees(employees));
// const cart = [
//     {product:"Laptop", price:50000, quantity:1},
//     {product:"Mouse", price:1000, quantity:2},
//     {product:"Keyboard", price:3000, quantity:1}
// ];
// const calculateCartTotal =(cart)=>{
//     const total = cart.reduce((sum,product)=>sum + product.price * product.quantity ,0)
//     return total;
// }
// console.log(calculateCartTotal(cart));
const students = [
    { name: "Rahim", marks: [80, 70, 90] },
    { name: "Karim", marks: [40, 50, 60] },
    { name: "Sakib", marks: [90, 95, 85] }
];
const getTopStudents = (students)=>{
    if(!Array.isArray(students)){
        return `Invalid`
    }
    const topStudents = students.filter(student=>{
        const total = student.marks.reduce((sum,mark)=> sum + mark,0)
        const average = total / student.marks.length
        return average >= 80;
    })
    return topStudents.map(student=>student.name);
}
console.log(getTopStudents(students));