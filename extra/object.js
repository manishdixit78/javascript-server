// ** In this program basic operation executed using methods of Object.
// ***create a object***
 let student ={
    id: 201,
    name:'Ravi',
    year:'3rd year',
};
console.log(student);

// **Object.assign() Method**

let target={a:1,b:2,c:'abc'};
let source={b:34,c:'abcd'};

console.log(Object.assign(target, source));
console.log(target);

let copy=Object.assign({},target);     //for copy an object
console.log(copy);

const ob1={a:3};
const ob2={b:23};                   
const obj3=Object.assign(ob1,ob2);       //for merge the objects
console.log(obj3);


// **Object.create() Method**

const class1={
    isclassrun: true,
    printstatus: function() {
        console.log(`class name is ${this.name}. isclassrun? ${this.isclassrun}`);
    }
};
const cls = Object.create(class1);
cls.name='Maths';
cls.isclassrun=true;
cls.printstatus();  

// **Object.defineProperties() Method**
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 68,
    //writable: true
  },
  property2: {
  },
});

console.log(object1.property1);  

// **Object.defineProperty()**

const object12 = {};

Object.defineProperty(object12, 'property1', {
  value: 42,
  writable: false
});

console.log(object12.property1);

// **Object.entries() Method**

const firstobject={
        a: 'hello world',
        b: 75
      };
      
      for (const [key, value] of Object.entries(firstobject)) {
        console.log(`${key}: ${value}`);
      }
                                      
// **Object.freeze()**

const objec1={
    prop: 42
};
Object.freeze(objec1);
console.log(objec1);
objec1.prop=34;
console.log(objec1);
                    
    
// **Object.fromEntries() Method** 
const values= new Map([
    ['color', 'green'],
    ['size', 42]

]);
const obj = Object.fromEntries(values);

console.log(obj);          

// **Object.getOwnPropertyDescriptor() Method**

const objectfirst={
    p1: 42,
    p2: 34
};
const descriptor1 = Object.getOwnPropertyDescriptor(objectfirst, 'p1' );

console.log(descriptor1.configurable);

console.log(descriptor1.value);    

// **Object.getOwnPropertyDescriptors() Method**
const objectfirst1={
    p1: 42,
    p2: 34
};
const descriptors1 = Object.getOwnPropertyDescriptors(objectfirst1);

console.log(descriptors1.p2.writable);
 
console.log(descriptors1.p2.value);  

// **Object.getOwnPropertyNames() Method**

const sampleobject={
    a: 12,
    b: 23,
    c:'hello'
};
console.log(Object.getOwnPropertyNames(sampleobject)); 

// **Object.getOwnPropertySymbols() Method**

const object132 = {};
const a = Symbol('cd');
const b = Symbol.for('gj');

object1[a] = 'firstSymbol';
object1[b] = 'secondSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object132);
 
console.log(objectSymbols.length);   

// **Object.getPrototypeOf() Method**

const prototype1 = {};
const object341 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object341) === prototype1);   

// **Object.is() Method**

console.log(Object.is('hello', 'hello'));    
Object.is('window', 'window');  

Object.is('foo', 'bar');   
Object.is([], []);           

var first = { a: 1 };
var second = { a: 1 };
console.log(Object.is(first, first));        
Object.is(first, second);        

Object.is(null, null);       
Object.is(0, -0);             
console.log(Object.is(-0, -0));          
Object.is(NaN, 0/0);      

// **Object.isExtensible() Method**

const object167 = {};
console.log(Object.isExtensible(object167));
Object.preventExtensions(object167);
console.log(Object.isExtensible(object167));  

// **Object.isFrozen() Method**

let sampleobj={
  p1: 97
};
console.log(Object.isFrozen(sampleobj));
Object.freeze(sampleobj);

console.log(Object.isFrozen(sampleobj));  

// **Object.isSealed() Method**

let objexp={
   p1: 98
};
console.log(Object.isSealed(objexp));
Object.seal(objexp);

console.log(Object.isSealed(objexp));  

// **Object.keys() Method**

const obj32={
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.keys(obj32));  

// **Object.preventExtensions() Method**

const objectfirst34= {};

Object.preventExtensions(objectfirst34);

try {
  Object.defineProperty(objectfirst34, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
}  

// **Object.values() Method**

const sampleobj32={
    a: 'somestring',
    b: 42,
    c: false,
    d: 'dhjhd',
    e: 93872
};
console.log(Object.values(sampleobj32));