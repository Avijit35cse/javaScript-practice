let purchase = 2000;

if (purchase >= 3000) {
    let discountAmount = 20 / 100;
    let discount = purchase * discountAmount;
    let finalPrice = purchase - discount;
    console.log("You purchase:",purchase);
    console.log("You get 20% discount:", discount);
    console.log("Final Price:", finalPrice);
}
else {
    let finalPrice = purchase;
    console.log("You purchase:",purchase);
    console.log("You didn't get any discount");
    console.log("Final Price:",finalPrice);
}