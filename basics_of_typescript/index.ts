// 

//    ........2.....
// var carts:string[] = ['soap','facewash','candie','candle','paste']
// carts.splice(2,2,'sting','splits')
// console.log(carts);
// .... 3 .....
// var integ:number = 1;
// while(integ<=25){
//     console.log(integ);
//     integ++;
    
// }
//........4...
// function changeValue(arr: string[], index: number, value: string): string[] {
//     arr.splice(index, 0, value);
//     return changeValue;
//   }
//   changeValue([“Ali”,”Usama”,”Abdullah”,”umar”],1,”Numan”)
//   let modifiedArray:string[] = changeValue([“Ali”,”Usama”,”Abdullah”,”umar”],1,”Numan”);
//   console.log(modifiedArray);

//....5....
//  function insertValueAtIndex(array: number[], index: number, value: number): number[] {
//      // Check if the index is valid
//     //  if (index < 0 || index > array.length) {
//     //    throw new Error('Index is out of bounds');
//     //  }
  
//      // Use the splice method to insert the value at the specified index
//      array.splice(index, 0, value);
  
//      return array;
//    }
  
// //   // Example usage:
//    const originalArray: number[] = [1, 2, 3, 4];
//   const indexToInsert = 2;
//    const valueToInsert = 99;
  
//  const modifiedArray = insertValueAtIndex(originalArray, indexToInsert, valueToInsert);
  
//   console.log(modifiedArray); // Output: [1, 2, 99, 3, 4]
  
// function gormani(array:number[],index:number,value:number) {
//     array.splice (index,0,value)
//     return array;
    
// }
// var arrayvalue = [34,75,51,78,98]
// var indexvalue = 75;
// var valuec = 203
// var modifiedfunction = gormani(arrayvalue,indexvalue,valuec)
// console.log(modifiedfunction);

// function  hanzla<T>(array:T[], index:number, value: T){ 
//     // check if function is valid
//     if(index<0 || index > array.length){
//         throw new Error('index is out of bounds');
//     }
//     array.splice(index,0,value);
//     return array;

    
// }
// var orgarray: number[]= [2,4,76,24];
// var indexwala = 1;
// var valuewala = 79;
// var modifiedarray = hanzla(orgarray,indexwala,valuewala);
// console.log(modifiedarray);


// var carts:number[] = [37,74,78.32,43];
// carts.splice(2,1,61)
// console.log(carts);

// let n=0;
// let num=2;
// while(n<=10){
//     n++;
//     console.log(num);
//     num+=2;
    
// }
// function fntn(:type) {
    
// }
// function calculateFactorial(n: number): number {
//     if (n < 0) {
//         throw new Error("Factorial is not defined for negative numbers");
//     } else if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         let i = 2;

//         while (i <= n) {
//             result *= i;
//             i++;
//         }

//         return result;
//     }
// }
// const numberToCalculateFactorial = 9;
// const factorialResult = calculateFactorial(numberToCalculateFactorial);
// console.log(`Factorial of ${numberToCalculateFactorial} is ${factorialResult}`);

// Example usage:
//  Find factorial.......
// function calculatefactorial(n:number) {
//     if(n < 0){
//         throw new Error("factor is not defined");

//     }
//     else if(n==0 || n==1){
//         return 1;
//     }
//     else{
//         let result= 1;
//         let i =2;
//         while(i <= n){
//             result *= i;
//             i++;

//         }
//         return result;
//     }


// }
// const factorialno = 5;
// var factorialresult = calculatefactorial(factorialno);
// console.log(`Factorial of ${factorialno} is ${factorialresult}`);

// var arr:number[] = [43,-32,43,22,-6,93];
// if(arr.length>=0){
//     console.log(arr);
    
//}

// function removeNegativeNumbers(numbers: number[]): number[] {
//     // Use the `filter` method to create a new array with only positive numbers
//     const positiveNumbers = numbers.filter((num) => num >= 0);
//     return positiveNumbers;
//   }
  
