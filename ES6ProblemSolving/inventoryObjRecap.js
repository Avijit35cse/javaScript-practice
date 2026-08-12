// Inventory Object Manager
// Function Name Must be: manageInventoryObject
// একটি Warehouse System Object-ভিত্তিক Product Stock Manage করে। Action Parameter অনুযায়ী keys/values/entries বের করে,
//  Property Delete করে, অথবা Object Seal/Freeze করে।
// Input
// manageInventoryObject(obj, action) — action হতে পারে: "keys" | "values" | "entries" | "delete:<propName>" | "seal" | "freeze"
// নিয়ম (Rules)
// "keys" → Object.keys(obj) Return করবে
// "values" → Object.values(obj) Return করবে
// "entries" → Object.entries(obj) Return করবে
// "delete:propName" → propName Delete করে নতুন Object Return করবে
// "seal" → Object.seal(obj) করে Return করবে (নতুন Property Add করা যাবে না)
// "freeze" → Object.freeze(obj) করে Return করবে (কোনো Value পরিবর্তন করা যাবে না)
// Validation
// Return "Invalid" যদি obj Plain Object না হয় অথবা action এই List-এ না থাকে।
const manageInventoryObject = (obj, action) => {
    const validAction = ["keys", "values", "entries", "seal", "freeze"]
    const deleteAction = action.startsWith("delete:")
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) { return `Invalid` }
    if (!validAction.includes(action) && !deleteAction) { return `Invalid` }
    switch (action) {
        case "keys": return Object.keys(obj)
        case "values": return Object.values(obj)
        case "entries": return Object.entries(obj)
        case "seal": return Object.seal(obj)
        case "freeze": return Object.freeze(obj)
    }
    if(deleteAction){
        const propName = action.split(":")[1]
        delete obj[propName]
        return obj
    }
}
console.log(manageInventoryObject({a:1,b:2,c:3}, "keys"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "entries"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:c"));
console.log(manageInventoryObject({a:1}, "shrink"));
