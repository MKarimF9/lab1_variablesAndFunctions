


function formatFullName(firstName, lastName) {
    if (firstName == null || lastName == null){
        return "Invalid input."
    }
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
    return lastName + "," + " " + firstName;
}

console.log(formatFullName("john")); //test
console.log(formatFullName("john", "wick")); //test




function calculateTotalCost(price, quantity, taxRate) {

    if ( typeof price != 'number' || Number.isNaN(price) || typeof quantity != 'number' ||  Number.isNaN(quantity) || 
    typeof taxRate != 'number' || Number.isNaN(taxRate)) {
        return "Invalid input."
    }
    let totalCost = (price * quantity) * (1 + taxRate);

    return totalCost;
}



console.log(calculateTotalCost(20, 23, 0.3)) // test 
console.log(calculateTotalCost(20, "23", 0.3)) // test 




function checkEligibility(age, isEmployed){
    if (age > 18 && isEmployed){
        return "They are eligible"
    }
    if (age > 18 && !isEmployed){
        return "they are conditionally eligible"
    }
    if (age <= 18){
        return "they are not eligible"
    }
}

console.log(checkEligibility(17,true));
console.log(checkEligibility(20, true));
console.log(checkEligibility(20, false));





function calculateTotalCost(price, quantity, taxRate, discount) {
    
    if ( typeof price != 'number' || Number.isNaN(price) || typeof quantity != 'number' ||  Number.isNaN(quantity) || 
    typeof taxRate != 'number' || Number.isNaN(taxRate)) {
        return "Invalid input."
    }

    if (discount != null){
    let totalCost = ((price * quantity) - discount)* (1 + taxRate);
    return `total cost after discount is: ${"$" +totalCost}`;
    }
    let totalCost = (price * quantity) * (1 + taxRate);

    return `total cost is: ${"$" + totalCost}`;
}



console.log(calculateTotalCost(20, 5, 0.3)) // test 
console.log(calculateTotalCost(20, 5, 0.3, 0.2)) // test 