//   // Example usage:
//   const numbersArray: number[] = [1, -2, 3, -4, 5, -6];
//   const positiveNumbersArray: number[] = removeNegativeNumbers(numbersArray);
  
//   console.log("Original Array:", numbersArray);
//   console.log("Array with Negative Numbers Removed:", positiveNumbersArray);


//   concept of filter negative to positive number

// function remove(number:number[]){
//     var positivenum = number.filter((num) => num >= 0)
//     return positivenum;
    
// }
// var numberarray:number[] = [23,2,-43,99,-33]
// var positivearray = remove(numberarray);
// console.log('original array is',numberarray);
// console.log('after remove negative',positivearray);


//  function calcultesum(numbers:number[]) {
//      var sum = 0;
//   var index = 0;
//    while(index<numbers.length){
//         sum += numbers[index];
//         index++;
//    }
//          return sum;
//  } 
// var arrnum:number[] = [32,54,11,65,34];
//  const guru= calcultesum(arrnum);
//  console.log(guru);


// function calculateSum(numbers: number[]): number {
//     let sum = 0;
//     let index = 0;
  
//     // Use a while loop to iterate through the array
//     while (index < numbers.length) {
//       sum += numbers[index];
//       index++;
//     }
  
//     return sum;
//   }
  
//   // Example usage:
//   const numbersArray: number[] = [1, 2, 3, 4, 5];
//   const sum: number = calculateSum(numbersArray);
  
//   console.log("Sum of the array:", sum);
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items,
   // and update quantities using the splice method. Print the cart's contents after each operation  


// interface CartItem {
//      item: string;
//      quantity: number;
//    }
   
//    let cart: CartItem[] = [];
   
//    function addItem(item: string, quantity: number): void {
//      cart.push({ item, quantity });
//      console.log("Item added to cart:", item);
//      printCart();
//    }
   
//    function removeItem(item: string): void {
//      let index = findItemIndex(item);
//      if (index !== -1) {
//        cart.splice(index, 1);
//        console.log("Item removed from cart:", item);
//      } else {
//        console.log("Item not found in cart:", item);
//      }
//      printCart();
//    }
   
//    function updateQuantity(item: string, newQuantity: number): void {
//      let index = findItemIndex(item);
//      if (index !== -1) {
//        cart[index].quantity = newQuantity;
//        console.log("Quantity updated for item:", item);
//      } else {
//        console.log("Item not found in cart:", item);
//      }
//      printCart();
//    }
   
//    function findItemIndex(item: string): number {
//      for (let i = 0; i < cart.length; i++) {
//        if (cart[i].item === item) {
//          return i;
//        }
//      }
//      return -1;
//    }
   
//    function printCart(): void {
//      console.log("Cart contents:");
//      for (let i = 0; i < cart.length; i++) {
//        console.log(cart[i].item + " - Quantity: " + cart[i].quantity);
//      }
//      console.log("-----------------");
//    }
   
   
   
//    addItem("Apple",3);
//    addItem("Orange",12);
//    printCart()

// function calculatefactorial(numbers:number) {
//      var factorial:number = 1;
//      var i= 1;
//      while (i<=numbers) {
//           factorial *= i;
//           i++;     
//      }
//      return factorial;
     
// }
// var f= calculatefactorial(7)
// console.log(f);

// function func(num:number[]) : void{
//      var i:number = 0;
//      while(i<num.length){
//           if(num[i]<0){
//                num.splice(i,1);
//           }
//           else{
//           i++;
//           }
//      }
//      console.log(num[i]);
     

     
// }
//  func ([73,433,-77,89,-577])

//  function removeNegativeNumbers(numbers: number[]): void {
//       var i: number = 0;
//       while (i < numbers.length) {
//         if (numbers[i] < 0) {
//           numbers.splice(i, 1);
//         } else {
          
