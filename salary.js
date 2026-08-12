let salary = 40000;
let year = 6;

if (salary >= 30000) {
    if (year >= 5) {
        let bonus = salary * 20 / 100;
        console.log("Salary:", salary);
        console.log("Year:", year);
        console.log("Bonus:", bonus);
    }
    else {
        let bonus = salary * 10 / 100;
        console.log("Salary:", salary);
        console.log("Year:", year);
        console.log("Bonus:", bonus);
    }

}
else {
    console.log("bonus = 0");
}
