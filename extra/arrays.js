// ***create a Array and Initilize it and perform some operation over it***
let arr1=[1,'hello',3,'hii',4.5];

console.log('The array is: ',arr1);                              //print the array
console.log('The length of array is: ',arr1.length);              //find length of array
console.log('The value of given index is: ',arr1[2],arr1[1]);      //find value via index
let new_item= arr1.push('good morning');                           // adding values at the last 
console.log('The new value after adding from last is: ',arr1[5]);
console.log("The new array after adding from the last is: ",arr1);
let rem=arr1.pop();                                                 // remove the value from the last
console.log('After deletion from the back: ',arr1);    
let rem_first=arr1.shift();                                      //removing from the front
console.log('After removing from the front: ',arr1);
let add_first=arr1.unshift(55);                                 // adding from the front
console.log('After adding from the front: ',arr1);
console.log("The index is: ",arr1.indexOf('hello'));           //for Find the index of an item in the Array


//**Remove an item by index position**
let pos=1;              //index where to start
let totlength=2;         // total number of iterations
 let remove_items=arr1.splice(pos,totlength);
 console.log(arr1);
 console.log(remove_items);          

// **Array.from() method**
let arr2=Array.from('foo');
arr2=Array.from('12345');
console.log(arr2);

function fun() {
    console.log( Array.from(arguments));
  }
  
fun(1, 2, 3);

// **Array.isArray() method**
let f=Array.isArray('hello');
console.log(f);


// **Array.of() Method**
console.log(Array.of(7));
console.log(Array.of(1, 2, 3));  

// **Array.prototype.concat() Method**

const array1 = ['a', 'b', 'c',34];
const array2 = ['d', 'e', 'f',3.4];
const array3 = array1.concat(array2);

console.log(array3);          

// **Array.prototype.copyWithin() Method**

const arraywith = ['a', 'b', 'c', 'd', 'e'];
console.log(arraywith.copyWithin(0, 3, 4));
console.log(arraywith.copyWithin(1, 3));           

// **Array.prototype.entries() Method**

const arrayentries = ['a', 'b', 'c'];
const iterator1 = arrayentries.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

// **Array.prototype.every() Method**

const isBelowThreshold = (currentValue) => currentValue < 40;
const arrayever = [1, 30, 39, 29, 10, 13];
console.log(arrayever.every(isBelowThreshold));  

// **Array.prototype.fill() Method**

const array143 = [1, 2, 3, 4];
console.log(array143.fill(0, 2, 4));
console.log(array143.fill(5, 1)); 
console.log(array143.fill(6));  

// **Array.prototype.filter() Method**

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 8);
console.log(result);   

// **Array.prototype.find() Method**

const arrayfin = [5, 12, 8, 130, 44];
const found = arrayfin.find(element => element > 6);
console.log(found);   

// **Array.prototype.findIndex() Method**

const arrayind = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 10;
console.log(arrayind.findIndex(isLargeNumber));

// **Array.prototype.forEach() Method**

const arrayforeach = ['a', 'b', 'c',3,5,4.5];
arrayforeach.forEach(element => console.log(element));

// **Array.prototype.map() Method**

const arraymap = [1, 4, 9, 16,87];
const map1 = arraymap.map(x => x * 4);
console.log(map1);

// **Array.prototype.toString() Method**

let arraystr = [1, 2, 'a', '1a',3.4,'hello'];
console.log(arraystr.toString());  

// **Array.prototype.values() Method**

const arrayval = ['a', 'b', 'c',54,2,'hii'];
const iterator = arrayval.values();

for (const value of iterator) {
  console.log(value);
}


// **Array.prototype.reverse() Method**

const arrayrev1 = ['one', 'two', 'three',3,5,7.8];
console.log('arrayFirst:', arrayrev1);
const reversed = arrayrev1.reverse();
console.log('reversed:', reversed);