//           i++;
//         }
       
       
//       }
    
//     }
   
//  var positive = removeNegativeNumbers([1,2,3,4,-4,-6,21,10])
//  console.log(positive);
 

// var celsiustemp:number[] = [23,78,57]
// var converted:number[]= []
// var i:number = 0;
// while (i<celsiustemp.length) {
//     var celsius:number = celsiustemp[i]
//      var ferhnheight: number = (celsius * 9/5) + 32;    
//      converted.push(ferhnheight)
// }
// console.log(converted);

//    var celsius:number = 99;
//    var converted:number = celsius*(9/5)+32;
//    console.log("farhenheit of 99 is", converted );
   
// var a:number = 325;
// var b:number = 857;
// var c:number = 453;
// var sum:number = a + b + c;
// var avg:number = sum/3;
// console.log(avg);




// var days: number = 22;
// var weeks = Math.floor(days/7);
// var remainingdays= days%7;
// if (weeks === 0) {
//      return `${days} days`;
//    } else if (remainingdays === 0) {
//      return `${weeks} weeks`;
//    } else {
//      return `${weeks} weeks and ${remainingDays} days`;
//    }
 
 
//  // Example usage:
//  const numberOfDays = 17;
//  const result = daysToWeeksAndDays(numberOfDays);
//  console.log(`${numberOfDays} days = ${result}`);

// function daysToWeek(days:number) {
    
//     var weeks = Math.floor(days/7);
//     var remainingdays = days%7;
//     if(weeks ==0){
//     return`${days} days`;
//     }
//     else if(remainingdays == 0){
//         return `${weeks} weeks`;
//     }
//     else {
//         return `${weeks} weeks and ${remainingdays} days`;
//     }
    
// }
// const totaldays = 27;
// const result = daysToWeek(totaldays);
// console.log(`${totaldays} days = ${result}` );

// function discountprice(price:number) {
   
//     if(price<=100){
//         var discounted = price - (price/100 * 5)
//         return discounted;
//     }
//     else{
//         var morediscount = price - (price/100*10)
//         return morediscount;
//     }
    
// }
// const givenprice = 335;
// const discountedprice = discountprice(givenprice);
// console.log(`the discounted price is ${discountedprice}`);

// var age:number = 22;
// if (age<=12){
//     console.log('child');
    
// }
// else if(age<=19){
//     console.log('teenager');
    
// }
// else{
//     console.log('adult');
    
// }
     
// var temp:string = 'cold';
// if(temp == 'cold'){
//     console.log('wear warm clothes and so on');
// }
// else{
//     console.log('wear clothes according to the weather');
    
// }

// ... map method ....

//  var arr:number[] = [43,22,43,12,8];

// const doublenum:number[] = arr.map((curValue:number) => curValue*3);
// console.log(doublenum);

// const convertstring:string[] = arr.map((curvalue:number)=> curvalue.toString())
// console.log(convertstring);

// Define an array of numbers
// const numbers: number[] = [1, 2, 3, 4, 5];

// // Create a mapping function to convert numbers to strings and add names
// function mapNumbersToStringsAndAddNames(number: number): string {
//   let name = "";
  
//   // Assign names based on the number value
//   switch (number) {
//     case 1:
//       name = "One";
//       break;
//     case 2:
//       name = "Two";
//       break;
//     case 3:
//       name = "Three";
//       break;
//     case 4:
//       name = "Four";
//       break;
//     case 5:
//       name = "Five";
//       break;
//     default:
//       name = "Unknown";
//   }
  
//   // Convert the number to a string and add the name
//   return number.toString() + " - " + name;
// }

// // Use the map method to transform the array of numbers
// const result: string[] = numbers.map(mapNumbersToStringsAndAddNames);

// // Output the result
// console.log(result);

// var arr:number[] = [1,2,3,4,5];
// function numberToString(numbers:number) {
//   let names = "";
//   switch (numbers) {
//     case 1:
//       names= "one";
      
