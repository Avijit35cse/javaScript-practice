// Scope Detective
// Function Name Must be: describeDeclaration
// একটি কোডিং একাডেমি নতুন শিক্ষার্থীদের var, let, const এর পার্থক্য বোঝাতে একটি ছোট Quiz Tool বানাচ্ছে। 
// Tool-টি একটি keyword ইনপুট নেবে এবং সেই keyword দিয়ে Redeclare ও Reassign করা যায় কিনা তা বর্ণনা করবে।
// Input
// Function একটি Parameter গ্রহণ করবে — keyword (String): "var" / "let" / "const"
// নিয়ম (Rules)
// "var" হলে Return করবে "Can redeclare, can reassign"
// "let" হলে Return করবে "Cannot redeclare, can reassign"
// "const" হলে Return করবে "Cannot redeclare, cannot reassign"
// Validation
// Return "Invalid" যদি keyword এই তিনটির একটিও না হয়।

// const describeDeclaration = (keyword)=>{
//     if(keyword !== "var" && keyword !== "let" && keyword !== "const"){
//         return `Invalid`;
//     }
//     else if(keyword === "var"){
//         return `can redeclare, can reassign`;
//     }
//     else if(keyword === "let" ){
//         return `can't redeclare, can reassign`;
//     }
//     else if(keyword === "const"){
//         return `can't redclare, can't reassign`;
//     }
// }
// console.log(describeDeclaration("let"));
// console.log(describeDeclaration("const"));
// console.log(describeDeclaration("var"));
// console.log(describeDeclaration("int"));

// ADVANCED METHOD
const describeDeclaration = (keyword) => {
    let rules = { 
        const : "Cannnot redeclare, cannot reassign",
        let : "Cannot redeclare, can reassign",
        var : "Can redeclare, can reassign"
    };
    return rules[keyword] || `Invalid`;
}

console.log(describeDeclaration("let"));
console.log(describeDeclaration("const"));
console.log(describeDeclaration("var"));
console.log(describeDeclaration("int"));
