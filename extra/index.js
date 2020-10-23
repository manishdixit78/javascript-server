

import {diamondpattern, equilateTriangle} from './patterns/index.js';
diamondpattern(5);
console.log();
equilateTriangle(4);

import {hasPermission} from './utils/index.js';
import {permissions} from './constants.js';

import {validateUsers} from './utils/index';
import {validateEmail} from './utils/index';
console.log();
//hasPermission('getUsers','trainer','write');
hasPermission(permissions.getUsers,'head-trainer','all');

validateUsers(users);

const users=
[
{
traineeEmail: "manish.dixit@successive.tech",
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
