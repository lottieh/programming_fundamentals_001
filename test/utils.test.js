// This pulls in thr utils
const utils = require('../app/bookshop_utils');

// Original code given to us - adds VAT
describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
  
  // 3) Write another test for the addVAT function
  test('returns 118.8 when passed 99', () => {
      expect (utils.addVAT(99)).toBe(118.8);
    });
  });
  
/* 4) Write a new test for a function called getFullName
Add a new test that will check the behaviour of a getFullName function.
This function takes 2 arguments, a first name and a last name, and 
returns the full name as a single string.*/

describe("utils.getFullName", () => {
  test("returns Susan Jason when passed Susan and Jason", () => {
    expect(utils.getFullName("Susan", "Jason")).toBe("Susan Jason");
  });
});

/* 6) Write a test for a makeHalfPrice function
Add a new test that will check the behaviour of a 
makeHalfPrice function.

This function takes a price as an argument, and 
returns the price with a 50% discount applied.
*/

describe("utils.makeHalfPrice", () => {
  test("returns 50 when price is 100", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
});

/* 8) Write a test for a countBooks function
Add a new test that will check the behaviour of a countBooks function.

This function receives an array of book titles as an argument and 
returns the total number of books in the array.
*/ 

describe('utils.countBooks', () =>{
  test( " return the amounts of books in the array", () => {
    expect (utils.countBooks(['Harry Potter', 'Hunger Games','LOTR'])).toBe(3);
  });
});

/* 10) Write a test for an isInStock function
Add a new test that will check that the behaviour of an isInStock function.
This function should receive an object as an argument.
*/

describe('utils.isInStock', () => {
  test('If book in stock, true is returned', () => {
    const book = {
      title: 'Harry Potter and the Philospher Stone',
      author: ' J K Rowling', 
      yearOfPublication: 1999,
      quantity: 6 }; 

      expect(utils.isInStock (book)).toBe(true);
    });
  

  test('If book is out of stock, false is returned', () => {
    const book = {
      title: 'The Golden Compass',
      author: 'Phillip Pullman',
      yearOfPublication: 1995,
      quantity: 0 };

      expect(utils.isInStock (book)).toBe(false);
  });    
});


/* 13) Write a test for a getTotalOrderPrice function
Add a new test that will check that the behaviour of a 
getTotalOrderPrice function.

This function receives 2 arguments, a price and a quantity. 
The function should multiply the price of the book being ordered by the 
quantity desired, and then apply a VAT of 20% to the total order.
It should return the total price with VAT applied. */

describe('utils.getTotalOrderPrice', () => {
  test ('If item £20, total is £24 including VAT', () => {
    expect(utils.getTotalOrderPrice(20,1)).toBe(24);
  });
});
