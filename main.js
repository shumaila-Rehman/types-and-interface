//                       ========> Types and Interface <========
// In typescript , both types and interface are used to define the shape of data.
var point = {
    x: 65,
    y: "john"
};
var user = {
    a: " Ali",
    b: 25
};
var book = {
    name: "Essentials of Typescript ",
    author: "Adam Freeman",
    pages: 541
};
console.log(book.author);
;
var student = {
    name: "Aehmad",
    age: 20,
    rollNum: 3456,
    phoneNum: "032156789",
    isPassed: true,
    address: {
        postalAddress: 75601,
        city: "karachi",
        country: "Pakistan"
    }
};
console.log(student.address.country);
var shopping = {
    products: ["productDetail_1", " productDetail_2"],
    totalPrice: 500,
    isAvailable: false
};
console.log(shopping.products);
