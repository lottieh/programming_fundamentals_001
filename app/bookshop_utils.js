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

/* # Written questions

1. Which part is the file extension of the package.json file?
    .json is the extension

2. What does JSON stand for?
    Java Script Object Notation

3. What is the purpose of JSON?
    It is a minimal readable format for structuring data

4. What does the package.json file do?
    Its purpose is to manage the installation of open source code or software dependanies.

5. How do you install dependencies in a project after first cloning it from Github?
    By running NPM install after cloning the project from Github, it will pulle all dependances from npmjs.com.

6. What does "forking" mean in the context of Github?
    Forking is to copy the project form an external depository on github to your own. 

7. What data types do you know?
    String
    Number
    Object
    Null
    Undefined
    Boolean
    Symbol

8. What is the difference between primitive and complex data types, and can you give examples of each?
    a primitive data type is one which is not an object and has no method. These are of the lowest language level. e.g string, number

9. What would be the best data type for representing whether a user is logged into the system or not?
     Boolean

10. How would you create a variable whose value could not be changed?
    You would use const = "variable"

11. What would be the outcome of running this code?
  
const firstName = "Sandra";

function sayHello(name) {
  console.log("Hello, " + firstName);
}

sayHello("Sally");

    The console would print "Hello Sandra"

12. What would be the outcome of running this code?

function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return fullName;
}

const result = getFullname("Sally", "Jennings");

console.log(fullName);

    This would print "Sally Jennings"

 
13. If you wanted to see what dependencies were required in this project, where would you to to look for a list?

    The required dependencies will be listed in the JSON file.

14. When you install dependencies, what directory is created?

    The node_modules directory. 

15. How can you write comments in your code? 

    you can add comments using // for single line code, or /* */ // for blocks 
