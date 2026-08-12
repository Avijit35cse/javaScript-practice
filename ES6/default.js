// একটি সিনেমা Booking App-এ Default ভাবে প্রতি Booking-এ 1টি Seat এবং Ticket প্রতি ৩00 টাকা ধরা হয়, যদি ইউজার আলাদা কিছু না দেয়। 
// তোমার কাজ হলো ES6 Default Parameter দিয়ে এই System টি তৈরি করা।
// Input
// Function তিনটি Parameter গ্রহণ করবে — movie (String), seats (Number, default 1), pricePerSeat (Number, default 300)
// Output / নিয়ম
// Total ক্যালকুলেট করতে হবে seats × pricePerSeat
// Return করতে হবে: "<movie>: <seats> seat(s), Total ৳<total>"
// Validation
// Return "Invalid" যদি movie String না হয় অথবা seats/pricePerSeat Negative Number হয়।

const bookTicket =(movie, seats = 1, pricePerSeat =300) => {
    if(typeof movie !== "string" || 
        seats < 0 ||
        pricePerSeat < 0){
        return "Invalid";
    }
        let total = seats*pricePerSeat;
        return `${movie}: ${seats} seat(s), Total ৳ ${total}`;
    
}
console.log(bookTicket("Dune"));
console.log(bookTicket("Dune", 3));
console.log(bookTicket("Dune", 2, 450));
console.log(bookTicket(123, 2));
