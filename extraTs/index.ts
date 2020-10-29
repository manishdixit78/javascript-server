
// import the function of diamondpattern and equilateTriangle from patterns/index
import {diamondpattern, equilateTriangle} from './patterns/index.js';

// import the hasPermission from utils/index and permissions from constants
import {hasPermission} from './utils/index.js';
import {permissions} from './constants.js';

// import the functions from validateUsers and validdateEmail from util/index
import {validateUsers} from './utils/index';
//import {validateEmail} from './utils/index';

import{Iusers} from './interfaces';

// calling the function and pass the arguments
diamondpattern(5);
console.log();
equilateTriangle(4);


// calling the hasPermission method and pass the arguments.
hasPermission(permissions.getUsers,'head-trainer','all');
console.log();


// define interface of constant values according to the instruction given in the ticket39520
const users: Iusers[]=
[
{
traineeEmail : "manish.dixit@successive.tech",
reviewerEmail: "faiyaz.ahmad@successive.tech"
},
{
 traineeEmail: "manish.dixit@successive.tech*1",
reviewerEmail: "faiyaz.ahmad@successive.tech"
},
{
 traineeEmail: "manish.dixit@successive.tech",
reviewerEmail: "faiyaz.ahmad@successive.tech"
   },
{
traineeEmail: "manish.dixit@successive.tech",
reviewerEmail: "faiyaz.ahmad@successive.tech"
},
{
traineeEmail: "manish.dixit@successive.te/",
reviewerEmail: "faiyaz.ahmad@successive.tech//*"
},
{
traineeEmail: "manish.dixit@successive.te/*",
reviewerEmail: "faiyaz.ahmad@successive.t"
},
{
    traineeEmail: "manish.dixit@successive.tech",
    reviewerEmail: "faiyaz.ahmad@successive.tech"
    },
    {
        traineeEmail: "manish.dixit@successive.tech98",
       reviewerEmail: "faiyaz.ahmad@successive.tech"
       }
];
// calling the function validateUsers and pass the arguments.
validateUsers(users);