// const names = ['Anna', 3, 'Roma', 17, 15, 'Kate', 14, 'Oleg'];

// for (let i = 0; i < names.length; i += 1){

// if(typeof names[i] !== "string"){

// names.splice(i, 1 )
//  i-=1;
// }

// }
// console.log(names);
// for (let i = names.length -1; i >= 0; i -= 1){
 
//     if(typeof names[i] !== "string"){
    
//     names.splice(i, 1 )

//     }
// }
// console.log(names);


// const cart = [1, 2, 3];
// let total = 0;
// console.log(cart);
// console.log(cart[2]);
// for (const value of cart) {
//     total += value;
// }
// console.log('Total: ', total);


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const allArray = firstArray.concat(secondArray);
//   const LengthArray = allArray.Length;
//   return LengthArray <= maxLength ? allArray : allArray.slice(0,maxLength);

//     // Change code above this line
// }
//   makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)


// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }


// function calculateTotal(number) {
//  // Change code below this line
// for (let i = 1; i <= number; i += 1) {
    
//     }
//   // Change code above this line
// }

// function calculateTotal(10) {
//  // Change code below this line
//   let total = 0;
// for ( let i = 0; i <= 10; i += 1 ) {
// total += i;
//   console.log(total);

// }
  
  // Change code above this line
// }



// for (let i = 0; i <= 10; i += 1) {
    
//     console.log(i);
// }

// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;
// for ( let i = 0; i <= number; i += 1 ) {
// sum += i;
//   console.log(sum);
//     return number;
//     }
//   // Change code above this line
// }

// calculateTotal(7);

// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
// for ( let i = 1; i <= number; i += 1 )
// total += i;
  
//   return total;
//   // Change code above this line
// }


// calculateTotal(7);


// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }




function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (const price of order) {
  total += price; 
    }
    console.log(total);
  // Change code above this line
    return total;
    
}
calculateTotalPrice([412, 371, 94, 63, 176])