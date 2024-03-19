//                       ========> Types and Interface <========
// In typescript , both types and interface are used to define the shape of data.

//                            ========> Types <========
// Types allow you to create customs names for different data types,  including primitive types 
// (Like  number, string , boolean ) and complex types (like arrays, objects , function).

//                            =======> Example <========
type  point ={
x :number ;
y : string ;

};
let point ={
    x: 65,
    y :"john"
};
//                             ========> Interface <=========
// Interface are similar to types are more powerful. They can be discribe objects , functions,
// classes and more. Interface  can also be extended and implemented.

//                             ========> Example <=========
interface user {
    a : string ;
    b : number ;
}
let user ={
    a : " Ali",
    b : 25
};
//             ========> Difference Between Types and Interface <=========

//  No 1..Extensibility :
// interface support extending and merging , while types don't.
 
// No 2. .compatibility :
// Interface create a contract that an object must adhere to, while
//types are more flexible

// No. 3..Readability :
//  Interface  are often prefered for defining objects shapes because they explicity
// declare the expected structure.

//              =======> Choosing between types and interface <=========

// Use Types when you need a simple alias for a specific shape of data.
// use interface when you want to define the structure of an object or when you need  features 
//like extendeing and implemented.

//   lets do some coding.
 
type booktype  ={
name : string;
author : string ;
pages : number;
}

let book : booktype ={
    name : "Essentials of Typescript ",
    author: "Adam Freeman",
    pages : 541
        
};

console.log(book.author);


//     =======> some more examples <========

type studentInfo = {
    name : string ;
    age : number;
    isPassed : boolean ;
    class : classinfo


};
interface classinfo  { 
Day :string;
Time : string;
};

let student : studentInfo ={
name : "bilal",
age : 20,
isPassed : true,
class : {
    Day :"Tuesday", 
    Time :  " 8 to 10"
}
};
console.log(student.class);



type studentinfo ={
    name : string;
    age : number ; 
    rollNum : number ;
    phoneNum : string;
    isPassed : boolean;
    address : addressType;
};
interface addressType {
    postalAddress : number;
    city : string ;
    country :string ;

};

let student2 : studentinfo ={
    name : "Aehmad",
    age : 20,
    rollNum : 3456,
    phoneNum:"032156789",
    isPassed : true,
    address  : {
        postalAddress :75601,
        city : "karachi",
        country : "Pakistan"
    }
};