//       break;
//       case 2:
//         names = "two";
//       break;
//       case 3:
//         names = "three";
//         break;
//         case 4:
//           names = "four";
//           break;
//           case 5:
//             names = "five";
//             break;
//     default:
//       names = "unknown value";
//       break;
//   } 
//   return numbers.toString() + "-" + names;
  
// }
// const result:string[] = arr.map(numberToString)
// console.log(result);
// var num:number[] = [1,2,3,4,5];

// function convert(number:number) {
//   var names = "";
//   switch (number) {
//     case 1:
//       names = "hanzla";
//       break;
//       case 2:
//         names= "farooq";
//         break;
//         case 3:
//           names = "david";
//           break;
//           case 4:
//             names = "sid";
//             break;
//             case 5:
//               names = "shahid";
//               break;
  
//     default:
//       names = "unknown value"
//       break;
//   }
//   return number.toString() + "-" + names;
// }
// const result:string[] = num.map(convert)
// console.log(result);
  
// var num:number[] = [1,2,3,4,5];
// var doublenumber:number[]= num.map((curvalue:number)=> curvalue*5)
// console.log(doublenumber);
// ..... filter......
// var num:number[]= [15,33,24,22,46];
// var filternumber:number[] = num.filter((curvalue:number)=> curvalue%2===0)
// console.log(filternumber);
//   new string with greater thn or equal to 5 in length.
//  var names:string[] = ["Alice","bob","Anna","andrew","Alex"]
//  var fivealpha:string[] = names.filter((currwords:string)=> currwords.length>=5)
//  console.log(fivealpha);
 
// check capital or small..
//  var names:string[] = ["Alice","bob","Anna","andrew","Alex"]
//  var capital:string[] = names.filter((currwords:string)=> /^[a-z]/.test(currwords.charAt(0)));
//  console.log(capital);
  
//.. foreach....

// var nunbers = [2,4,5,3];
// nunbers.forEach((n , i , numbers) => {
//     console.log(n , i, numbers);
    
// })

// Define an array of strings
// const fruits: string[] = ["apple", "banana", "cherry", "date"];

// // Initialize an empty string to store the concatenated result
// let concatenatedFruits: string = "";

// // Use forEach to iterate over the array and concatenate the strings
// fruits.forEach((fruit) => {
//   console.log(fruits);
  
// });

// Remove the trailing ", " from the concatenated result
// concatenatedFruits = concatenatedFruits.slice(0, -2);

// // Output the concatenated result
// console.log("Concatenated Fruits:", concatenatedFruits);

// Output:
// Concatenated Fruits: apple, banana, cherry, date

//   ... object......
// var car = {
//   company:'honda', model: 'civic', color: "white", tyre: "4/4"
// }
// console.log(car);

//  we can use multiple objects in program....
// var car = {
//  company:'honda', model: 'civic', color: "white", tyre: "4/4"
// }
// var car1= {
//     company:'toyota', model: 'GLI', color: "black", tyre: "3/4"
//   }
//   var car2= {
//      company:'suzuki', model: 'WagonR', color: "white", tyre: "2/4"
// }
//     var car3 = {
//      company:'hyundai', model: 'tucson', color: "white", tyre: "1/4"
// }
// console.log(car,car1,car2,car3);
 
// //  we can use array for multiple objects....
//  we can detect each array index to perform different task. like that

//  var cars = [{company:'honda', model: 'civic', color: "white", tyre: "4/4"},
//  {company:'toyota', model: 'GLI', color: "black", tyre: "3/4"},
//  {company:'suzuki', model: 'WagonR', color: "white", tyre: "2/4"},
//  {company:'hyundai', model: 'tucson', color: "white", tyre: "1/4"}]
//  for(let index=0;index<=cars.length; index++){
//     console.log(cars[index].model);
    
//  }

