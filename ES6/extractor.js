// User Profile Extractor
// Function Name Must be: extractUserInfo
// একটি Social App-এর API একটি Nested User Object Return করে। Destructuring ব্যবহার করে Nested Data থেকে
//  Name, Age এবং Hobby List-এর First Item বের করতে হবে।
// Input
// extractUserInfo(userObj) — userObj = { user: { name, age }, hobbies: […] }
// // Output / নিয়ম
// // Object এবং Array Destructuring ব্যবহার করতে হবে (Default এবং Rename সহ)
// // Return করতে হবে: "<name> (<age>) likes <firstHobby>"
// // hobbies Array Empty হলে firstHobby এর Default হবে "nothing yet"
// // Validation
// // Return "Invalid" যদি user.name না থাকে।

// // টেস্ট কেস
// // Input
// // Output
// // {user:{name:"Sadia",age:22}, hobbies:["reading","coding"]}
// // Sadia (22) likes reading
// // {user:{name:"Rafi",age:19}, hobbies:[]}
// // Rafi (19) likes nothing yet
// // {user:{age:30}, hobbies:[]}
// // Invalid
// const extractUserInfo = (userObj) => {
//     if(!userObj.user || !userObj.user.name){
//         return "Invalid"
//     }
//     const {user: {name,age}, hobbies: [...]} = userObj;
 
    

// }
const student = {
    name: "Karim"
};

const { name: studentName } = student;

console.log(studentName);

