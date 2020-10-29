/*      Description of Task.
Install following packages as dev dependencies:
- @babel/core
- @babel/node
- @babel/preset-env

Create .babelrc file with following content

~~~
{
"presets": ["@babel/preset-env"]
}
~~~

Add a file .gitignore in root directory and add node_modules and package-lock.json into it.

Create a file index.js inside extra folder.
Running the file index.js with babel and also write script for the same in package.json.

Command will be:
~~~
npx babel-node extra
~~~

Patterns:
Export the functions of the patterns from each file(using export default), Also removing function calling from these files.
Import all the patterns inside patterns/index.js and again export all the patterns from index.js file.
Import all the functions in extra/index.js exported from extra/patterns/index.js and now execute these functions with various arguments.

Utils:
-Permission:
* Create a file constants inside folder extra.
* Move all the constant values to above file.
* Export all constants using export.
* Remove hasPermission callings from permission.js.
* Export function hasPermission using export default.
* Import the hasPermission inside utils/index.js and export again using export.
* Import hasPermission inside extra/index.js and call the function with various arguments.

-Validation:
* Create a file helpers.js inside the utils folder.
* Move the function validateEmail from validation.js to helpers.js and export it using export.
* Import validateEmail from helpers.js inside validation.js.
* Export and import the funtion the same as done for hasPermission above.
* Move the constant users and function calling from validation.js to extra/index.js.*/


// import the function of diamondpattern and equilateTriangle from patterns/index
import {diamondpattern} from './patterns/index.js';
import {equilateTriangle} from './patterns/index.js';

// import the functions from validateUsers and validdateEmail from util/index
import {validateUsers} from './utils/index';
//import {validateEmail} from './utils/index';

// import the hasPermission from utils/index and permissions from constants
import {hasPermission} from './utils/index.js';
import {permissions} from './constants.js';

// calling the function and pass the arguments
diamondpattern(5);
console.log();
equilateTriangle(4);

// calling the hasPermission method and pass the arguments.
hasPermission(permissions.getUsers,'head-trainer','all');
console.log();

// define constant values according to the instruction given in the ticket39519
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

// calling the function validateUsers and pass the arguments.
validateUsers(users);