// use types in the objects.
// we define a type in the object for datatypes ..

//  type cartype = {company:string,userid:boolean,year:number}
// we can use multiple objects.
//  if any object donotg have that type of data types the it dectect that error. 
//  we can use different type of data type for all the objects 
//  we can use function in the objects and perform different task in the objects 
// we can pass the return values.
// var cars:cartype = {company:"honda", userid:false , year:2001}
// console.log(cars);


// var names:string;
// var age:number;
// names = "Hanzla";
// age = 23;
// console.log(names,age);


// function values(name:string,age:number) {
   
// }
// const naam = 'Hanzla';
// const aag = 22;
// var gormani = values(naam,aag);
// console.log(gormani);

// var nationality:string = "pakistani";
// var year:number= 2005;
// var checkbool:boolean = true;
// var checkdef:undefined = undefined;
// // operation perform ...
// if(year==2005){
//    var increment = ++year;
//    console.log(increment); 
// }
// if(nationality=='pakistani'){
//    console.log("from pakistan");
// }
// var age:number[] = [1,2,3,4,5]
// var  numberToString:string[] = age.map((curvalue:number)=> curvalue.toString())
// console.log(numberToString);

// var pakistan:number = 384;
// pakistan = 'gormani';
// this will result in error because we can assign value according to data type whic already declare.
// let hanzla = 23 ;
// console.log(typeof hanzla);
// parseInt.... it is used to convert from number to string 
// var num :string = "211";
// var converted:number = parseInt(num)
// console.log(converted);

// type student ={
//     id:number
//     name: string;
//     rollno: number;
//     marks: number;
//     Grade: string;
// };
// type point ={
//     x:number;
//     y:number;
// };
// const student1:student= {
//     id:11,
//     name: 'hanzla',
//     rollno:5,
//     marks: 40,
//     Grade: 'B' 
// }
// const student2:student= {
//     id:11,
//     name: 'hanzla',
//     rollno:5,
//     marks: 40,
//     Grade: 'B' 
// }
// const student3:student= {
//     id:11,
//     name: 'hanzla',
//     rollno:5,
//     marks: 40,
//     Grade: 'B' 
// }
// const student4:student= {
//     id:11,
//     name: 'hanzla',
//     rollno:5,
//     marks: 40,
//     Grade: 'B' 
// }
// const originpoint:point = {
//     x:0,
//     y:0
// }
// function checkstudent(student:student){
//     console.log(`id ${student.id}`);
//     console.log(`name ${student.rollno}`);
//     console.log(`rollno${student.rollno}`);
//     console.log(`marks ${student.marks}`);
//     console.log(`Grade ${student.Grade}`);   
// } 
// function checkpoint(point1:point, point2:point) {
//     const dx = point1.x - point2.x;
//     const dy = point1.y - point2.y
//     return Math.sqrt(dx*dx + dy*dy)    
// }
// console.log("student1");
// checkstudent(student1);
// console.log("student2");
// checkstudent(student2)
// console.log("student3");
// checkstudent(student3)
// console.log("student4");
// checkstudent(student4)

// console.log("\distance from origin");
// console.log(checkpoint(originpoint,{x:7,y:4}));

// var colors:string[]= ['yellow','green',"blue","orange"]
// colors.push('white')
// colors.push('red')
// console.log("array of elements");
// for(const c of colors){
//     console.log(c);    
// }
// var searchcolor = "green";
// var colorInArray = colors.includes(searchcolor)
// console.log(`Is ${searchcolor} in array? ${colorInArray ? "yes" : "no"} `);

// var IndexOfBlue = colors.indexOf("blue")
// console.log(`indexofblue ${IndexOfBlue}`);
// if(IndexOfBlue!== -1){
//     colors.splice(IndexOfBlue,1)
// }
// console.log("modified array");
// console.log(colors);

// var isNull:null = null
// var isundefined: undefined6o


    

