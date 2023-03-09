//Imlement of Any Keyword
// function procesData(x: any, y: any) {
//     return x + y;
// }
 
// let result: any;
// console.log(procesData(2, "Hello rabindra"));
// console.log(procesData(2, 7));


//Implement of Unknown
// let w: unknown = 1; 
// w = "string"; // no error

// w = { 
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   } 
// } as { runANonExistentMethod: () => void }

// // How can we avoid the error for the code commented out below when we don't know the type? 
// // w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 

// if(typeof w === 'object' && w !== null) {
//   (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
// } 

//TypeScript inference means define rhe different types of data type in single array , compiler chose best common

// let arr = [10, 20, null, 40]; 
// console.log(arr);

//Asssertion 

let empCode: any = 111;   //Both are Working
// let employeeCode = <number> empCode;   
let employeeCode = empCode as number; 
console.log(typeof (employeeCode));

let Student1 = {};
// Student1.name="Rabindra"      Not allowed in TypeScript because empty object


//Implementing Interface in TS
interface Student { 
    Name: string;
    Class: string;
    Enrollment: number;
};
let Student = <Student>{};
Student.Name = "Rabindra Kumar Sharma";
Student.Class = "7EC1-Laboratory-C";
Student.Enrollment = 190570107137;
console.log(Student);