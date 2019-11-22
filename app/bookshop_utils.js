function addVAT(price) {
    return price + (0.2 * price);
}

// 4+5 - print Full name
function getFullName (firstName, surname) {
return firstName + ' ' + surname ;
}
// 6+7 - make an item half price
function makeHalfPrice (price) {
    return price/2
}
//8+9 count number of books in an array
function countBooks(arr) {
    return arr.length;
}
//10 +11 Check a book is in stock
function isInStock (book) {
    if (book.quantity > 0) {
        return true;
    } else {
       return false;
    }
}
// 12 +13 calcualte the total order price including VAT
function getTotalOrderPrice(price, quantity) {
    let item = price*quantity ;
    let total = addVAT(item);
    return total;

}
//  This is what you need in order to import functions to another code.
module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};